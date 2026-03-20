import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import {VerticalGraph} from "./VerticalGraph";

//import {holdings} from "../data/data";

const Holdings = () => {
    const [allHoldings, setAllHoldings] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const holdingsRes = await axios.get("http://localhost:3002/allHoldings", {withCredentials: true});

            const priceRes = await axios.get("http://localhost:3002/api/stocks");

            const holdings = holdingsRes.data;
            const priceData = priceRes.data?.data;

            const merged = holdings.map((h) => {
                const api = priceData?.[h.inst_key];
                if (!api) return h;

                const ltp = api.last_price;
                const change = api.net_change;

                const currentValue = h.qty * ltp;
                const investment = h.qty * h.avg;
                const pnl = currentValue - investment;

                return {
                    ...h,
                    ltp,
                    currentValue,
                    pnl,
                    netChange: ((pnl / investment) * 100).toFixed(2),
                    dayChange: ((change / api.ohlc.close) * 100).toFixed(2),
                };
            });

            setAllHoldings(merged);
        };

        fetchData();

        const interval = setInterval(fetchData, 2000);

        return () => clearInterval(interval);
    }, []);

    const labels = allHoldings.map((subarray) => subarray["name"]);

    const data = {
        labels,
        datasets: [
            {
                label: "Stock Price",
                data: allHoldings.map((stock) => stock.ltp),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
    return (
        <>
            <h3 className="title">Holdings ({allHoldings.length})</h3>

            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allHoldings.map((stock) => {
                            const isProfit = stock.pnl >= 0;

                            return (
                                <tr key={stock.inst_key || stock.name}>
                                    <td>{stock.name}</td>

                                    <td>{stock.qty}</td>

                                    <td>{stock.avg?.toFixed(2)}</td>

                                    <td>{stock.ltp ? stock.ltp.toFixed(2) : "--"}</td>

                                    <td>{stock.currentValue ? stock.currentValue.toFixed(2) : "--"}</td>

                                    <td className={isProfit ? "profit" : "loss"}>
                                        {stock.pnl ? stock.pnl.toFixed(2) : "--"}
                                    </td>

                                    <td className={isProfit ? "profit" : "loss"}>
                                        {stock.netChange ? `${stock.netChange}%` : "--"}
                                    </td>

                                    <td className={stock.dayChange >= 0 ? "profit" : "loss"}>
                                        {stock.dayChange ? `${stock.dayChange}%` : "--"}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="row">
                <div className="col">
                    <h5>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p>Total investment</p>
                </div>
                <div className="col">
                    <h5>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p>Current value</p>
                </div>
                <div className="col">
                    <h5>1,553.40 (+5.20%)</h5>
                    <p>P&L</p>
                </div>
            </div>
            <VerticalGraph data={data}></VerticalGraph>
        </>
    );
};

export default Holdings;
