import React from "react";

function Hero() {
    return (
        <>
            <div className="container mt-3">
                <div className="row mt-5 mb-5 pb-5">
                    <h1 className="text-center mt-5 fs-2 pt-5">HedgeX Products</h1>
                    <p className="text-center fs-5">Sleek, modern, and intuitive trading platforms</p>
                    <p className="text-center">
                        Check out our{" "}
                        <a href="/investments" style={{textDecoration: "none"}}>
                            investment offerings <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </p>
                </div>
                    <hr/>
            </div>
        </>
    );
}

export default Hero;
