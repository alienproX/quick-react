import merge from './merge'

const utils = {
  version: 0.01,
  merge: merge,
  stateClone: (o) => {
  return JSON.parse(JSON.stringify(o))
  },
  isWeChat: () => (/micromessenger/i).test(navigator.userAgent),
  isEmail: (mail) => /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(mail),
  fullTwo: num => num > 9
    ? num
    : '0' + num,
  ele: (ele, all) => all
    ? document.querySelectorAll(ele)
    : document.querySelector(ele),
  setDocTitle: title => {
    document.title = title + ` - Quick React`
    if (utils.isWeChat()) {
      let iframe = document.createElement('iframe')
      iframe.src = '/favicon.ico'
      iframe.style.visibility = 'hidden'
      iframe.style.width = '1px'
      iframe.style.height = '1px'
      iframe.onload = () => {
        setTimeout(() => {
          document.body.removeChild(iframe)
        }, 0)
      }
      document.body.appendChild(iframe)
    }
  }
}
export default utils
