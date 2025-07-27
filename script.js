const messages = [
  "Are you sure?",
  "Really sure??",
  "Gaurav please…",
  "Don't do this 🥺",
  "Just think about it!",
  "PLease don't say no, you know I always listen",
  "I’m really sorry...",
  "Please, Gaurav, I mean it...",
  "Okay fine, I’ll stop :( I love you never mean to make you angry dear...",
  "Just kidding, please say yes 💙, I truly am sorry"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
