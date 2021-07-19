import React from 'react';

import { Link } from 'react-router-dom';


const AllAdvertisements = ({ advertisements }) => {

    return (
        <div className="container bg-light p-5" id="allAdd">
            <h3> All Advertisements</h3>
            <div className="grid">
                {
                    advertisements.map((prop) => (
                        <div className="card p-3 m-3" key={prop._id}>
                            <div className="card-body">
                                <h4 className="card-title">{prop.name}</h4>
                                <h6 className="card-subtitle">{prop.type} At <span className="card-text badge bg-success">{prop.address}</span></h6>
                                <h3 className="card-title" >{prop.sorr}</h3>
                                <p> &#8377; {prop.price} </p>

                                <Link to={`/showAdvertisement/${prop._id}`} className="btn btn-secondary" > Contect Owner </Link>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
}

export default AllAdvertisements;