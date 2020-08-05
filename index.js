/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

/*******************
 * EVENT LISTENERS *
 *******************/

/******************
 * RESET FUNCTION *
 ******************/

/****************
 * MATH SECTION *
 ****************/
const getMean = function(nums){
  let sum= 0;
  for(let i=0; i< nums.length; i++){
    sum+= nums[i];
  }
  const mean = sum/nums.length;
  return mean
}

const getMedian = function(nums){
  const sorted = sortByNumber(nums);
  if(nums.length%2 ===1){
    return sorted[Math.floor(nums.length/2)]
  }
  else {return sorted[nums.length/2 -1]}
}

const getMode = function (nums){
  const arr = sortByNumber(nums);
  let num = 0;
  let time = 0;
  let maxtimes = 0;
  let result = 0;
  for (let i= 0; i<arr.length; i++){
    if(num !== arr[i]){
      num = arr[i];
      time = 1;
      if (time>maxtimes){
        maxtimes = time;
        result = num;
      }
    }
    else{
      time++;
      if(time>maxtimes){
        maxtimes = time;
        result = num;
      }
    }
  }
return result;
}