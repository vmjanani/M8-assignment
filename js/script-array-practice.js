//STEP 1
const movies_name = ["ddlj","hum sath sath hain","hum apke hain kaun","k3g","don",];
//console.log(movies_name[1])
//STEP 2

//const movies = new Array(5);
//movies_name.forEach((movie, index) => (movies[index] = movie));
//console.log(movies[0]);


//STEP 3
/*
const movies = new Array(5);
movies_name.forEach((movie, index) => (movies[index] = movie));
movies.splice(3,0,'don2')
console.log(movies.length);
*/


//STEP 4
/*
 const movies = [];
 movies_name.forEach((movie, index) => (movies[index] = movie));
 delete movies[0];

 console.log(movies);
 */

//STEP 5
/*
const movies = [];
movies_name.forEach((movie, index) => (movies[index] = movie));
movies.push('dil dhadhakne do','om shanti om')
for (let movie in movies){
    console.log(movies[movie])
}
*/
//STEP 6
/*
const movies = [];
movies_name.forEach((movie, index) => (movies[index] = movie));
movies.push('dil dhadhakne do','om shanti om')
for (let movie in movies){
    console.log(movie)
}


*/


//STEP 7

/*
const movies = [];
movies_name.forEach((movie, index) => (movies[index] = movie));
movies.push('dil dhadhakne do','om shanti om')
movies.sort();
for (let movie in movies){
    console.log(movies[movie])
}


*/

//STEP 8
/*

const movies = [];
const leastFavMovies =['kank','padayappa']
movies_name.forEach((movie, index) => (movies[index] = movie));
movies.push('dil dhadhakne do','om shanti om')
console.log('Movies I like :','\n\n')
for (let movie in movies){
    console.log(movies[movie])
}
console.log('\n')

console.log('Movies I regret watching :','\n\n')
for (let movie in leastFavMovies){
    console.log(leastFavMovies[movie])
}

*/

//STEP 9

/*
const leastFavMovies =['kank','padayappa']

movies_name.forEach((movie, index) => (movies_name[index] = movie));
movies_name.push('dil dhadhakne do','om shanti om')
console.log('Movies I like :','\n\n')
for (let movie in movies_name){
    console.log(movies_name[movie])
}
console.log('\n')

console.log('Movies I regret watching :','\n\n')
for (let movie in leastFavMovies){
    console.log(leastFavMovies[movie])
}

const movies =movies_name.concat(leastFavMovies)
console.log(movies.sort().reverse())

*/


//STEP 10

/*

const leastFavMovies =['kank','padayappa']

movies_name.forEach((movie, index) => (movies_name[index] = movie));
movies_name.push('dil dhadhakne do','om shanti om')
console.log('Movies I like :','\n\n')
for (let movie in movies_name){
    console.log(movies_name[movie])
}
console.log('\n')

console.log('Movies I regret watching :','\n\n')
for (let movie in leastFavMovies){
    console.log(leastFavMovies[movie])
}

const movies =movies_name.concat(leastFavMovies)
console.log(movies.sort().reverse())

const lastItem = movies.slice(movies.length - 1, movies.length)[0];
 console.log(lastItem);

*/

//STEP 11
/*
const leastFavMovies =['kank','padayappa']

movies_name.forEach((movie, index) => (movies_name[index] = movie));
movies_name.push('dil dhadhakne do','om shanti om')
console.log('Movies I like :','\n\n')
for (let movie in movies_name){
    console.log(movies_name[movie])
}
console.log('\n')

console.log('Movies I regret watching :','\n\n')
for (let movie in leastFavMovies){
    console.log(leastFavMovies[movie])
}

const movies =movies_name.concat(leastFavMovies)
console.log(movies.sort().reverse())

const firstItem = movies.slice(0, 1)[0];
 console.log(firstItem);

 */

//STEP 12

/*

const leastFavMovies =['kank','padayappa']
const movies = [];
 const movieIndices = leastFavMovies.map((movie) => movies.indexOf(movie));
 const moviesILike = ['Nutty Professor'];
movieIndices.forEach((movieIndex, index) => {
  movies[movieIndex] = moviesILike[index];
 });
 movies.sort().reverse();
 console.log(movies);


 */
//STEP 13


/*
 const movies = [
 ['ddlj', 1],
['hum sath sath hain', 2],
  ['hum apke hain kaun', 3],
   ['k3g', 4],
   ['don', 5],
 ];

for (let movieArray of movies) {
  console.log(movieArray.filter((item) => typeof item === 'string')[0]);
 }

*/

//STEP 14

/*
 const employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];

 const showEmployee = (employees) => {
   employees.forEach((employee) => console.log(employee));
 };

showEmployee(employees);
*/


//STEP 15
/*

 let testData = [58, '', 'abcd', true, null, false, 0];

const filterValues = (values) => {
   return values.filter((value) => value);
};

console.log(filterValues(testData));

*/


//STEP 16

/*
 testData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const getRandomItem = (values) => {
  const index = Math.floor(Math.random() * values.length);
  return values[index];
 };

 console.log(getRandomItem(testData));
 */


//STEP 17

 const getLargestNumber = (nums) => {
  let largestNumber;
  nums.forEach((num) => {
   if (!largestNumber) {
     largestNumber = num;
   }

   if (largestNumber < num) {
      largestNumber = num;
   }
  });

  return largestNumber;
 };

 console.log(getLargestNumber(testData));

















/*

Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):

Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3
…

Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:

movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

Employees:

ZAK
JESSICA
MARK
FRED
SALLY

Write a JavaScript function to filter false, null, 0 and blank values from an array.

Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
Expected Result: [58, "abcd", true]

Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
Write a JavaScript function to get the largest number from a numeric array.

*/