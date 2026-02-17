import React from "react";

function Footer() {
    return (
        <><footer>
            <hr />
            <div className="container mt-2">
                <div className="row mt-5 ">
                    <div className="col">
                        <div className="logo d-inline">
                            <img className="me-0 pe-0" src="/media/images/symbol.svg" alt="symbol" height="50"></img>
                            <img className="ms-0 ps-0" src="/media/images/hedgex-logo.svg" alt="HedgeX" height="50" />
                        </div>
                        <p className="text-muted">
                            <small> © 2010 - 2025, HedgeX Broking Ltd. All rights reserved.</small>
                        </p>
                    </div>
                    <div className="col">
                        <h5 className="mb-4">Account</h5>
                        <p className="footer-links">Open demat account</p>
                        <p className="footer-links">Minor demat account</p>
                        <p className="footer-links">NRI demat account</p>
                        <p className="footer-links">Commodity</p>
                        <p className="footer-links">Dematerialisation</p>
                        <p className="footer-links">Fund transfer</p>
                        <p className="footer-links">MTF</p>
                        <p className="footer-links">Referral program</p>
                    </div>
                    <div className="col">
                        <h5 className="mb-4">Support</h5>
                        <p className="footer-links">Contact us</p>
                        <p className="footer-links">Support portal</p>
                        <p className="footer-links">How to file a complaint?</p>
                        <p className="footer-links">Status of your complaints</p>
                        <p className="footer-links">Bulletin</p>
                        <p className="footer-links">Circular</p>
                        <p className="footer-links">Z-Connect blog</p>
                        <p className="footer-links">Downloads</p>
                    </div>
                    <div className="col">
                        <h5 className="mb-4">Company</h5>
                        <p className="footer-links">About</p>
                        <p className="footer-links">Philosophy</p>
                        <p className="footer-links">Press & media</p>
                        <p className="footer-links">Careers</p>
                        <p className="footer-links">Zerodha Cares (CSR)</p>
                        <p className="footer-links">Zerodha.tech</p>
                        <p className="footer-links">Open source</p>
                    </div>
                    <div className="col">
                        <h5 className="mb-4">Quick links</h5>
                        <p className="footer-links">Upcoming IPOs</p>
                        <p className="footer-links">Brokerage charges</p>
                        <p className="footer-links">Market holidays</p>
                        <p className="footer-links">Economic calendar</p>
                        <p className="footer-links">Calculators</p>
                        <p className="footer-links">Markets</p>
                        <p className="footer-links">Sectors</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <p className="footer-text">
                        HedgeX Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: XXX005031633 CDSL/NSDL:
                        Depository services through HedgeX Broking Ltd. – SEBI Registration no.: IN-DP-XXX-2019
                        Registered Address: HedgeX Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
                        Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
                        pertaining to securities broking please write to complaints@hedgex.com, for DP related to
                        dp@hedgex.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by
                        SEBI | ICF
                    </p>
                    <p className="footer-text">
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for
                        filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                        Communication, Speedy redressal of the grievances
                    </p>
                    <p className="footer-text">Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
                    <p className="footer-text">
                        Investments in securities market are subject to market risks; read all the related documents
                        carefully before investing
                    </p>
                    <p className="footer-text">
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way
                        of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone
                        number with your stock broker / depository participant and receive OTP directly from depository
                        on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in
                        the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p className="footer-text">
                        India's largest broker based on networth as per NSE. NSE broker factsheet
                    </p>
                    <p className="footer-text">
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with
                        your stock brokers. Receive information of your transactions directly from Exchange on your
                        mobile/email at the end of the day. Issued in the interest of investors. KYC is one time
                        exercise while dealing in securities markets - once KYC is done through a SEBI registered
                        intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when
                        you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no
                        need to issue a cheque. Please write the Bank account number and sign the IPO application form
                        to authorize your bank to make payment in case of allotment. In case of non allotment the funds
                        will remain in your bank account. As a business we don't give stock tips, and have not
                        authorized anyone to trade on behalf of others. If you find anyone claiming to be part of HedgeX
                        and offering such services, please create a ticket here.
                    </p>
                    <p className="footer-text">
                        *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private
                        Limited | IRDAI Registered Corporate Agent (Composite) License No XX0768) will not have access
                        to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism
                        for such products.
                    </p>
                    <p className="d-inline d-flex gap-4 justify-content-center">
                        <span className="footer-links-bottom">NSE </span>
                        <span className="footer-links-bottom">BSE </span>
                        <span className="footer-links-bottom">MCX </span>
                        <span className="footer-links-bottom">Terms & conditions </span>
                        <span className="footer-links-bottom">Policies & procedures </span>
                        <span className="footer-links-bottom">Privacy policy </span>
                        <span className="footer-links-bottom">Disclosure </span>
                        <span className="footer-links-bottom">For investor's attention </span>
                        <span className="footer-links-bottom">Investor charter </span>
                    </p>
                </div>
            </div>
            </footer>
        </>
    );
}

export default Footer;
