import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Orders = () => {
    const [allorders, setAllOrders] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:3002/allOrders", {
            withCredentials: true,
        })
        .then((res) => {
            if (Array.isArray(res.data)) {
                setAllOrders(res.data);
            } else {
                setAllOrders([]);
            }
        });
    }, []);
    return (
        <div className="orders">
            <div className="order-table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Mode</th>
                    </tr>
                    {allorders.map((order) => {
                        return (
                            <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.qty}</td>
                                <td>{order.price}</td>
                                <td>{order.mode}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>

            <div className="no-orders">
                <p>You haven't placed any orders today</p>

                <Link to={"/"} className="btn">
                    Get started
                </Link>
            </div>
        </div>
    );
};

export default Orders;
