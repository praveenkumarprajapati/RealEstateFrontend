import React, { useEffect, useState, Fragment } from 'react';


import { getAdvertisement } from './../../Api/api'

import AllAdvertisements from './../AllAdvertisements/AllAdvertisemets'
import Welcome from './../Welcome/Welcome'


const Home = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const findItems = async () => {
            const adds = await getAdvertisement()
            setState(adds)
        }
        try {
            findItems()
            console.log("findItems")
        } catch (err) {
            console.log(err)
        }
    }, []);

    if (state) {
        return (
            <Fragment>
                <Welcome />
                <AllAdvertisements advertisements={state} />
            </Fragment>
        )
    } else {
        return (
            <h3>Error</h3>
        )
    }


}

export default Home;