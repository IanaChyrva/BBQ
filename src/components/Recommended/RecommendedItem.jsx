import React from "react";
import OrderQuantity from "../OrderQuantity/OrderQuantity";
import OrderButtonLight from "../OrderButtonLight/OrderButtonLight";
import { Link } from "react-router-dom";


const RecommendedItem = (props) => {
  return (

    <div className="RecommendedItem">
      <div className="infoWrappper">
        <div className="RecommendedItem__imageBox">
          <img
            src={props.image.src}
            alt={props.image.alt}
            className="RecommendedItem__image"
            width={props.image.width}
            height={props.image.height}
          />
        </div>
        <span className="RecommendedItem__menuTitle">{props.title}</span>
        <Link to={`/nav-full-recommended/${props.id}`}>
          <span className="RecommendedItem__title">{props.dishTitle}</span>
        </Link>
      </div>
      <div className="orderWrappper">
        <span className="price">{props.price}</span>
        <div className="quantityBox">
          <OrderQuantity />
          <OrderButtonLight />
        </div>
      </div>
    </div>
  )
}

export default RecommendedItem;
