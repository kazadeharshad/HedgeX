import React from "react";

function Team() {
    return (
        <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col"></div>
                    <div className="col-4  mt-5">
                        <img
                            src="\media\images\nithinKamath.jpg"
                            alt="nitin kamath"
                            className="rounded-circle mt-5 ml-5 pl-5 p-4"
                            height={"350rem"}
                        ></img>

                        <h5 className="text-center text-muted">Nithin Kamath</h5>
                        <p className="text-center text-muted">Founder, CEO</p>
                    </div>
                    <div className="col-7 mt-2 ml-5 ">
                        <h3 className="ms-5 pl-4 mb-5 pb-5">People</h3>
                        <p className="px-3 fs-6 pe-5 pt-2">
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his
                            decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian
                            broking industry.
                        </p>
                        <p className="px-3 fs-6 pe-5">
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data
                            Advisory Committee (MDAC).
                        </p>
                        <p className="px-3 fs-6 pe-5">Playing basketball is his zen.</p>
                        <p className="px-3 fs-6 pe-5">Connect on Homepage / TradingQnA / Twitter</p>
                    </div>
                </div>
                <div className="row pt-4 ms-2 mb-5 pb-3">
                    <div className="col-4">
                        <div className="d-flex justufy-content-center">
                            <img
                                src="\media\images\Nikhil.jpg"
                                alt="nikhil kamath"
                                className="rounded-circle mt-5 ms-4 p-4"
                                height={"290rem"}
                            ></img>
                        </div>
                        <h5 className="text-center text-muted">Nikhil Kamath</h5>
                        <p className="text-center text-muted">Co-founder & CFO</p>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justufy-content-center">
                            <img
                                src="\media\images\Kailash.jpg"
                                alt="nikhil kamath"
                                className="rounded-circle mt-5 ms-4 p-4"
                                height={"290rem"}
                            ></img>
                        </div>
                        <h5 className="text-center text-muted">Dr. Kailash Nadh</h5>
                        <p className="text-center text-muted">CTO</p>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justufy-content-center">
                            <img
                                src="\media\images\Venu.jpg"
                                alt="nikhil kamath"
                                className="rounded-circle mt-5 ms-4 p-4"
                                height={"290rem"}
                            ></img>
                        </div>
                        <h5 className="text-center text-muted">Venu Madhav</h5>
                        <p className="text-center text-muted">COO</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
