import React from "react";
import RecommendedItem from "./RecommendedItem";
import "./recom-item-styles.css";

class Recommended extends React.Component {
  render = () => (
    <div className="Recommended">
      {this.props.dishes.map((dish) => (
        <RecommendedItem
          image={dish.image}
          title={dish.menuType}
          dishTitle={dish.title}
          price={dish.price}
          id={dish.id}
        />
      ))}
    </div>
  );
}

export default Recommended;
