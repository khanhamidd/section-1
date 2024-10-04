const arr =['hello',345,true];
console.log(typeof arr);
console.log(Array.isArray(arr));
const movies =['stree2','salaar','pathaan','john wick','spiderman'];

console.log(movies.length);//also work for string
console.log(movies);
//indexing
console.log(movies[2]);
console.log(movies.indexOf('spiderman'));

console.log(movies[-2]);
console.log(movies.at(-2));

movies[2]='james bond';

console.log(movies);

//slicing
console.log(movies.slice(2,4));
console.log(movies.slice(2));
console.log(movies.slice(-3));

//adding and removing elements

movies.push('batman');//add at the end
movies.unshift('superman');//add to the beginning
console.log(movies);

movies.pop();//remove from the end
movies.shift();//remove from the beginning
console.log(movies);

//splicing
movies.splice(2,2,'falsh','arrow');//reomve two element starting from index two
movies.splice(2,0,'factured','the notebook');//and insert 2 element starting index from 2
console.log(movies);

//