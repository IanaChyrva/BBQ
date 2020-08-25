import React from "react"
import "./Ingredients.css"

class Ingredients extends React.Component {

  render = () => (
    <div>
      {this.props.ingredient.map((ingredientItem) => (
        <li >
          <span class="mdashIcon">&mdash;</span>
          {ingredientItem}
        </li>
      ))}
    </div>
  )
}

export default Ingredients