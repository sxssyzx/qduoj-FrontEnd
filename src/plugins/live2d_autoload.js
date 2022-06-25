/* eslint-disable no-undef */
/* eslint-disable camelcase */
// 注意：live2d_path 参数应使用绝对路径

// Patched by Haolin
const live2d_path = staticUrl + '/static/live2d/live2d/'
const aplayer_path = staticUrl + '/static/live2d/aplayer/'
const cdn_path = staticUrl + '/static/live2d/'

// reexport
export const cdnUrl = staticUrl

// 封装异步加载资源的方法
function loadExternalResource (url, type) {
  return new Promise((resolve, reject) => {
    let tag

    if (type === 'css') {
      tag = document.createElement('link')
      tag.rel = 'stylesheet'
      tag.href = url
    } else if (type === 'js') {
      tag = document.createElement('script')
      tag.src = url
    }
    if (tag) {
      tag.onload = () => resolve(url)
      tag.onerror = () => reject(url)
      document.head.appendChild(tag)
    }
  })
}

export default function loadlive2Init () {
  // 加载 waifu.css live2d.min.js waifu-tips.js
  let musicData
  if (screen.width >= 768) {
    Promise.all([
      loadExternalResource(live2d_path + 'waifu.css', 'css'),
      loadExternalResource(live2d_path + 'live2d.min.js', 'js'),
      loadExternalResource(live2d_path + 'waifu-tips.js', 'js'),
      // live2d
      loadExternalResource(aplayer_path + 'aplayer.css', 'css'),
      loadExternalResource(aplayer_path + 'aplayer.js', 'js'),
      fetch(cdn_path + '/music.json').then(response => response.json()).then(data => {
        for (var i = 0; i < data.length; ++i) {
          data[i].url = staticUrl + data[i].url
          data[i].cover = staticUrl + data[i].cover
        }
        musicData = data
      })
    ]).then(() => {
      initWidget({
        waifuPath: live2d_path + 'waifu-tips.json',
        // patched by haolin
        cdnPath: cdn_path
      })

      // init aplayer
      aplayer_instance = new APlayer({
        container: document.getElementById('player'),
        fixed: true,
        audio: musicData
      })
    })
  }
}
