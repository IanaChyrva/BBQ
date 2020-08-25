import React from "react";
import { withRouter } from 'react-router-dom'
import { recommendedData } from './NavFullRecommended/data'

class Product extends React.Component {
  state = {
    products: recommendedData
  }

  render = () => {
    const product = this.state.products.find(({ id }) => +this.props.match.params.productId === +id)

    if (!product) {
      return 'Продукт не найден'
    }

    return (
      <pre>
        {JSON.stringify(product, null, 2)}
      </pre>
    );
  }
}

export default withRouter(Product);