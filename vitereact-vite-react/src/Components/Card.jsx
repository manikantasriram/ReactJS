import React from "react";


const Card = (props) => {
  return (
    <div className="Card">
      <div className="Image">
        <img className="img" src={props.Img} />
      </div>
      <div className="Title">{props.Title}</div>
      <div className="Content">{props.Content}</div>
    </div>

    
  );
};

export default Card;
