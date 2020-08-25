import React from "react";

import { withRouter } from "react-router-dom";

import "./FullProduct.css";
import OrderQuantity from "../OrderQuantity/OrderQuantity";
import OrderButtonDark from "../OrderButtonDark/OrderButtonDark";
import Ingredients from "./Ingredients/Ingredients";




class FullProductItem extends React.Component {
  render = () => {
    console.log(this.props);
    return (
      <>

        <div className="FullProduct-Item">
          <div className="FullProduct__imageBox">
            <img className="FullProduct__image" src={this.props.image.src} alt="" />
          </div>
          <div className="FullProduct__infoBox">
            <span className="FullProduct__infoBox--Titile">{this.props.title}</span>
            <span className="FullProduct__infoBox--weight">
              {this.props.weight}
            </span>
            <span className="FullProduct__infoBox--desciprionTitile">
              {this.props.descriptionTitile}
            </span>
            <span className="FullProduct__infoBox--desciption">
              {this.props.description}
            </span>
            <div className="addProduct">
              <div className="price">{this.props.price}</div>
              <OrderQuantity />
              <OrderButtonDark />
            </div>
          </div>
          <div className="FullProduct__ingredientsBox">
            <div className="FullProduct__ingredientsBox--title">Состав</div>
            <ul className="mdashList">
              <Ingredients
                className="FullProduct__ingredientsBox--list"
                ingredient={this.props.ingredients}
              />
            </ul>
          </div>
        </div>

      </>
    )
  }
}

export default withRouter(FullProductItem);
