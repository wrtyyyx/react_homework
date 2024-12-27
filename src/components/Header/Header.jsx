import React, {Component} from 'react';
import './Header.css'
class Header extends Component {
    render() {
        return (
            <header {...this.props} >
                <h1>hello {this.props.name} age {this.props.age}</h1>
                <hr/>
            </header>
        );
    }
}

export default Header;