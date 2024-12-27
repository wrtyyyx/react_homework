import React, {Component} from 'react';
import './SideNav.css'

class SideNav extends Component {
    render() {
        return (
            <>
                <aside>
                    <nav>
                        <ul>
                            <li><a href="#">some link</a></li>
                            <li><a href="#">some link</a></li>
                            <li><a href="#">some link</a></li>
                            <li><a href="#">some link</a></li>
                            <li><a href="#">some link</a></li>
                        </ul>
                    </nav>
                </aside>

            </>
        );
    }
}

export default SideNav;