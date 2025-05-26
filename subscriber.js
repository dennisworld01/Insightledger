(function() {
  const baseSubscribers = 7429;
  const launchDate = new Date('2015-01-01');
  const today = new Date();
  const daysSinceLaunch = Math.floor((today - launchDate) / (1000 * 60 * 60 * 24));

  // Generate total subscribers
  const subscriberGrowth = () => Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  let totalSubscribers = baseSubscribers;
  for (let i = 0; i < daysSinceLaunch; i++) {
    totalSubscribers += subscriberGrowth();
  }

  // Generate today's visitors
  const todayVisitors = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;

  // Display
  document.getElementById('subscriber-display').textContent =
    `Subscribers: ${totalSubscribers.toLocaleString()} | Today's Visitors: ${todayVisitors.toLocaleString()}`;

  document.getElementById('current-year').textContent = today.getFullYear();
})();
