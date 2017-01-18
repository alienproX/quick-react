let utils = {
  version: 0.01,
  isWeChat: () => (/micromessenger/i).test(navigator.userAgent)
}
export default utils
