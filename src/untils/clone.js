const cloneObject = (o, d) => {
  if (o === null || o === undefined || typeof(o) !== 'object') {
    return o
  }

  let deep = !!d

  let cloned

  if (o.constructor === Array) {
    if (deep === false) {
      return o
    }

    cloned = []

    for (let i in o) {
      cloned.push(cloneObject(o[i], deep))
    }

    return cloned
  }

  cloned = {}

  for (var i in o) {
    cloned[i] = deep
      ? cloneObject(o[i], true)
      : o[i]
  }

  return cloned
}

export default cloneObject
