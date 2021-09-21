const array = ["clea","emojo",420,true,"\u2606"]


array.forEach(element => {
    
  
});


console.log(array)

array.forEach(element => {
    
});

// FOR LOOP BRUGES NÅR DER SKAL TÆLLES FRA EN RANGE

// FOR EACH LOOP HVIS VI IKKE BRUGER DATAEN EFTER

// MAP LOOPER EN TIL EN

// FILTER SORTERER 

// REDUCE KAN MAPPE OG ACCUMMULERE

const favoriteThings = ["Cleo", "🍆", 420, true, "\u2606"];

// write a for each loop
// favoriteThings.forEach((element, index, array) => console.log(element, index, array));
// favoriteThings.forEach((favoriteThing) => console.log(favoriteThing));
// create an array that turns them all to Strings and make them say: "Ooh I like " + favoriteThing

const favoriteThingsWithCommentary = [];
favoriteThings.forEach(favoriteThing => favoriteThingsWithCommentary.push(`Ooh I like ${ favoriteThing }`));

const subjectiveFavoriteThings = favoriteThings.map(favoriteThing => `Ooh I like ${ favoriteThing }`);
// console.log(subjectiveFavoriteThings);

// console.log(favoriteThings.indexOf("🍆"));

const longFavoriteThings = favoriteThings.filter(favoriteThing => favoriteThing.length > 1);
console.log(longFavoriteThings);

