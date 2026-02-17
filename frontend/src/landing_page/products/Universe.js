import React from "react";

function Universe() {
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center fs-4 pb-5">
                            Want to know more about our technology stack? Check out the Zerodha.tech blog.
                        </p>
                        <h3 className="text-center pb-4">The HedgeX Universe</h3>
                        <p className="text-center">
                            Extend your trading and investment experience even further with our partner platforms
                        </p>
                    </div>
                </div>
                <div className="row ms-4 me-4">
                    <div className="col-4 d-inline-block justify-content-center pl-2 ps-5 pe-3 pt-5">
                        <img
                            src="\media\images\zerodhaFundhouse.png"
                            alt="fund house"
                            width={"80%"}
                            className="ps-5 product-img"
                        ></img>
                        <p className="pt-4 fs-8 text-center px-3">
                            Our asset management venture that is creating simple and transparent index funds to help you
                            save for your goals.
                        </p>
                    </div>
                    <div className="col-4 d-inline-block justify-content-center px-4 pt-5">
                        <img
                            src="\media\images\sensibullLogo.svg"
                            alt="fund house"
                            width={"80%"}
                            className="ps-5 product-img"
                        ></img>
                        <p className="pt-4 fs-8 text-center px-2">
                            Options trading platform that lets you create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="col-4 d-inline-block justify-content-center px-5 pt-5">
                        <img
                            src="\media\images\tijori.svg"
                            alt="fund house"
                            width={"65%"}
                            className="ps-5 ms-3 product-img"
                        ></img>
                        <p className="pt-2 fs-8 text-center px-3">
                            Our asset management venture that is creating simple and transparent index funds to help you
                            save for your goals.
                        </p>
                    </div>
                </div>
                <div className="row ms-4 me-4">
                    <div className="col-4 d-inline-block justify-content-center pl-2 ps-5 pe-3 pt-3">
                        <img
                            src="\media\images\streakLogo.png"
                            alt="fund house"
                            width={"80%"}
                            className="ps-5 pt-5 product-img"
                        ></img>
                        <p className="pt-4 fs-8 text-center px-3">
                            Systematic trading platform that allows you to create and backtest strategies without
                            coding.
                        </p>
                    </div>
                    <div className="col-4 d-inline-block justify-content-center px-5 pt-3">
                        <img
                            src="\media\images\smallcaseLogo.png"
                            alt="fund house"
                            width={"80%"}
                            className="ps-5 pt-5 product-img"
                        ></img>
                        <p className="pt-4 fs-8 text-center px-3">
                            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className="col-4 d-inline-block justify-content-center px-5 pt-3">
                        <img
                            src="\media\images\dittoLogo.png"
                            alt="fund house"
                            width={"60%"}
                            className="ps-5 ms-4 pt-5 product-img"
                        ></img>
                        <p className="pt-4 fs-8 text-center px-3">
                            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                        </p>
                    </div>
                    <button
                        className="btn btn-primary mt-5 mb-5 p-2"
                        type="button"
                        style={{width: "20%", margin: "0 auto"}}
                    >
                        Sign up for free
                    </button>
                </div>
            </div>
        </>
    );
}

export default Universe;
