/*
  Code by toowan

*/

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

var quotes = [
'We must be willing to let go of the life we’ve planned to have the life that is waiting for us.','–E.M. Forste',
'A ship is safe in harbor, but that\'s not what ships are for.','-William G.T. Shedd', 
'Its impossible to really understand somebody, what they want, what they believe, and not love them the way they love themselves.','-Orson Scott Card',
'Integrity is doing the right thing, even when no one is watching.','-Charles Marshall',
'Hardships often prepare ordinary people for an extraordinary destiny.','-The Voyage of the Dawn Treader',
'We’re flawed, because we want so much more. We’re ruined, because we get these things, and wish for what we had.','- Mad Men',
'When each day is the same as the next, it’s because people fail to recognize the good things in their lives every day that the sun rises.','-Paulo Coelho',
'When you really want something, the universe always conspires in your favor.','-Paulo Coelho',
'To realize one’s destiny is a person’s only real obligation.','-Paulo Coelho',
'..and that’s where the power of love comes in.  Because when we love, we always strive to become better than we are.','-Paulo Coelho',
'People tell you who they are, but we ignore it because we want them to be who we want them to be.','-Mad Men',
'The acquisition of knowledge doesn’t mean you’re growing. Growing happens when what you know changes how you live.','-Ritu Ghatourey',
'My thoughts are stars I can’t fathom into constellations.','-John Green',
'The pain of discipline is less than the pain of regret.','-Nathan Whitley'
] 

// Convert array into associative array (hash)
var quotesHash = {};
quotes.forEach(function(val, i) {
  if (i % 2 === 1) return; // Skip even elements/odd indexes
  quotesHash[val] = quotes[i + 1]; // Set the value to be the next index
});

// Set keys to be quotes and values to be authors
var allQuotes = Object.keys(quotesHash); 
var allAuthors = Object.values(quotesHash); 



function newQuote() {
    // Generate random number and round it down to whole integer
    var randomNumber = Math.floor(Math.random() * (allQuotes.length)); 
    // Pass the retrieved quote as the value to be added to HTML quoteDisplay element
    document.getElementById('quoteDisplay').innerHTML = allQuotes[randomNumber] + '<br /><br />' + allAuthors[randomNumber];

    //Tweet quote
    var href = "https://twitter.com/share?text=" + '"' + allQuotes[randomNumber] + '"' + '  ' + allAuthors[randomNumber] + ' via '; 
    document.getElementById('tweet-quote').setAttribute("href", href);
  }

