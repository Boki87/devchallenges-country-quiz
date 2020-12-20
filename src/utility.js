export function getRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

export function getRandomNumbers(num, excludedNums, max) {
    const randomNumbers = []
    let increment = 0

    function getNums() {            
        if(increment < num) {

            let randomNum = getRandomNum(max)

            if(!excludedNums.includes(randomNum)) {
                if(!randomNumbers.includes(randomNum)) {
                    randomNumbers.push(randomNum)
                    increment++
                    getNums()
                }
            }        
            getNums()
        }             
    }        
    getNums()
    return randomNumbers
}

export function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }