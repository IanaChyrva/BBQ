import React from 'react';
import './OrderQuantity.css';

class OrderQuantity extends React.Component {
    render = () => (
        <>
            <button type="submit" className="RecommendedItem__changeNumber">-</button>
            <input type="number" className="RecommendedItem__inputBox" />
            <button type="submit" className="RecommendedItem__changeNumber">+</button>
        </>
    )
}

export default OrderQuantity;