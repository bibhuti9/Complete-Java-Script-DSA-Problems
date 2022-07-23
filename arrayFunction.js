var text = `ayushi.shopskipper@gmail.com:ayushi27`;

function extractEmails(text) {
  return text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

console.log(extractEmails(text).toString());
