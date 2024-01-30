# doydl
一个获取抖音无水印视频工具

# Usage
```js
import { getInfo, validateUrl } from 'doydl'

function getVideo(url) {
  if (!validateUrl(url))
    return
  return getInfo(url)
}
console.log(await getVideo('https://v.douyin.com/5949664666666666666'))

// {
//   aweme_detail: { [key: string]: any }
//   log_pb: { [key: string]: any }
//   status_code: number
// }
```

Features:

- Bundle with [tsup](https://github.com/egoist/tsup)
- Test with [vitest](https://vitest.dev)
- XBogus.js width [Douyin_TikTok_Download_API](https://github.com/Evil0ctal/Douyin_TikTok_Download_API)

## License

MIT
