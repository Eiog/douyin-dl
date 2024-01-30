/* eslint-disable prefer-promise-reject-errors */
import * as objectPath from 'object-path'

import { sign } from '../public/x-bogus.cjs'

interface DouyinVideoDataResult {
  aweme_detail: { [key: string]: any }
  log_pb: { [key: string]: any }
  status_code: number
}
const { get } = objectPath
const shareRegex = /http[s]?:\/\/(douyin.com|v.douyin.com)\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/
const videoDataUrl = (videoId: string) => `https://www.douyin.com/aweme/v1/web/aweme/detail/?device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=${videoId}&pc_client_type=1&version_code=190500&version_name=19.5.0&cookie_enabled=true&screen_width=1344&screen_height=756&browser_language=zh-CN&browser_platform=Win32&browser_name=Firefox&browser_version=110.0&browser_online=true&engine_name=Gecko&engine_version=109.0&os_name=Windows&os_version=10&cpu_core_num=16&device_memory=&platform=PC&webid=7158288523463362079&msToken=abL8SeUTPa9-EToD8qfC7toScSADxpg6yLh2dbNcpWHzE0bT04txM_4UwquIcRvkRb9IU8sifwgM1Kwf1Lsld81o9Irt2_yNyUbbQPSUO8EfVlZJ_78FckDFnwVBVUVK`
const homePageUrl = (secUid: string, maxCursor: number) => `https://www.douyin.com/aweme/v1/web/aweme/post/?sec_user_id=${secUid}&count=35&max_cursor=${maxCursor}&aid=1128&version_name=23.5.0&device_platform=android&os_version=2333`
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
/**
 * 验证分享链接是否包含抖音分享链接
 * @param url String 分享链接
 * @returns boolean
 */
export const validateUrl = (url: string) => shareRegex.test(url)
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
export function generateXBogusUrl(url: string) {
  const query = new URL(url).searchParams.toString()
  const xbogus = sign(query, headers['User-Agent'])

  return `${url}&X-Bogus=${xbogus}`
}
export function getDouyinVideoIdByRealUrl(realUrl: string) {
  if (realUrl.includes('/video/')) {
    const ids = realUrl.match(/\/video\/(\d+)?/)
    if (ids && ids.length > 0)
      return ids[0].replace('/video/', '')
    return null
  }
  if (realUrl.includes('discover?')) {
    const ids = realUrl.match(/modal_id=(\d+)/)
    if (ids && ids.length > 0)
      return ids[0]
    return null
  }
  return null
}
export function getDouyinVideoDataByVideoId(videoId: string): Promise<DouyinVideoDataResult> {
  return new Promise((resolve, reject) => {
    const newApiUrl = generateXBogusUrl(videoDataUrl(videoId))
    fetch(newApiUrl, { headers: douyinApiHeaders }).then(res => res.json()).then((res) => {
      return resolve(res)
    }).catch((error: any) => {
      return reject(error)
    })
  })
}
export function formatDouyinVideoData(data: any) {
  return {
    author: {
      avatar_thumb: get(data, 'author.avatar_thumb.url_list.0'),
      nickname: get(data, 'author.nickname'),
      sec_uid: get(data, 'author.sec_uid'),
      uid: get(data, 'author.uid'),
    },
    music: {
      title: get(data, 'music.title'),
      url: get(data, 'music.play_url.uri'),
    },
    video: {
      cover: get(data, 'video.origin_cover.url_list'),
      url: get(data, 'video.play_addr.url_list'),
    },
    image: {},
  }
}
export function getHomeVideoBySecUid(secUid: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const maxCursor = 0
    const newApiUrl = generateXBogusUrl(homePageUrl(secUid, maxCursor))
    fetch(newApiUrl, { headers: douyinApiHeaders }).then(res => res.json()).then((res) => {
      if (res.data)
        return resolve(res.data)
      return reject(res.toString())
    }).catch((error: any) => {
      return reject(error.toString())
    })
  })
}
export function getInfo(url: string) {
  return new Promise((resolve, reject) => {
    if (!validateUrl(url))
      return reject('Link validation failed')

    const shortUrl = getShortUrlByShareUrl(url)
    if (!shortUrl)
      return reject('Failed to get short link')

    getRealUrlByShortUrl(shortUrl).then((res) => {
      const videoId = getDouyinVideoIdByRealUrl(res)
      if (!videoId)
        return reject('Failed to get ID')

      getDouyinVideoDataByVideoId(videoId).then((res) => {
        resolve(res)
      }).catch((error: any) => {
        return reject(error.toString())
      })
    }).catch((error: any) => {
      return reject(error.toString())
    })
  })
}
