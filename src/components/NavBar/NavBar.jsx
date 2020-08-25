import React from 'react';
import NavBarItem from './NavBarItem';
import './styles.css';


class NavBar extends React.Component {
    render = () => (
        <div className="NavBar">
            {this.props.items.map(item => (
                <NavBarItem
                    image={item.image}
                    title={item.title}
                />
            ))}
        </div>
    )

}


export default NavBar;