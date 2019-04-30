

alert('Greetings, you are going to help us make a limerick! Please fill out the following prompts to create the limerick.');

var gender = prompt('Pick a gender (man or woman)');
var pronoun = prompt('Pick a prounoun (his/her)');
var item = prompt('Pick a plural physical item');
var relative = prompt('Pick a relative (e.g. Aunt, Cousin)');

alert('There once was a ' + gender + ' from Nantucket\nWho kept all ' + pronoun + ' ' + item + ' in a bucket.\nBut ' + pronoun +' '+ relative + ', named Nan,\nRan away with a man\nAnd as for the bucket, Nantucket.');

console.log("This person is a " + gender);
console.log("They go by " + pronoun);
console.log("This is an item " + item);
console.log("This is someones relative " + relative)