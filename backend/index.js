require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {HoldingModel} = require("./model/HoldingModel");
const {PositionsModel} = require("./model/PositionsModel");
const cors = require("cors");
const bodyParser = require("body-parser");
const {OrdersModel} = require("./model/OrdersModel");
const cookieParser = require("cookie-parser");
const {Signup, Login} = require("./Controllers/AuthController");
const {userVerification, userVerify} = require("./Middlewares/AuthMiddleware");
const {UserModel} = require("./model/UserModel");
const {verify} = require("jsonwebtoken");
const {watchlist} = require("../dashboard/src/data/data");
const axios = require("axios");

const PORT = process.env.PORT || 3002;
const dbUrl = process.env.MONGO_URL;

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/signup", Signup);
app.post("/login", Login);
app.get("/verify", userVerification);

async function fetchPrices() {
    try {
        const keys = watchlist.map((s) => s.instrument_key).join(",");
        const url = `https://api.upstox.com/v2/market-quote/quotes?instrument_key=${keys}`;

        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${process.env.UPSTOX_TOKEN}`,
                Accept: "application/json",
                // "Content-Type": "application/json"
            },
        });

        return response.data; // ✅ correct return
    } catch (error) {
        throw error;
    }
}

app.get("/api/stocks", async (req, res) => {
    try {
        const data = await fetchPrices();
        res.json(data);
    } catch (err) {
        console.error("ROUTE ERROR:", err.message);

        res.status(err.response?.status || 500).json({
            error: err.message,
        });
    }
});

app.use(userVerify);

app.get("/allHoldings", async (req, res) => {
    const user = await UserModel.findById(req.user.id);
    const allHoldings = await HoldingModel.find({owner: user.username});
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
    const user = await UserModel.findById(req.user.id);
    const allOrders = await OrdersModel.find({owner: user.username});
    res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
    const user = await UserModel.findById(req.user.id);
    const stock = watchlist.find((item) => item.name === req.body.name);
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        owner: user.username,
    });
    let newHolding = new HoldingModel({
        name: req.body.name,
        qty: req.body.qty,
        avg: (Math.random() * 1000).toFixed(2),
        price: req.body.price,
        net: `+${Math.random().toFixed(2)}%`,
        day: `+${(Math.random() * 10).toFixed(2)}%`,
        owner: user.username,
        inst_key: stock.inst_key,
        instrument_key: stock.instrument_key,
    });

    newOrder.save();
    newHolding.save();

    res.send("Order saved!");
});

app.post("/sellOrder", async (req, res) => {
    const user = await UserModel.findById(req.user.id);
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        owner: user.username,
    });
    newOrder.save();
});

app.post("/logout", (req, res) => {
    res.clearCookie("token", {
        path: "/",
        sameSite: "lax",
    });

    return res.json({success: true});
});

// app.get("/addHoldings", (req, res) => {
//     let holdings = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];
//     holdings.forEach((item) => {
//         let newHolding = new HoldingModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         newHolding.save();

//     })
//     res.send("data saved");
// });

// app.get("/addPositions", (req, res) => {
//     const positions = [
//           {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//           },
//           {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//           },
//         ];
//     positions.forEach((item) => {
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPosition.save();

//     })
//     res.send("data saved");
// });

app.listen(PORT, () => {
    console.log("listening on port 3002");
    mongoose.connect(dbUrl);
    console.log("db connected");
});
