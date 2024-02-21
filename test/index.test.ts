import { describe, expect, it } from 'vitest'
import {
  generateXBogusUrl,
  getHomeDataBySecUid,
  getHomeInfo,
  getInfo,
  getRealUrlByShareUrl,
  getRealUrlByShortUrl,
  getSecIdByRealUrl,
  getShortUrlByShareUrl,
  getVideoDataByVideoId,
  getVideoIdByRealUrl,
  validateUrl,
} from '../src/index'

const shareUrl = '5.89 PXM:/ 02/14 a@A.TL # 纯御  https://v.douyin.com/iNQ9oyAP/ 复制此链接，打开Dou音搜索，直接观看视频！'
const homeShareUrl = '长按复制此条消息，打开抖音搜索，查看TA的更多作品。 https://v.douyin.com/iNQ9uVeF/'
const shortUrl = 'https://v.douyin.com/iNQ9oyAP/'
const realUrl = 'https://www.iesdouyin.com/share/video/7335840551448677673/'
const homeRealUrl = 'https://www.iesdouyin.com/share/user/MS4wLjABAAAA1Y94tsS-DdoR4Ky9mMY7TghX-mvm0NDMjS9cxby5B1Y'
const videoId = '7335840551448677673'
const videoDataUrl = 'https://www.douyin.com/aweme/v1/web/aweme/detail/?device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=7328409190316215588&pc_client_type=1&version_code=190500&version_name=19.5.0&cookie_enabled=true&screen_width=1344&screen_height=756&browser_language=zh-CN&browser_platform=Win32&browser_name=Firefox&browser_version=110.0&browser_online=true&engine_name=Gecko&engine_version=109.0&os_name=Windows&os_version=10&cpu_core_num=16&device_memory=&platform=PC&webid=7158288523463362079&msToken=abL8SeUTPa9-EToD8qfC7toScSADxpg6yLh2dbNcpWHzE0bT04txM_4UwquIcRvkRb9IU8sifwgM1Kwf1Lsld81o9Irt2_yNyUbbQPSUO8EfVlZJ_78FckDFnwVBVUVK'
const secUid = 'MS4wLjABAAAA1Y94tsS-DdoR4Ky9mMY7TghX-mvm0NDMjS9cxby5B1Y'
describe('doydl test', () => {
  it('generateXBogusUrl', () => {
    expect(generateXBogusUrl(videoDataUrl)).toBeTypeOf('string')
  })
  it('validateUrl', () => {
    expect(validateUrl(shareUrl)).toEqual(true)
  })
  it('getShortUrlByShareUrl', () => {
    expect(getShortUrlByShareUrl(shareUrl)).toEqual(shortUrl)
  })
  it('getRealUrlByShortUrl', async () => {
    expect(await getRealUrlByShortUrl(shortUrl)).toEqual(realUrl)
  })
  it('getRealUrlByShareUrl', async () => {
    expect(await getRealUrlByShareUrl(shareUrl)).toEqual(realUrl)
  })
  it('getHomeRealUrlByShareUrl', async () => {
    expect(await getRealUrlByShareUrl(homeShareUrl)).toEqual(homeRealUrl)
  })
  it('getVideoIdByRealUrl', () => {
    expect(getVideoIdByRealUrl(realUrl)).toEqual(videoId)
  })
  it('getSecIdByRealUrl', () => {
    expect(getSecIdByRealUrl(homeRealUrl)).toEqual(secUid)
  })
  it('getVideoDataByVideoId', () => {
    expect(getVideoDataByVideoId(videoId)).toBeTypeOf('object')
  })
  it('getHomeDataBySecUid', () => {
    expect(getHomeDataBySecUid(secUid)).toBeTypeOf('object')
  })
  it('getInfo', () => {
    expect(getInfo(shareUrl)).toBeTypeOf('object')
  })
  it('getHomeInfo', () => {
    expect(getHomeInfo(homeShareUrl)).toBeTypeOf('object')
  })
})
