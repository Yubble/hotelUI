// 配置编译环境和线上环境之间的切换

const env = process.env

// 图表库为avue套地址
let iconfontVersion = ['567566_qo5lxgtishg', '667895_vf6hgm08ubf']
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`

let baseUrl = ''
let codeUrl = ''
let actUrl = `${window.location.origin}/act/modeler.html?modelId=`
if (env.NODE_ENV == 'development') {
   baseUrl = 'http://47.244.21.45:7423'
   //baseUrl = 'http://127.0.0.1:7423'
} else if (env.NODE_ENV == 'production') {
  baseUrl = 'http://47.244.21.45:7423'
} else if (env.NODE_ENV == 'test') {
  baseUrl = 'http://127.0.0.1:8938'
}
codeUrl = `${baseUrl}/code`

export {
  baseUrl,
  actUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env
}
