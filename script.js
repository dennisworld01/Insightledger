document.addEventListener("DOMContentLoaded", function () {
  const subscribers = Math.floor(Math.random() * 11) + 10;
  const visitors = Math.floor(Math.random() * 1001) + 2000;
  document.getElementById("subscribers").textContent = "Subscribers: " + subscribers;
  document.getElementById("visitors").textContent = "Visitors Today: " + visitors;
});
