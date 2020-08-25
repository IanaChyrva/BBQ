import React from 'react';
import FullProductItem from './FullProduct-Item';
import { withRouter } from "react-router-dom";

class FullProduct extends React.Component {
    render = () => (
        <div>
            {this.props.recommendedData.map((product) => (
                <FullProductItem
                    image={product.image}
                    title={product.title}
                    weight={product.weight}
                    price={product.price}
                    descriptionTitile={product.descriptionTitile}
                    description={product.description}
                    id={product.id}
                    ingredients={product.ingredients}

                />
            ))}
        </div>
    )
}

export default withRouter(FullProduct)
