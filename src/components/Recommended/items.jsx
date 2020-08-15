import React from 'react';
import OrderNumber from '../order-number/order-number';


class RecommendedItem extends React.Component {
    render = () => (
        <div className="RecommendedItem">
            <div className="infoWrappper">
                <div className="RecommendedItem__imageBox">
                    <img
                        src={this.props.image.src}
                        alt={this.props.image.alt}
                        className="RecommendedItem__image"
                        width={this.props.image.width}
                        height={this.props.image.height}
                    />
                </div>
                <span className="RecommendedItem__menuTitle">{this.props.menuTitle}</span>
                <span className="RecommendedItem__title">{this.props.dishTitle}</span>
            </div>
            <div className="orderWrappper">
                <span className="price">{this.props.price}</span>
                <OrderNumber />
            </div>

        </div>
    )
}


export default RecommendedItem;