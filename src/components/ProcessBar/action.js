export default(store) => {
  const setVal = (val, transition) => {
    store.dispatch({
      type: 'PROCESSBAR',
      val: val + '%',
      transition: transition
    })
  }
  let timer = null
  return {
    start: () => {
      let done = 10
      let curve = 12
      clearInterval(timer)
      timer = setInterval(() => {
        curve --
        curve = curve < 0 ? 1 : curve
        if (done >= 90) {
          clearInterval(timer)
          setVal(90)
        } else {
          done += curve
          setVal(done)
        }
      }, 200)
    },
    end: () => {
      clearInterval(timer)
      setVal(100)
      setTimeout(() => {
        setVal(0, '0')
      }, 500)
    },
    set: (val) => {
      setVal(val)
    }
  }
}
