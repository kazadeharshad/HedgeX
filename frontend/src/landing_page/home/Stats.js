import React from "react";

function Stats() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 space-y-4">
                        <h2 className="mb-5">Trust with confidence</h2>
                        <div className="mt-4">
                            <h4>Customer-first always</h4>
                            <p className="text-justify mt-3 text-muted">
                                That's why 1.6+ crore customers trust HedgeX with ~ ₹6 lakh crores of equity
                                investments, making us India's largest broker; contributing to 15% of daily retail
                                exchange volumes in India.
                            </p>
                        </div>
                        <div className="mt-4">
                            <h4>No spam or gimmicks</h4>
                            <p className="text-justify mt-3 text-muted">
                                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps
                                that you use at your pace, the way you like. Our philosophies.
                            </p>
                        </div>
                        <div className="mt-4">
                            <h4>The HedgeX universe</h4>
                            <p className="text-justify mt-3 text-muted">
                                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer
                                you tailored services specific to your needs.
                            </p>
                        </div>
                        <div className="mt-4">
                            <h4>Do better with money</h4>
                            <p className="text-justify mt-3 text-muted">
                                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but
                                actively help you do better with your money.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-center">
                        <img src="/media/images/ecosystem.png" className="img-fluid" alt="ecosystem"></img>
                        <div claassName="links mt-2">
                            <a className="mx-4" href="/" style={{textDecoration: "none"}}>
                                Explore our Products <i class="fa-solid fa-arrow-right"></i>
                            </a>
                            <a className="mx-4" href="/" style={{textDecoration: "none"}}>
                                Try Kite Demo <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stats;
