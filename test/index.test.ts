import { describe, expect, it } from 'vitest'
import { generateXBogusUrl, getDouyinVideoDataByVideoId, getDouyinVideoIdByRealUrl, getHomeVideoBySecUid, getInfo, getRealUrlByShortUrl, getShortUrlByShareUrl, validateUrl } from '../src/index'

const shareUrl = '2.02 03/02 oDU:/ g@b.NW “对你不是一见钟情，而是蓄谋已久”# 人性 # 爱情 # 短片   https://v.douyin.com/iLsTjfXd/ 复制此链接，打开Dou音搜索，直接观看视频！'
const shortUrl = 'https://v.douyin.com/iLsTjfXd/'
const realUrl = 'https://www.iesdouyin.com/share/video/7328409190316215588/'
const videoId = '7328409190316215588'
const videoDataUrl = 'https://www.douyin.com/aweme/v1/web/aweme/detail/?device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=7328409190316215588&pc_client_type=1&version_code=190500&version_name=19.5.0&cookie_enabled=true&screen_width=1344&screen_height=756&browser_language=zh-CN&browser_platform=Win32&browser_name=Firefox&browser_version=110.0&browser_online=true&engine_name=Gecko&engine_version=109.0&os_name=Windows&os_version=10&cpu_core_num=16&device_memory=&platform=PC&webid=7158288523463362079&msToken=abL8SeUTPa9-EToD8qfC7toScSADxpg6yLh2dbNcpWHzE0bT04txM_4UwquIcRvkRb9IU8sifwgM1Kwf1Lsld81o9Irt2_yNyUbbQPSUO8EfVlZJ_78FckDFnwVBVUVK'
const secUid = 'MS4wLjABAAAA6XRdrzgvyy9RR73zhOSpWsITvlml1cd6yzvfegyV8XU'
describe('doydl test', () => {
  it('validateUrl', () => {
    expect(validateUrl(shareUrl)).toEqual(true)
  })
  it('getShortUrlByShareUrl', () => {
    expect(getShortUrlByShareUrl(shareUrl)).toEqual(shortUrl)
  })
  it('getRealUrlByShortUrl', async () => {
    expect(await getRealUrlByShortUrl(shortUrl)).toEqual(realUrl)
  })
  it('getDouyinVideoIdByRealUrl', () => {
    expect(getDouyinVideoIdByRealUrl(realUrl)).toEqual(videoId)
  })
  it('generateXBogusUrl', () => {
    expect(generateXBogusUrl(videoDataUrl)).toBeTypeOf('string')
  })
  it('getDouyinVideoDataByVideoId', () => {
    expect(getDouyinVideoDataByVideoId(videoId)).toBeTypeOf('object')
  })
  it('getHomeVideoBySecUid', () => {
    expect(getHomeVideoBySecUid(secUid)).toBeTypeOf('object')
  })
  it('getInfo', () => {
    expect(getInfo(shareUrl)).toBeTypeOf('object')
  })
})
