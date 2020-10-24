module.exports = function check(str, bracketsConfig) {
  // your solution
  let leftConfig = [];
  let rightConfig = [];
  let stack = [];

  //for (let i = 0; i< configSize/2; i++) {
  //  leftConfig [i] = bracketsConfig [i][0];
  //  rightConfig [i] = bracketsConfig [i][1];
  //}
  //if (str.length % 2) {
  //  return false;
  //}

  bracketsConfig.forEach(element => {
    leftConfig.push(element[0]);
    rightConfig.push(element[1]);
  });
    
  for (let i of str) {
    if (leftConfig.includes(i)) {
      stack.push(i);
      //console.log('position: ',stack.indexOf(i),',stack: ', stack);
    }
    if (rightConfig.includes(i) && stack.pop() !== leftConfig[rightConfig.indexOf(i)]) {
        return false;
      }
    }
  return stack.length === 0;
}