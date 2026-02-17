import React from "react";

export default function Hero() {
    return (
        <>
            <div className="container">
                <div className="row mb-4" style={{marginTop: "3rem"}}>
                    <div className="col">
                        <h3 className="py-5 my-5 d-flex justify-content-center">
                            We pioneered the discount broking model in India.
                            <br />
                            Now, we are breaking ground with our technology.
                        </h3>
                        <hr />
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5 pt-4 mb-5 pb-4">
                    <div className="col">
                        <p className="px-5 fs-6">
                            HedgeX was founded with the belief that growth should never come without protection. Our
                            goal is to remove barriers around risk management, access, and modern investing technology.
                            The name HedgeX combines “Hedge”—stability and discipline—with “X”, symbolizing innovation
                            and limitless potential, defining a smarter way to invest with confidence and control.
                        </p>
                        <p className="px-5 fs-6">
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock
                            broker in India.
                        </p>
                        <p className="px-5 fs-6">
                            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem
                            of investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>
                    <div className="col">
                        <p className="px-5 fs-6">
                            In addition, we run a number of popular open online educational and community initiatives to
                            empower retail traders and investors.
                        </p>
                        <p className="px-5 fs-6">
                            Rainmatter, our fintech fund and incubator, has invested in several fintech startups with
                            the goal of growing the Indian capital markets.
                        </p>
                        <p className="px-5 fs-6">
                            And yet, we are always up to something new every day. Catch up on the latest updates on our
                            blog or see what the media is saying about us or learn more about our business and product
                            philosophies.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
