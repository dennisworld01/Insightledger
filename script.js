
document.addEventListener("DOMContentLoaded", function() {
  const baseFollowers = 7429;
  const newSubs = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  const visitors = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;

  document.getElementById("Followers-count").innerText = "Followers: " + (baseFollowers + newSubs).toLocaleString();
  document.getElementById("visitor-count").innerText = "Today's Visitors: " + visitors.toLocaleString();
});
