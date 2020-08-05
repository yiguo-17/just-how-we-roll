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
const singleMean = document.querySelector("h3#d6-rolls-mean");
const singleMedian = document.querySelector("h3#d6-rolls-median");
const singleMode = document.querySelector("h3#d6-rolls-mode");
const singleImg = document.querySelector("img#d6-roll.d6");
singleMean.innerText = "NA";
singleMedian.innerText = "NA"
singleMode.innerText = "NA";
singleImg.src = "images/start/d6.png";
const doubleMean = document.querySelector("h3#double-d6-rolls-mean");
const doubleMedian = document.querySelector("h3#double-d6-rolls-median");
const doubleMode = document.querySelector("h3#double-d6-rolls-mode");
const doubleFirstImg = document.querySelector("img#double-d6-roll-1.d6.roll");
const doubleSecondImg = document.querySelector("img#double-d6-roll-2.d6.roll");
doubleMean.innerText = "NA";
doubleMedian.innerText = "NA";
doubleMode.innerText = "NA";
doubleFirstImg.src = "images/start/d6.png";
doubleSecondImg.src = "images/start/d6.png";
const twelveMean = document.querySelector("h3#d12-rolls-mean");
const twelveMedian = document.querySelector("h3#d12-rolls-median");
const twelveMode = document.querySelector("h3#d12-rolls-mode");
const twelveImg = document.querySelector("img#d12-roll.roll")
twelveMean.innerText ="NA";
twelveMedian.innerText = "NA";
twelveMode.innerText = "NA";
twelveImg.src = "images/start/d12.jpeg"

const d_dMean = document.querySelector("h3#d20-rolls-mean");
const d_dMedian = document.querySelector("h3#d20-rolls-median");
const d_dMode = document.querySelector("h3#d20-rolls-mode");
const d_dImg = document.querySelector("img#d20-roll.roll")
d_dMean.innerText = "NA";
d_dMedian.innerText = "NA";
d_dMode.innerText = "NA";
d_dImg.src = "images/start/d20.jpg"

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
/*******************
 * EVENT LISTENERS *
 *******************/
const rollSingle = function(){
  const result = getRandomNumber(6);
  sixes.push(result);
  const path = `images/d6/${result}.png`
  const arr = sortByNumber(sixes);
  singleMean.innerText = String(getMean(sixes));
  singleMedian.innerText = String(getMedian(arr));
  singleMode.innerText = String(getMode(arr));
  singleImg.src = path;
  
}
const rollDouble = function(){
  const result1 = getRandomNumber(6);
  const result2 = getRandomNumber(6);
  const path1 = `images/d6/${result1}.png`
  const path2 = `images/d6/${result2}.png`
  doubleSixes.push(result1 + result2);
  const arr = sortByNumber(doubleSixes);
  doubleMean.innerText = String(getMean(doubleSixes));
  doubleMedian.innerText = String(getMedian(arr));
  doubleMode.innerText = String(getMode(arr));
  doubleFirstImg.src = path1;
  doubleSecondImg.src = path2;
}
const rollTwelve = function(){
  const result = getRandomNumber(12);
  twelves.push(result);
  const path = `images/numbers/${result}.png`;
  const arr = sortByNumber(twelves);
  twelveMean.innerText = String(getMean(twelves));
  twelveMedian.innerText = String(getMedian(arr));
  twelveMode.innerText = String(getMode(arr));
  twelveImg.src = path;
}

const rollD_d = function(){
  const result = getRandomNumber(20);
  twenties.push(result);
  const path = `images/numbers/${result}.png`;
  const arr = sortByNumber(twenties);
  d_dMean.innerText = String(getMean(twenties));
  d_dMedian.innerText = String(getMedian(arr));
  d_dMode.innerText = String(getMode(arr));
  d_dImg.src = path;
}
singleImg.addEventListener('click',rollSingle);
doubleFirstImg.addEventListener('click',rollDouble);
doubleSecondImg.addEventListener('click',rollDouble);
twelveImg.addEventListener('click',rollTwelve);
d_dImg.addEventListener('click',rollD_d);


/******************
 * RESET FUNCTION *
 ******************/
const emp = [];
const reset = function(){
  singleMean.innerText = "NA";
  singleMedian.innerText = "NA";
  singleMode.innerText = "NA";
  singleImg.src = "images/start/d6.png";
  doubleMean.innerText = "NA";
  doubleMedian.innerText = "NA";
  doubleMode.innerText = "NA";
  doubleFirstImg.src = "images/start/d6.png";
  doubleSecondImg.src = "images/start/d6.png";
  twelveMean.innerText ="NA";
  twelveMedian.innerText = "NA";
  twelveMode.innerText = "NA";
  twelveImg.src = "images/start/d12.jpeg";
  d_dMean.innerText = "NA";
  d_dMedian.innerText = "NA";
  d_dMode.innerText = "NA";
  d_dImg.src = "images/start/d20.jpg"
  sixes.splice(0,sixes.length);
  doubleSixes.splice(0,doubleSixes.length);
  twelves.splice(0,twelves.length);
  twenties.splice(0,twenties.length);
}

const zero = document.querySelector("button#reset-button")
zero.addEventListener('click',reset);
