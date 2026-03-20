import React from 'react';

function Hero() {
    return ( 
        <div className="container p-4">
            <div className="row text-center">
                <img
                    src="/media/images/homeHero.png"
                    className=" mb-5"
                    alt="Hero"
                />
                <h2>Invest in everything</h2>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <a href="http://localhost:3000/login"><button type="button" id ="btn" className="btn btn-primary" style={{width:"25%",margin:"0 auto"}}>Signup Now</button></a>
            </div>
        </div>
        
    );
}

export default Hero;