import React from "react";

function Hero() {
    return (
        <>
            <div className="container mt-5">
                <div className="row mt-5 mb-5 pb-5">
                    <div className="col-12 mt-5 pt-5 mb-5">
                        <h3 className="text-center">Charges</h3>
                        <p className="text-center fs-5 text-muted mt-2">List of all charges and taxes</p>
                    </div>
                    <div className="col-4 mt-5 pt-5">
                        <img src="\media\images\pricingEquity.svg" alt="0" className="pt-5 px-5 pb-3 "></img>
                        <h3 className="text-center">Free equity delivery</h3>
                        <p className="text-center mt-3 fs-6 text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col-4 mt-5 pt-5">
                        <img src="\media\images\other-trades.svg" className="pt-5 px-5 pb-3" alt="20"></img>
                        <h3 className="text-center">Intraday and F&O trades</h3>
                        <p className="text-center mt-3 fs-6 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col-4 mt-5 pt-5">
                        <img src="\media\images\pricingMF.svg" alt="mf" className="pt-5 px-5 pb-3"></img>
                        <h3 className="text-center">Free direct MF</h3>
                        <p className="text-center mt-3 fs-6 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
