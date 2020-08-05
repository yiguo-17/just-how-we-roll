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
const nums = [15,20,5,6,1,3,3,5,7,17]
console.log(sortByNumber(nums))

/*******************
 * EVENT LISTENERS *
 *******************/

/******************
 * RESET FUNCTION *
 ******************/

/****************
 * MATH SECTION *
 ****************/
