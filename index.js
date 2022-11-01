let  quotes = [
  {
    quote:"You are the only one that can make me happy",
    autohr:"Damon"
  },
  {
    quote:"You know how much you inspired me",
    autohr:"Stefan"
  },
  {
    quote:"You'll never know how much i waited for u",
    autohr:"Carloine"
  },
  {
    quote:"Can you please stop smiling, Yor're so gorgeous",
    autohr:"Lois"
  },
  {
    quote:"You can't be a human You are an angel",
    autohr:"Carloine"
  }
];



another = document.getElementById('another');
para = document.getElementById('para');
author = document.getElementById('author');
another.onclick = function() {
  let rand = Math.floor(Math.random()*quotes.length);
para.innerHTML = quotes[rand].quote;
author.innerHTML = quotes[rand].autohr;
};
