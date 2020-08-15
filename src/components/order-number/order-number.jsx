import React from 'react';

class OrderNumber extends React.Component {
    render = () => (
        <div className="RecommendedItem__order">
            <button type="submit" className="RecommendedItem__changeNumber">-</button>
            <input type="number" className="RecommendedItem__inputBox" />
            <button type="submit" className="RecommendedItem__changeNumber">+</button>
            <button type="submit" className="RecommendedItem__button">Заказать</button>
        </div>
    )
}

export default OrderNumber;