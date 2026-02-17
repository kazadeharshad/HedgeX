import React from 'react';

function RightSection({imgURL, productName, productDescription, learnMore}) {
    return ( 
        <>
            <div className="container pt-2 mt-5">
                <div className="row mt-5 pt-5">
                    <div className="col-5 mt-5  pt-5 ">
                        <div className=" pe-5">
                            <h3 className=" pe-5 ">{productName}</h3>
                            <p className=" pe-5 fs-6 pt-3">{productDescription}</p>
                            <div className=" pe-5 pt-3">
                                <a href={learnMore} style={{textDecoration: "none"}}>
                                    Learn More <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 d-flex justify-content-center">
                        <img src={imgURL} alt="product" className="ps-5  ml-2 product-img" width={'99%'}></img>
                    </div>
                </div>
            </div>
        </>
     );
}

export default RightSection;