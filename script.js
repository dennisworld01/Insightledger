document.addEventListener("DOMContentLoaded", () => {
  // Follower count setup
  const followerElement = document.getElementById("follower-count");
  let baseFollowerCount = 7429;
  const dailyFollowerIncrease = Math.floor(Math.random() * 11) + 10; // 10-20
  const storedFollowers = localStorage.getItem("followerCount");
  const storedDate = localStorage.getItem("followerDate");
  const today = new Date().toDateString();

  if (storedDate !== today) {
    baseFollowerCount = storedFollowers ? parseInt(storedFollowers) + dailyFollowerIncrease : baseFollowerCount + dailyFollowerIncrease;
    localStorage.setItem("followerCount", baseFollowerCount);
    localStorage.setItem("followerDate", today);
  } else {
    baseFollowerCount = storedFollowers ? parseInt(storedFollowers) : baseFollowerCount;
  }

  followerElement.innerText = `Followers: ${baseFollowerCount}`;

  // Daily visitors setup
  const visitorElement = document.getElementById("visitor-count");
  const dailyVisitors = Math.floor(Math.random() * 1001) + 2000; // 2000–3000
  visitorElement.innerText = `Visitors Today: ${dailyVisitors}`;
});
