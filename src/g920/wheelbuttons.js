import React, { Component } from 'react';
import flatstore from 'flatstore';


class WheelButtons extends Component {

    render() {
        
        switch(this.props.shift) {
            case 0: document.getElementById("wheel").src = "/stream-racing-wheel/g27/wheel.png"; break;
            case 1: document.getElementById("wheel").src = "/stream-racing-wheel/g27/downshift.png"; break;
            case 2: document.getElementById("wheel").src = "/stream-racing-wheel/g27/upshift.png"; break;
            case 3: document.getElementById("wheel").src = "/stream-racing-wheel/g27/g27button1.png"; break;
            case 4: document.getElementById("wheel").src = "/stream-racing-wheel/g27/g27button2.png"; break;
            case 5: document.getElementById("wheel").src = "/stream-racing-wheel/g27/g27button3.png"; break;
            case 6: document.getElementById("wheel").src = "/stream-racing-wheel/g27/g27button4.png"; break;
            case 7: document.getElementById("wheel").src = "/stream-racing-wheel/g27/g27button5.png"; break;
            case 8: document.getElementById("wheel").src = "/stream-racing-wheel/g27/g27button6.png"; break;
        }

        return(
            null
        )
    }
}

let onCustomWatched = (ownProps) => {
    return ['buttons-' + ownProps.upShift, 'buttons-' + ownProps.downShift, 'buttons-' + ownProps.wheelButton1, 'buttons-' + ownProps.wheelButton2, 'buttons-' + ownProps.wheelButton3, 'buttons-' + ownProps.wheelButton4, 'buttons-' + ownProps.wheelButton5, 'buttons-' + ownProps.wheelButton6];
}
let onCustomProps = (key, value, store, ownProps) => {
    
    let shift = ownProps.shift;
    let shiftButton = ownProps.shiftButton;


    if (value.pressed) {
        switch(key) {
            case 'buttons-' + ownProps.upShift: shift = 1; shiftButton = ownProps.upShift; break;
            case 'buttons-' + ownProps.downShift: shift = 2; shiftButton = ownProps.downShift; break;
            case 'buttons-' + ownProps.wheelButton1: shift = 3; shiftButton = ownProps.wheelButton1; break;
            case 'buttons-' + ownProps.wheelButton2: shift = 4; shiftButton = ownProps.wheelButton2; break;
            case 'buttons-' + ownProps.wheelButton3: shift = 5; shiftButton = ownProps.wheelButton3; break;
            case 'buttons-' + ownProps.wheelButton4: shift = 6; shiftButton = ownProps.wheelButton4; break;
            case 'buttons-' + ownProps.wheelButton5: shift = 7; shiftButton = ownProps.wheelButton5; break;
            case 'buttons-' + ownProps.wheelButton6: shift = 8; shiftButton = ownProps.wheelButton6; break;
            default: shift = 0; break;
        }
    }
    else if ('buttons-' + ownProps.shiftButton === key) {
        shift = 0;
    }
    return {
        shift,
        shiftButton
    }
}

export default flatstore.connect([], onCustomWatched, onCustomProps)(WheelButtons);