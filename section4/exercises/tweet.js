/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  addLikes() {
    this.numberOfLikes ++
  }

  addComment(newComment) {
    this.comments.push(newComment);
  }

};

var tweet1 = new Tweet("Maddie", "I love autumn!", "09:48 AM October 19, 2021", 2, ["love this", "Agreed!", "I'm more of a spring person"])
console.log(tweet1);

tweet1.addLikes();
console.log(tweet1);

tweet1.addComment("My favorite thing is drinking cider");
console.log(tweet1);


var tweet2 = new Tweet("Cameron", "Can't wait for ski season", "13:15 PM October 19, 2021", 14, ["heck yeah!", "when is a-bay opening?"])
console.log(tweet2);

tweet2.addLikes();
console.log(tweet2);

tweet2.addComment("let's do a trip this season!");
console.log(tweet2);


var tweet3 = new Tweet("Winifred Sanderson", "Sisters, come! We fly!", "12:00 AM October 31, 2021", 13, ["who lit the black flame candle this time??"])
console.log(tweet3);

tweet3.addLikes();
console.log(tweet3);
