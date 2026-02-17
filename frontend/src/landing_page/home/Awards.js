import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className='col-lg-6 col-sm-12'>
                    <img src="/media/images/largestBroker.svg" alt="Awards" className='img-fluid'/>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <h2 className="mt-2">Largest Stock Broker in India</h2>
                    <p className='mt-3'>HedgeX is proud to be recognized as the largest stock broker in India, enabling users to trade and invest seamlessly in:</p>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <ul>
                                <li className="mt-2">Futures &amp; Options</li>
                                <li className='mt-2'>Stocks &amp; IPOs</li>
                                <li className='mt-2'>Direct Mutual Funds</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li className="mt-2">Commodity Derivatives</li>
                                <li className='mt-2'>Currency Derivatives</li>
                                <li className='mt-2'>Bonds &amp; Government Securities</li>
                            </ul>
                        </div>
                        <img className ="mt-4" src='/media/images/pressLogos.png' alt='press-logo'></img>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default Awards;