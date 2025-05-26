
document.addEventListener("DOMContentLoaded", () => {
    const subscriberCountElement = document.getElementById("subscriber-count");
    const stored = localStorage.getItem("subscriberData");
    const today = new Date().toISOString().slice(0, 10);

    let data = stored ? JSON.parse(stored) : {
        count: Math.floor(Math.random() * 500 + 500), // Initial fake subscriber count between 500-1000
        lastUpdated: today
    };

    if (data.lastUpdated !== today) {
        const increase = Math.floor(Math.random() * 20) + 1; // Increase by 1-20 per day
        data.count += increase;
        data.lastUpdated = today;
        localStorage.setItem("subscriberData", JSON.stringify(data));
    }

    subscriberCountElement.textContent = data.count;

    // Update footer year
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
