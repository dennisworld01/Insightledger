
document.addEventListener('DOMContentLoaded', () => {
  const followersCount = document.querySelector('.followers-count');
  const visitorsCount = document.querySelector('.visitors-count');

  // Simulated data - you can replace this with real data from an API or backend later
  const simulatedFollowers = Math.floor(Math.random() * 10000) + 1000;
  const simulatedVisitors = Math.floor(Math.random() * 1000) + 100;

  if (followersCount) followersCount.textContent = `${simulatedFollowers.toLocaleString()} Subscribers`;
  if (visitorsCount) visitorsCount.textContent = `${simulatedVisitors.toLocaleString()} Daily Visitors`;
});
