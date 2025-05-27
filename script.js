// Simulate real-time follower and visitor updates
document.addEventListener("DOMContentLoaded", () => {
  const followersElement = document.getElementById("followers-count");
  const visitorsElement = document.getElementById("visitors-count");

  let followers = 1234; // Initial dummy value
  let visitors = 567;   // Initial dummy value

  // Update the displayed counts
  function updateCounts() {
    followers += Math.floor(Math.random() * 5); // Simulate a few new followers
    visitors += Math.floor(Math.random() * 3);  // Simulate new visitors

    followersElement.textContent = followers.toLocaleString();
    visitorsElement.textContent = visitors.toLocaleString();
  }

  // Initial render
  updateCounts();

  // Periodic updates every 10 seconds
  setInterval(updateCounts, 10000);
});
