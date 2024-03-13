import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/eventCard.css";



export const Event = ({ id}) => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.events);
    const item = events.data.filter((element)=>{return element.id === id});
    return (
        <div className="d-flex col-md-4 col-sm-12 ">
            <div className="m-3">
                <div className="card border border-warning" style={{width: "18rem"}}>
                    <img src={item[0].attributes.image} className="card-img-top" alt="Event poster" />
                    <div className="card-body textcard" >
                        <h3 className="card-title ">{item[0].attributes.title}</h3>
                        <p className="card-text text-center">{item[0].attributes.summary}</p>
                        <p className="card-text text-center">{item[0].attributes.date}</p>
                    </div>
                </div>	
            </div>
        </div>
    );
    };