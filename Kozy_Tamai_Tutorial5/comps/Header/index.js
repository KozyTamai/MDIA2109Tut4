//user the same component to change the fontsize
//change the text colorod the header
//change the onMoueHover
//make a form tha can be adjusted

import React from 'react';
import './header.css';

const Header = ({text, fontSize, color}) => <div
style={{color:color, fontSize:fontSize}}
className="header">
    
    <h1 style={{fontSize:fontSize}}>{text}</h1>
    </div>

    function MouseOver() {
        alert("Mouse is over")
    }

    Header.defaultProps = {
        fontSize: 12,
        color: "black",
        onMouseOver: MouseOver,
        text: "Header"
    }

export default Header;