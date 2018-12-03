import React, {Component} from 'react';
import spoon from '../assets/spoon.svg';
import HamburgerMenu from 'react-hamburger-menu'


class Header extends Component {
    constructor(){
        super();
        this.state ={}
        
    }
    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render(){
        return <div className="header background">
                    <div className="menuBar wrapper">
                        <div className="imgContainer">
                            <img src={spoon} alt="a picture of two spoons, sleeping and spooning each other." className="spoonImage" />
                        </div>
                        <div className="">
                            <nav>
                            <HamburgerMenu isOpen={this.state.open} menuClicked={this.handleClick.bind(this)} width={30} height={25} strokeWidth={3} rotate={0} color="black" borderRadius={4} animationDuration={0.5} className="menu" />
                            </nav>
                        </div>
                    </div>
                </div>;
    }
}

export default Header