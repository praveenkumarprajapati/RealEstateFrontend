import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
    return (
        <Fragment>
            <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center welcome">
                <h3 className="display-1">Welcome Ji...</h3>
                <h6><span className="display-5">"B</span>uy and Sell Properties Easily" </h6>
                <p><span className="display-6">H</span>ouse <span className="display-6">B</span>unglows <span className="display-6">S</span>hop for Rent or Buy</p>
                <p>Put your property for Rent or Sell</p>
                <p>"Properties ki Dukan me AApka Swagat hai."</p>
                <div className="container p3 d-flex felx-row justify-content-around align-items-center">

                    <Link to='/createAdvertisement'><button className="myButton">Sell</button></Link>
                    <a href="#allAdd"><button className="myButton">Buy</button></a>
                </div>
            </div>
        </Fragment>
    );
}

export default Welcome;