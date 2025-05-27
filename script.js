
document.addEventListener("DOMContentLoaded", function() {
  const baseSubscribers = 7429;
  const newSubs = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  const visitors = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;

  document.getElementById("subscriber-count").innerText = "Subscribers: " + (baseSubscribers + newSubs).toLocaleString();
  document.getElementById("visitor-count").innerText = "Today's Visitors: " + visitors.toLocaleString();
});
