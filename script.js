// Simulate followers and visitors update
document.addEventListener("DOMContentLoaded", () => {
  const followers = Math.floor(Math.random() * 5000) + 1000;
  const visitors = Math.floor(Math.random() * 1000) + 300;

  document.getElementById("followers").textContent = `Followers: ${followers.toLocaleString()}`;
  document.getElementById("visitors").textContent = `Daily Visitors: ${visitors.toLocaleString()}`;
});
