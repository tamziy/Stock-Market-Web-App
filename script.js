const apiKey = "df00cc47a1d4476584e22ccbe5310d31";
const symbol = "AAPL";
const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const stockDataDiv = document.getElementById("stockData");
        if (data.values && data.values.length > 0) {
            const latestClosePrice = data.values[0].close;
            stockDataDiv.innerHTML = `Latest closing price of ${symbol} is ${latestClosePrice}`;
        } else {
            stockDataDiv.innerHTML = "No data available";
        }
    })
    .catch(error => console.log(error));
