 const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // n is number of stars required
  export const multipleBoxShadow = n => {
    let value = `${getRandomInt(0, 2000)}px ${getRandomInt(0, 2000)}px #FFF`;
    for (let i = 0; i < n; i++) {
      value = `${value}, ${getRandomInt(0, 2000)}px ${getRandomInt(
        0,
        2000
      )}px #FFF`
    }
    return value
  };