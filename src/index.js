module.exports = function check(str, bracketsConfig) {
  const bracketsArr = str.split('')
  const resultArr = []
  let result = true

  function searchCurrentConfig(item){
    bracketsConfig.forEach((elem, index) => {
      if (elem.toString().indexOf(item) !== -1){
        return index
      }
      return false
    })
  }

  for (let item of bracketsArr){
    if (searchCurrentConfig(item) === false){
      continue
    }
    const config = bracketsConfig[searchCurrentConfig(item)]
    if (config.toString().indexOf(item) === 0){
      resultArr.push(item)
    } else {
      if (config[0] === resultArr[resultArr.length - 1]){
        resultArr.unshift()
      } else {
        result = false
      }
    }
  }

  // bracketsArr.forEach((item) => {

  // })
  if (resultArr.length > 0){
    result = false
  }
  return result
}
