import React, {useState, useContext, useEffect} from "react";

import GeneralContext from "./GeneralContext";
import axios from "axios";
import {Tooltip, Grow} from "@mui/material";
import {DoughnutChart} from "./DoughnutChart";

import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";

import {watchlist as initialWatchlist} from "../data/data";
import {Doughnut} from "react-chartjs-2";

const WatchList = () => {
    const [watchlist, setWatchlist] = useState(initialWatchlist);
    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const res = await axios.get("http://localhost:3002/api/stocks");

                const resdata = res.data;

                if (!resdata || !resdata.data) return;

                setWatchlist((prev) =>
                    prev.map((s) => {
                        const apiData = resdata.data[s.inst_key];
                        if (!apiData) return s;

                        const change = apiData.net_change;
                        return {
                            ...s,
                            price: apiData.last_price,
                            percent: ((change / apiData.ohlc.close) * 100).toFixed(2) + "%",
                            isDown: change < 0,
                        };
                    })
                );
            } catch (err) {
                console.log("AXIOS ERROR:", err.response?.status, err.message);
            }
        };

        fetchStocks();

        const interval = setInterval(fetchStocks, 2000);
        return () => clearInterval(interval);
    }, []);
    const labels = watchlist.map((subarray) => subarray["name"]);
    const data = {
        labels,
        datasets: [
            {
                label: "Stock Price",
                data: watchlist.map((stock) => stock.price),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts"> {watchlist.length} / 50</span>
            </div>

            <ul className="list">
                {watchlist.map((stock, index) => {
                    return <WatchListItem stock={stock} key={stock.inst_key} />;
                })}
            </ul>
            <DoughnutChart data={data}></DoughnutChart>
        </div>
    );
};

export default WatchList;

const WatchListItem = ({stock}) => {
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);

    const handleMouseEnter = (e) => {
        setShowWatchlistActions(true);
    };

    const handleMouseLeave = (e) => {
        setShowWatchlistActions(false);
    };

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="down" />}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchlistActions && <WatchListActions uid={stock.name} />}
        </li>
    );
};

const WatchListActions = ({uid}) => {
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
        generalContext.openBuyWindow(uid);
    };

    const handleSellClick = () => {
        generalContext.openSellWindow(uid);
    };

    return (
        <span className="actions">
            <span>
                <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick}>
                    <button className="buy">Buy</button>
                </Tooltip>
                <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow} onClick={handleSellClick}>
                    <button className="sell">Sell</button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
                    <button className="action">
                        <BarChartOutlined className="icon" />
                    </button>
                </Tooltip>
                <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
                    <button className="action">
                        <MoreHoriz className="icon" />
                    </button>
                </Tooltip>
            </span>
        </span>
    );
};
