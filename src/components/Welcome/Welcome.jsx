import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
    return (
        <Fragment>
            <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center welcome">
                <h3>Welcome Ji...</h3>
                <p>
                    Buy and Sell Property
                    Find House Bunglow Shop for Rent or Buy
                    Put your property for Rent or Sell
                    Property ki Dukan me AApka Swagat hai.
                    Ab propety kharidana or Bechna huaa aasan.
                </p>
                <div className="container p3 d-flex felx-row justify-content-around align-items-center">

                    <Link to='/createAdvertisement'><button className="myButton">Sell</button></Link>
                    <a href="#allAdd"><button className="myButton">Buy</button></a>
                </div>
            </div>
        </Fragment>
    );
}

export default Welcome;