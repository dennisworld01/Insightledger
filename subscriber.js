(function() {
  const baseSubscribers = 7429;
  const launchDate = new Date('2015-01-01');
  const today = new Date();
  const daysSinceLaunch = Math.floor((today - launchDate) / (1000 * 60 * 60 * 24));
  const randomGrowth = () => Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  let totalSubscribers = baseSubscribers;

  for (let i = 0; i < daysSinceLaunch; i++) {
    totalSubscribers += randomGrowth();
  }

  document.getElementById('subscriber-display').textContent =
    `Subscribers: ${totalSubscribers.toLocaleString()}`;

  document.getElementById('current-year').textContent = today.getFullYear();
})();
