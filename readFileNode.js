fs = require('fs')
//var movies = read("movies.txt").split("\n");
fs.readFile('movies.txt','utf8',function(err,movies) {
  if (err) {
    return console.log(err);
  }
console.log(movies.split("\n"));
});
