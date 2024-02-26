/* eslint-disable prefer-promise-reject-errors */
import { Readable } from 'node:stream'
import * as objectPath from 'object-path'
import m3u8stream from 'm3u8stream'
import { sign } from '../public/x-bogus.cjs'
import type { Aweme_detail, Aweme_list, Log_pb } from './type'
import type { Data, Extra } from './live'

export interface DouYinHomeDataResult {
  status_code: number
  min_cursor: number
  max_cursor: number
  has_more: number
  aweme_list: Aweme_list[]
  time_list: string[]
  log_pb: Log_pb
  request_item_cursor: number
  post_serial: number
  replace_series_cover: number
}

export interface DouYinVideoDataResult {
  aweme_detail: Aweme_detail
  log_pb: Log_pb
  status_code: number
}
export interface DouYinLiveDataResult {
  data: Data
  extra: Extra
  status_code: number
}
const { get } = objectPath
const shareRegex = /http[s]?:\/\/(douyin.com|v.douyin.com)\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
}
const douyinApiHeaders = {
  'accept-encoding': 'gzip, deflate, br',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
  'referer': 'https://www.douyin.com/',
  'cookie': 'sid_guard=79e6bf0b96058004d4716b62511c5bcd%7C1705808360%7C5183998%7CThu%2C+21-Mar-2034+05%3A39%3A18+GMT;',
}
export function setCookie(cookie: string) {
  douyinApiHeaders.cookie = cookie
}
export function generateXBogusUrl(url: string) {
  const query = new URL(url).searchParams.toString()
  const xbogus = sign(query, headers['User-Agent'])

  return `${url}&X-Bogus=${xbogus}`
}
/**
 * 验证分享链接是否包含抖音分享链接
 * @param url String 分享链接
 * @returns boolean
 */
export const validateUrl = (url: string) => shareRegex.test(url)

export const getItem = {
  getVideoId: (data: DouYinVideoDataResult): string | null => get(data, 'aweme_detail.aweme_id'),
  getAuthorId: (data: DouYinVideoDataResult): number | null => get(data, 'aweme_detail.author_user_id'),
  getSecUid: (data: DouYinVideoDataResult): string | null => get(data, 'aweme_detail.author.sec_uid'),
  getTitle: (data: DouYinVideoDataResult): string | null => get(data, 'aweme_detail.preview_title'),
  getNickName: (data: DouYinVideoDataResult): string | null => get(data, 'aweme_detail.author.nickname'),
  getMusicName: (data: DouYinVideoDataResult): string | null => get(data, 'aweme_detail.music.title'),
  getVideoUrl: (data: DouYinVideoDataResult): string[] | null => get(data, 'aweme_detail.video.play_addr.url_list'),
  getAvatarUrl: (data: DouYinVideoDataResult): string[] | null => get(data, 'aweme_detail.author.avatar_thumb.url_list'),
  getCoverUrl: (data: DouYinVideoDataResult): string[] | null => get(data, 'aweme_detail.video.origin_cover.url_list'),
  getMusicUrl: (data: DouYinVideoDataResult): string[] | null => get(data, 'aweme_detail.music.play_url.uri'),
  getShareUrl: (data: DouYinVideoDataResult): string | null => get(data, 'aweme_detail.share_url'),
  getVideoSize: (data: DouYinVideoDataResult): number | null => get(data, 'aweme_detail.video.play_addr.data_size'),
}
export function getShortUrlByShareUrl(url: string) {
  const match = url.match(shareRegex)
  if (match && match?.length > 0)
    return match[0]
  return null
}
export function getRealUrlByShortUrl(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers,
      redirect: 'manual',
    }).then((res) => {
      if (res.status === 302) {
        const locationHeader = res.headers.get('Location')
        const redirectUrl = locationHeader ? locationHeader.split('?')[0] : locationHeader
        return resolve(redirectUrl as string)
      }
      else {
        return reject(res)
      }
    }).catch((err) => {
      return reject(err)
    })
  })
}
export function getRealUrlByShareUrl(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!validateUrl(url))
      return reject('URL validation failed')

    const shortUrl = getShortUrlByShareUrl(url)
    if (!shortUrl)
      return reject('Failed to get short link')

    getRealUrlByShortUrl(shortUrl).then((res) => {
      return resolve(res)
    }).catch((error: any) => {
      return reject(error)
    })
  })
}
export function getVideoIdByRealUrl(realUrl: string) {
  const match = realUrl.match(/video\/([^\/]+)/)
  if (match && match.length > 0)
    return match[1]
  return null
}
export function getSecIdByRealUrl(realUrl: string) {
  const match = realUrl.match(/user\/([^\/]+)/)
  if (match && match.length > 0)
    return match[1]
  return null
}
export function getRoomIdRealUrl(realUrl: string) {
  const match = realUrl.match(/reflow\/([^\/]+)/)
  if (match && match.length > 0)
    return match[1]
  return null
}
export function getVideoDataByVideoId(videoId: string): Promise<DouYinVideoDataResult> {
  return new Promise((resolve, reject) => {
    const url = `https://www.douyin.com/aweme/v1/web/aweme/detail/?aweme_id=${videoId}`
    const newApiUrl = generateXBogusUrl(url)
    fetch(newApiUrl, { headers: douyinApiHeaders }).then(res => res.json()).then((res) => {
      return resolve(res)
    }).catch((error: any) => {
      return reject(error)
    })
  })
}

