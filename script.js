// Function to fetch and display stock data
function fetchStockData(symbol) {
    const apiKey = "df00cc47a1d4476584e22ccbe5310d31";
    const timeRange = document.getElementById("timeRange").value;
    const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${timeRange}&apikey=${apiKey}`;

    // Show loading indicator
    document.getElementById("loading").style.display = "block";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Hide loading indicator
            document.getElementById("loading").style.display = "none";

            if (data.values && data.values.length > 0) {
                const latestData = data.values[0];
                document.getElementById("stockSymbolDisplay").innerHTML = `Stock Symbol: ${symbol}`;
                document.getElementById("closePrice").innerHTML = `Closing Price: ${latestData.close}`;
                document.getElementById("openPrice").innerHTML = `Opening Price: ${latestData.open}`;
                document.getElementById("highPrice").innerHTML = `High Price: ${latestData.high}`;
                document.getElementById("lowPrice").innerHTML = `Low Price: ${latestData.low}`;
                document.getElementById("volume").innerHTML = `Volume: ${latestData.volume}`;
            } else {
                document.getElementById("stockData").innerHTML = "No data available";
            }
        })
        .catch(error => {
            // Hide loading indicator
            document.getElementById("loading").style.display = "none";
            console.log(error);
        });
}



// Event listener for "Fetch Data" button
document.getElementById("fetchData").addEventListener("click", function() {
    const symbol = document.getElementById("stockSymbol").value.toUpperCase();
    fetchStockData(symbol);
});

// Event listener for "Refresh" button
document.getElementById("refreshData").addEventListener("click", function() {
    const symbol = document.getElementById("stockSymbol").value.toUpperCase();
    if (symbol) {
        fetchStockData(symbol);
    } else {
        alert("Please enter a stock symbol first.");
    }
});

// Fetch initial data for AAPL
fetchStockData("MORN");
