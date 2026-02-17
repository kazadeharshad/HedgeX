import React from "react";

function LeftSection({imgURL, productName, productDescription, tryDemo, learnMore, playstore, appstore}) {
    return (
        <>
            <div className="container pt-2 mt-5">
                <div className="row mt-5 pt-5">
                    <div className="col-6 d-flex justify-content-center">
                        <img src={imgURL} alt="product" className="ps-5 me-5 me-5 mr-5 product-img"></img>
                    </div>
                    <div className="col-6 mt-5 ps-5 pe-3 pt-2 pl-5">
                        <div className="ms-5 ps-5">
                            <h3 className="ms-5 ps-3 ">{productName}</h3>
                            <p className="ms-5 ps-3 fs-6 pt-3">{productDescription}</p>
                            <div className="ms-5 ps-3 pt-3">
                                <a href={tryDemo} style={{textDecoration: "none"}} className="me-5 fs-6">
                                    Try Demo <i class="fa-solid fa-arrow-right"></i>
                                </a>
                                <a href={learnMore} style={{textDecoration: "none"}}>
                                    Learn More <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="ms-5 ps-3 mt-4">
                                <img src="\media\images\googlePlayBadge.svg" alt="playstore" className="me-5"></img>
                                <img src="\media\images\appstoreBadge.svg" alt="appstore"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftSection;
