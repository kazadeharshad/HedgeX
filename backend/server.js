// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

// 🔴 put your token here
const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiI1Q0M4NVQiLCJqdGkiOiI2OWJhNTQyMzNmZTE5MzdiMDE4ODExZGEiLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaXNQbHVzUGxhbiI6ZmFsc2UsImlhdCI6MTc3MzgxODkxNSwiaXNzIjoidWRhcGktZ2F0ZXdheS1zZXJ2aWNlIiwiZXhwIjoxNzczODcxMjAwfQ.xozymKyISnibGKlqkmW5jdb5pmrPtCrUaBez7bj9tuA";

// your watchlist
const symbols = [
  "NSE_EQ|INE002A01018", // RELIANCE
  "NSE_EQ|INE467B01029", // TCS
  "NSE_EQ|INE009A01021", // INFY
  "NSE_EQ|INE040A01034", // HDFCBANK
];

// ===== FETCH FUNCTION =====
async function fetchPrices() {
  const url = `https://api.upstox.com/v2/market-quote/quotes?instrument_key=${symbols.join(",")}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      Accept: "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error("Upstox error");
  }

  return data;
}

// ===== ROUTE =====
app.get("/api/stocks", async (req, res) => {
  try {
    const data = await fetchPrices();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "API failed" });
  }
});

// ===== START =====
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});