import React from 'react';
import OrderButtonLight from '../OrderButtonLight/OrderButtonLight';
import OrderQuantity from '../OrderQuantity/OrderQuantity';


class OrderNumber extends React.Component {
    render = () => (
        <div className="RecommendedItem__order">
            <OrderQuantity />
            <OrderButtonLight />
        </div>
    )
}

export default OrderNumber;