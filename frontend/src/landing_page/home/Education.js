import React from "react";

function Education() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 space-y-4 mt-1 mb-5 p-4">
                        <img src="/media/images/education.svg" alt="Versity" className="img-fluid"></img>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-5">
                        <div claassName="links mt-5">
                            <div className="mt-5">
                                <h3>Free and open market education</h3>
                                <p className="mt-3 text-muted">
                                    Varsity, the largest online stock market education book in the world covering
                                    everything from the basics to advanced trading.
                                </p>
                            </div>
                            <a href="#" className="my-2" style={{textDecoration: "none"}}>
                                Varsity <i class="fa-solid fa-arrow-right"></i>
                            </a>
                            <div className="mt-4">
                                <p className=" mt-3 text-muted">
                                    TradingQ&A, the most active trading and investment community in India for all your
                                    market related queries.
                                </p>
                            </div>
                            <a href="#" className="my-2" style={{textDecoration: "none"}}>
                                TradingQ&amp;A <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
