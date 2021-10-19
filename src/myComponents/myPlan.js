import React from "react";

function MyPlan (props) {

    return (
    <> 
        <div className="col-10">
            <li>{props.text}</li>
        </div>
        {/* <div className="col-1">
            <button className="btn btn-warning mb-2 " onClick={() => {props.edit(props.id)}}><i className="fas fa-user-edit bg-warning"></i></button>
        </div> */}
        <div className="col-1">
            <button className="btn btn-warning mb-2" onClick={() => {props.delete(props.id)}}><i className="fas fa-eraser bg-warning"></i></button>
        </div>      
    </>    
    )
}

export default MyPlan;