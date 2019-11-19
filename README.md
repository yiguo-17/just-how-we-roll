# Just How We Roll

### Introduction

Today you'll be making an app that combines all the fun of rolling dice with all the fun of tracking the average rolls so far. These are equal funs.

[https://just-how-we-roll.surge.sh](The app is hosted here.)


### Tools Left Behind

There's been some code left behind in this other-wise gutted app.

And feel free to use the comment boxes to organize your sections. (Or don't.)

If you want to add more comment boxes, check out [the Comment Box extension](https://marketplace.visualstudio.com/items?itemName=slysherz.comment-box). It's neat!


### Tools We'll Be Practicing With

* event listeners
* string building/interpolation
* array management and iteration
* maths


### Setting Up

**Event Listeners**

Each of the dice images should have event listeners to run a respective "roll function".

The other event listener is our reset button. We'll talk about what that should do soon enough, but set it to run some kind of function.

**Starting Images**

The other thing to set up in the global scope is setting the starting images. There are various reasons to do it this way, rather than just setting the source in the html, but for you, it means that you'll both get some immediate practice with setting image sources, and also, when you reset later, you'll need this bit of code then to put the starting images back in.


### Roll Functions

Each of your roll functions needs to:

* Calculate a random number from 1 to the maximum number for that die (a helper function has been left behind for you on that one). For now, it's a good idea to `console.log` that result.
*  Change the image of the dice roll "button" to the results, using the images in the `d6` and `numbers` directories. PLEASE NOTE the file names. They all have filenames that you can use to _dynamically_ set which image it should be based on the result of the die roll.
*  Add the result of the roll into its respective array (left behind for you in the global scope) so that we can track our results for that kind of die. Although we shouldn't do it in production, it's not a bad idea to `console.log` each result as we go.

Once you've got that going, it's time for some maths:


### Some Maths

The DOM manipulation is harder than what you've done so far, for sure, but the hardest part of this project is calculating the mean, median and mode. We _highly_ recommend making helper functions for each of these that take in an array as input and spit out one number as output.

Some tips:

* Run each of these function each time you've rolled a new result.
* Feel free to skip around if you're finding one too hard, but mean is easiest for most people and mode is hardest.
* For median, you're going to want to sort the numbers. This is a solved problem and relatively easy in JavaScript.
* For the mode, think about storing how many times you've seen each number in an object and tracking which is the highest number as you go.


### Resetting

Your reset function will need to:
* Set the starting images back.
* Remove the results for the mean, median, and mode calculations.
* Erase everything in each array.

Don't change the arrays to being defined using `let`. That way lies _madness_, and there are other ways besides.


### Good luck!

Good luck _indeed_.
