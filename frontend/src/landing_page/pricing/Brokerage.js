import React from "react";

function Brokerage() {
    return (
        <>
            <div className="container pe-2">
                <div className="row  me-4">
                    <h4>Charges for account opening</h4>
                    <table className="ms-2 mt-3 mb-5">
                        <tr className="border">
                            <th className="p-3 pe-2 me-3">Type of account</th>
                            <th className="p-3 ms-5">Charges</th>
                        </tr>
                        <tr className="border-start border-end">
                            <td className="p-3 me-5 pe-2">Online account</td>
                            <td className="p-3 ms-5">
                                <span
                                    className="px-2 rounded-1 ms-1 fs-7"
                                    style={{backgroundColor: "#4caf50", color: "white"}}
                                >
                                    FREE
                                </span>
                            </td>
                        </tr>
                        <tr className="border-start border-end" style={{backgroundColor: "#fbfbfb"}}>
                            <td className="p-3 me-5 pe-2">Offline account</td>
                            <td className="p-3 ms-5">
                                <span
                                    className="px-2 rounded-1 ms-1 fs-7"
                                    style={{backgroundColor: "#4caf50", color: "white"}}
                                >
                                    FREE
                                </span>
                            </td>
                        </tr>
                        <tr className="border-start border-end">
                            <td className="p-3 me-5 pe-2">NRI account (offline only)</td>
                            <td className="p-3 ms-5">
                                {" "}
                                <span className="px-1 ">₹ 500</span>
                            </td>
                        </tr>
                        <tr className="border-start border-end border-bottom" style={{backgroundColor: "#fbfbfb"}}>
                            <td className="p-3 me-5 pe-2">
                                Partnership, LLP, HUF, or Corporate accounts (offline only)
                            </td>
                            <td className="p-3 ms-5">
                                {" "}
                                <span className="px-1 ">₹ 500</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="row  me-4 mt-2">
                    <h4>Demat AMC (Annual Maintenance Charge)</h4>
                    <table className="ms-2 mt-3">
                        <tr className="border">
                            <th className="p-3 pe-2 me-3">Value of holdings</th>
                            <th className="p-3 ms-5">AMC</th>
                        </tr>
                        <tr className="border-start border-end">
                            <td className="p-3 me-5 pe-2">Up to ₹4 lakh</td>
                            <td className="p-3 ms-5">
                                <span
                                    className="px-2 rounded-1 ms-1 fs-7"
                                    style={{backgroundColor: "#4caf50", color: "white"}}
                                >
                                    FREE
                                </span>
                            </td>
                        </tr>
                        <tr className="border-start border-end" style={{backgroundColor: "#fbfbfb"}}>
                            <td className="p-3 me-5 pe-2">₹4 lakh - ₹10 lakh</td>
                            <td className="p-3 ms-5">
                                {" "}
                                <span className="px-1 ">₹ 100 per year, charged quarterly*</span>
                            </td>
                        </tr>
                        <tr className="border-start border-end border-bottom">
                            <td className="p-3 me-5 pe-2">Above ₹10 lakh</td>
                            <td className="p-3 ms-5">
                                {" "}
                                <span className="px-1 ">₹ 300 per year, charged quarterly</span>
                            </td>
                        </tr>
                    </table>
                    <p className="fs-8 pt-2">
                        * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account
                        (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA,
                        click here.
                    </p>
                </div>
                <div className="row  me-4 mt-5">
                    <h4>Charges for optional value added services</h4>
                    <table className="ms-2 mt-3 mb-5">
                        <tr className="border">
                            <th className="p-3 pe-2 me-3">Service</th>
                            <th className="p-3 ms-5">Billing Frquency</th>
                            <th className="p-3 ms-5">Charges</th>
                        </tr>
                        <tr className="border-start border-end">
                            <td className="p-3 me-5 pe-2">Tickertape</td>
                            <td className="p-3 ms-5">
                                {" "}
                                <span className="px-1 ">Monthly / Annual</span>
                            </td>
                            <td className="p-3 ms-5">
                                {" "}
                                <span className="px-1 ">Free: 0 | Pro: 249/2399</span>
                            </td>
                        </tr>
                        <tr className="border-start border-end" style={{backgroundColor: "#fbfbfb"}}>
                            <td className="p-3 me-5 pe-2">Smallcase</td>
                            <td className="p-3 ms-5">
                                {" "}
                                <span className="px-1 ">Per transaction</span>
                            </td>
                            <td className="p-3 ms-5">
                                {" "}
                                <span className="px-1 ">Buy & Invest More: 100 | SIP: 10</span>
                            </td>
                        </tr>
                        <tr className="border-start border-end border-bottom">
                            <td className="p-3 me-5 pe-2">Kite Connect</td>
                            <td className="p-3 ms-5">
                                {" "}
                                <span className="px-1 ">Monthly</span>
                            </td>
                            <td className="p-3 ms-5">
                                {" "}
                                <span className="px-1 ">Connect: 500 | Personal: Free</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <h4 className="mt-3 mb-5">Charges explained</h4>
                <div className="row">
                    <div className="col-6">
                        <p className="fs-6">Securities/Commodities transaction tax</p>
                        <p className="fs-8">
                            Tax by the government when transacting on the exchanges. Charged as above on both buy and
                            sell sides when trading equity delivery. Charged only on selling side when trading intraday
                            or on F&O.
                        </p>
                        <p className="fs-8">
                            When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important
                            to keep a tab.
                        </p>
                        <p className="fs-6">Transaction/Turnover Charges</p>
                        <p className="fs-8">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                        <p className="fs-8">
                            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore
                            w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                        </p>
                        <p className="fs-8">
                            BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross
                            turnover.
                        </p>
                        <p className="fs-8">
                            BSE has revised transaction charges for group A, B and other non exclusive scrips
                            (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on
                            flat rate basis w.e.f. December 1, 2022.
                        </p>
                        <p className="fs-8">
                            BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross
                            turnover.
                        </p>
                        <p className="fs-6">Call & trade</p>
                        <p className="fs-8">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                        <p className="fs-6">Stamp charges</p>
                        <p className="fs-8">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                        <p className="fs-6">NRI brokerage charges</p>
                        <ul  className="fs-8">
                            <li><p className="fs-8 mb-1">For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</p></li>
                            <li><p className="fs-8 mb-1">For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</p></li>
                            <li><p className="fs-8 mb-1">₹500 + GST as yearly account maintenance charges (AMC) charges.</p></li>
                        </ul>
                        <p className="fs-6">Account with debit balance</p>
                        <p className="fs-8">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                        <p className="fs-6">Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                        <ul  className="fs-8">
                            <li><p className="fs-8 mb-1">Equity and Futures - ₹10 per crore + GST of the traded value.</p></li>
                            <li><p className="fs-8 mb-1">Options - ₹50 per crore + GST traded value (premium value).</p></li>
                            <li><p className="fs-8 mb-1">Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</p></li>
                        </ul>
                        <p className="fs-6">Margin Trading Facility (MTF)</p>
                        <ul  className="fs-8">
                            <li><p className="fs-8 mb-1">MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</p></li>
                            <li><p className="fs-8 mb-1">MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</p></li>
                            <li><p className="fs-8 mb-1">MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</p></li>
                        </ul>
                        
                    </div>
                    <div className="col-6">
                        <p className="fs-6">GST</p>
                        <p className="fs-8">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                        <p className="fs-6">SEBI Charges</p>
                        <p className="fs-8">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.

</p>
                        <p className="fs-6">DP (Depository participant) charges</p>
                        <p className="fs-8">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                        <p className="fs-8">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                        <p className="fs-8">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                        <p className="fs-6">Pledging charges</p>
                        <p className="fs-8">₹30 + GST per pledge request per ISIN.</p>
                        <p className="fs-6">AMC (Account maintenance charges)</p>
                        <p className="fs-8">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
                        <p className="fs-8">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>
                        <p className="fs-6">Corporate action order charges</p>
                        <p className="fs-8">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                        <p className="fs-6">Off-market transfer charges</p>
                        <p className="fs-8">₹25 per transaction.</p>
                        <p className="fs-6">Physical CMR reques</p>
                        <p className="fs-8">First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                        <p className="fs-6">Payment gateway charges</p>
                        <p className="fs-8">₹9 + GST (Not levied on transfers done via UPI)</p>
                        <p className="fs-6">Delayed Payment Charges</p>
                        <p className="fs-8">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>
                        <p className="fs-6">Trading using 3-in-1 account with block functionality</p>
                        <ul  className="fs-8">
                            <li><p className="fs-8 mb-1"><b>Delivery & MTF Brokerage:</b> 0.5% per executed order.</p></li>
                            <li><p className="fs-8 mb-1"><b>Intraday Brokerage:</b> 0.05% per executed order.</p></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-3 mb-5 pb-3">
                    <p className="fs-5">Disclaimer</p>
                    <p className="fs-8 mb-5">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                </div>
            </div>
        </>
    );
}

export default Brokerage;
