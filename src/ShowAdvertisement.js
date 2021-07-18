import React, { useEffect, useState } from 'react';

import { useRouteMatch } from 'react-router-dom';

const ShowAdvertisement = ({ props }) => {
    const match = useRouteMatch()
    const id = match.params.id;
    const [advertise, setAdvertise] = useState(
        {
            "name": "praveen"
        }

    );

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`http://localhost:8000/add/${id}`)
            return data.json();
        }
        setAdvertise(getData())
        console.log(advertise)
    }, [id]);

    return (
        <div className="container">
            <h3>Property Details</h3>
            {
                advertise.map((item) => {
                    <h1>item.name</h1>
                })
            }
        </div>
    );
}

export default ShowAdvertisement;