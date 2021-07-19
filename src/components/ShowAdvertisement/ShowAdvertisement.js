import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';


//Material
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';


const ShowAdvertisement = ({ props }) => {
    const match = useRouteMatch()
    const id = match.params.id;
    const [advertise, setState] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/add/${id}`)
            .then(res => {
                console.log(res.data)
                setState(res.data)
            })
            .catch((err) => console.log("Erroe by me", err))
    }, [id]);

    const editClicked = () => {
        alert("Heloo");
    }
    if (advertise) {
        return (
            <div className="container">
                <div className="bg-dark text-light d-flex flex-column p-5 my-5">
                    <div className="d-flex flex-row  align-items-center justify-content-between ">
                        <div className="d-flex flex-column">
                            <h3 className="h3">{advertise.type} <small>at</small> {advertise.address}</h3>
                            <h6>Available for <span> {advertise.sorr}</span></h6>
                        </div>
                        <div className="">
                            <img width="400px" alt="Property" src="https://source.unsplash.com/260x160/?house,flat" />
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <p className="h3">Owner <span className="display-2">{advertise.owner}</span></p>
                        <h6>Owner Contact: <span>{advertise.ownercontact}</span></h6>
                    </div>
                    <div className="d-flex flex-row justify-center">
                        <Button
                            variant="contained"
                            color="secondary"
                            className="m-3"
                        >
                            <DeleteOutlinedIcon />
                        </Button>
                        <Button
                            onclick={{ editClicked }}
                            variant="contained"
                            color="primary"
                            className="m-3"
                        >
                            <EditIcon />
                        </Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <h3> Advertisement Not Available with provided id</h3>
        )
    }
}

export default ShowAdvertisement;