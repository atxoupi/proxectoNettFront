import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export const Event = ({ id}) => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.events);
    const item = events.data.filter((element)=>{return element.id === id});
    return (
        <div className="d-flex">
            <div className="m-3">
                <div className="card border border-warning" style={{width: "18rem"}}>
                    <img src={item[0].attributes.image} className="card-img-top" alt="Event poster" />
                    <div className="card-body">
                        <h5 className="card-title">{item[0].attributes.title}</h5>
                        <p className="card-text">{item[0].attributes.summary}</p>
                        <p className="card-text">Date: {item[0].attributes.date}</p>
                    </div>
                </div>	
            </div>
        </div>
    );
    };