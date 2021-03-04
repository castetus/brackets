module.exports = function check(str, bracketsConfig) {

  const bracketsArr = str.split('')
  const checkArr = []

  function isBracket(str){
    for (let item of bracketsConfig){
        if (item.includes(str)){
          return item
        } 
      }
      return false
    
  }

  for (let item of bracketsArr){
      const currentConfig = isBracket(item)
      const prevBracket = checkArr[checkArr.length - 1]

      if (currentConfig !== false){

        if (item === currentConfig[0] && item !== currentConfig[1]){
          checkArr.push(item)
        } else if (item === currentConfig[1]){
          if (prevBracket === currentConfig[0]){
            checkArr.pop()
          } else {
            checkArr.push(item)
          }
        }
      }
    }
  
  if (checkArr.length === 0){
    return true
  }

  return false
}