export function getHomeDataBySecUid(secUid: string, count = 10, maxCursor = 0): Promise<DouYinHomeDataResult> {
  return new Promise((resolve, reject) => {
    const url = `https://www.douyin.com/aweme/v1/web/aweme/post/?sec_user_id=${secUid}&count=${count}&max_cursor=${maxCursor}&aid=1128&version_name=23.5.0&device_platform=android&os_version=2333`
    const newApiUrl = generateXBogusUrl(url)
    fetch(newApiUrl, { headers: douyinApiHeaders }).then(res => res.json()).then((res) => {
      if (res)
        return resolve(res)
      return reject(res)
    }).catch((error: any) => {
      return reject(error)
    })
  })
}
export function getLiveDataByRoomId(roomId: string): Promise<DouYinLiveDataResult> {
  return new Promise((resolve, reject) => {
    const url = `https://live.douyin.com/webcast/room/web/enter/?aid=6383&web_rid=41410224889&room_id_str=${roomId}`
    const newApiUrl = generateXBogusUrl(url)
    fetch(newApiUrl, { headers: douyinApiHeaders }).then(res => res.json()).then((res) => {
      if (res)
        return resolve(res)
      return reject(res.toString())
    }).catch((error: any) => {
      return reject(error)
    })
  })
}
export function getInfo(url: string): Promise<DouYinVideoDataResult> {
  return new Promise((resolve, reject) => {
    getRealUrlByShareUrl(url).then((res) => {
      const videoId = getVideoIdByRealUrl(res)
      if (!videoId)
        return reject('Failed to get ID')

      getVideoDataByVideoId(videoId).then((res) => {
        resolve(res)
      }).catch((error: any) => {
        return reject(error)
      })
    }).catch((error: any) => {
      return reject(error)
    })
  })
}
export function getHomeInfo(url: string, count = 10, maxCursor = 0): Promise<DouYinHomeDataResult> {
  return new Promise((resolve, reject) => {
    getRealUrlByShareUrl(url).then((res) => {
      const secUid = getSecIdByRealUrl(res)
      if (!secUid)
        return reject('Failed to get secUid')

      getHomeDataBySecUid(secUid, count, maxCursor).then((res) => {
        resolve(res)
      }).catch((error: any) => {
        return reject(error)
      })
    }).catch((error: any) => {
      return reject(error)
    })
  })
}

export function fetchStream(url: string): Readable {
  const stream = new Readable({
    read: () => {

    },
  })
  fetch(url, { headers }).then(async (res) => {
    const contentLength = Number(res.headers.get('Content-Length')) || 0
    let receivedLength = 0
    if (!res.body)
      throw new Error('stream failed')
    const reader = res.body.getReader()
    while (true) {
      const { value, done } = await reader.read()

      if (done) {
        stream.emit('end', { size: contentLength })
        break
      }
      receivedLength += value.length
      stream.push(value)
      stream.emit('process', { current: receivedLength, size: contentLength, process: parseFloat((receivedLength / contentLength).toFixed(2)) })
    }
  }).catch((error) => {
    stream.emit('error', error)
  })
  return stream
}
export function downloadFromInfo(data: DouYinVideoDataResult) {
  const videoUrl = getItem.getVideoUrl(data)
  let current = 0
  if (!Array.isArray(videoUrl) || videoUrl.length === 0)
    throw new Error('video url failed')

  let stream = fetchStream(videoUrl[current])
  stream.on('error', () => {
    current += 1
    if (current >= videoUrl.length - 1)
      throw new Error('video url failed')
    stream = fetchStream(videoUrl[current])
  })
  return stream
}
export function download(url: string): Promise<Readable> {
  return new Promise((resolve, reject) => {
    getInfo(url).then((res) => {
      return resolve(downloadFromInfo(res))
    }).catch((error) => {
      return reject(error)
    })
  })
}
export async function getLiveInfo(url: string): Promise<DouYinLiveDataResult> {
  return new Promise((resolve, reject) => {
    getRealUrlByShareUrl(url).then((res) => {
      const roomId = getRoomIdRealUrl(res)
      if (!roomId)
        return reject('Failed to get RoomId')

      getLiveDataByRoomId(roomId).then((res) => {
        resolve(res)
      }).catch((error: any) => {
        return reject(error)
      })
    }).catch((error: any) => {
      return reject(error)
    })
  })
}
export function liveStream(data: DouYinLiveDataResult) {
  const m3u8Url = get(data, 'data.data.0.stream_url.hls_pull_url')
  const stream = m3u8stream(m3u8Url)
  return stream
}
