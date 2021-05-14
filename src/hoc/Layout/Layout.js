import React, {Component} from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle.js';
import Drawer from '../../Components/Navigation/Drawer/Drawer.js';

class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuClosehandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>

                <Drawer 
                    isOpen={this.state.menu}
                    onClose={this.menuClosehandler}
                />

                <MenuToggle 
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;