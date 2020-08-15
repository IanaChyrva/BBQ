import React from 'react';
import RecommendedItem from './items';
import './recom-item-styles.css';
import '../order-number/order-number.css';



class Recommended extends React.Component {
    render = () => (
        <div className="Recommended">
            {this.props.dishes.map(dish => (
                <RecommendedItem
                    image={dish.image}
                    menuTitle={dish.menuTitle}
                    dishTitle={dish.dishTitle}
                    price={dish.price}
                />
            ))}
        </div>
    )
}


export default Recommended;