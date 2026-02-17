import React from "react";

function Pricing() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-5 col-sm-12">
                        <h3>Unbeatable pricing</h3>
                        <p className="text-muted mt-4">
                            We pioneered the concept of discount broking and price transparency in India. Flat fees and
                            no hidden charges.
                        </p>
                        <a className="mt-4" href="/" style={{textDecoration: "none"}}>
                            See Pricing <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-7 col-sm-12 d-flex">
                        <img
                            className="mt-4 ms-2"
                            style={{height: "5.5rem", paddingTop: "0.75rem"}}
                            src="media/images/pricing0.svg"
                            alt="0"
                        ></img>
                        <p className="pt-4 mt-5 text-muted px-0 mx-0" style={{fontSize: "0.65rem"}}>
                            Free account<br></br>opening
                        </p>
                        <img
                            className="mt-4 ms-2"
                            style={{height: "5.5rem", paddingTop: "0.75rem"}}
                            src="media/images/pricing0.svg"
                            alt="0"
                        ></img>
                        <p className="pt-4 mt-5 text-muted px-0 me-0" style={{fontSize: "0.65rem"}}>
                            Free equity delivery<br></br>and direct mutual fund
                        </p>
                        <img
                            className="mt-4 ms-2"
                            style={{height: "5.5rem", paddingTop: "0.75rem"}}
                            src="media/images/other-trades.svg"
                            alt="trades"
                        ></img>
                        <p className="pt-4 mt-5 text-muted px-0 me-0" style={{fontSize: "0.65rem"}}>
                            Intraday and <br></br>F&O
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;
