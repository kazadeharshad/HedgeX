import React from 'react';

function Hero() {
    return ( <>
        <div style={{width:"100%"}} className=' mt-5 support border-thin'>
            <div className=' mt-5 pt-1'>
                <div className=' mt-5 pb-5'>
                    <h1 className='ps-5'>Support Portal</h1>
                    <div className='search-box'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='      Eg: How do I open my account, How do I activate F&O...' className='mt-4 ms-5 border rounded border-grey border-1' type='text' style= {{width:"93%",padding:"0.9rem", color:"#fbfbfb"}}></input>
                    </div>
                </div>
            </div>
        </div>
    </> );
}

export default Hero;