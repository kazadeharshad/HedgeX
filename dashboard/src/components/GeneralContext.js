import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => {},
    closeBuyWindow: () => {},
    openSellWindow: (uid) => {},
    closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    // useEffect(() => {
    //     try {
    //         const verifyUser = async () => {
    //             try {
    //                 const {data} = await axios.post("http://localhost:3002/verify", {}, {withCredentials: true});

    //                 if (data.status) {
    //                     setUsername(data.user);
    //                 } else {
    //                     setUsername(null);
    //                 }
    //             } catch (error) {
    //                 setUsername(null);
    //             }
    //         };

    //         verifyUser();
    //     } catch (err) {
    //         // 🔥 This handles 401 properly
    //         navigate("/login");
    //     }
    // }, []);

    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleOpenSellWindow = (uid) => {
        setIsSellWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    };

    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedStockUID("");
    };

    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
                openSellWindow: handleOpenSellWindow,
                closeSellWindow: handleCloseSellWindow,
                username,
                setUsername,
            }}
        >
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
            {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;
