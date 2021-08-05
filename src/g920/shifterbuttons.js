import React, { Component } from 'react';
import flatstore from 'flatstore';


class ShifterButtons extends Component {

    render() {
        
        switch(this.props.gearPress) {
            case 0: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/shifter-base.png"; break;
            case 1: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basebutton1.png"; break;
            case 2: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basebutton2.png"; break;
            case 3: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basebutton3.png"; break;
            case 4: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basebutton4.png"; break;
            case 5: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basebutton5.png"; break;
            case 6: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basebutton6.png"; break;
            case 7: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basebutton7.png"; break;
            case 8: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basebutton8.png"; break;
        }

        return(
            null
        )
    }
}

let onCustomWatched = (ownProps) => {
    return ['buttons-' + ownProps.gearButton1, 'buttons-' + ownProps.gearButton2, 'buttons-' + ownProps.gearButton3, 'buttons-' + ownProps.gearButton4, 'buttons-' + ownProps.gearButton5, 'buttons-' + ownProps.gearButton6, 'buttons-' + ownProps.gearButton7, 'buttons-' + ownProps.gearButton8];
}
let onCustomProps = (key, value, store, ownProps) => {
    
    let gearPress = ownProps.gearPress;
    let gearButton = ownProps.gearButton;


    if (value.pressed) {
        switch(key) {
            case 'buttons-' + ownProps.gearButton1: gearPress = 1; gearButton = ownProps.gearButton1; break;
            case 'buttons-' + ownProps.gearButton2: gearPress = 2; gearButton = ownProps.gearButton2; break;
            case 'buttons-' + ownProps.gearButton3: gearPress = 3; gearButton = ownProps.gearButton3; break;
            case 'buttons-' + ownProps.gearButton4: gearPress = 4; gearButton = ownProps.gearButton4; break;
            case 'buttons-' + ownProps.gearButton5: gearPress = 5; gearButton = ownProps.gearButton5; break;
            case 'buttons-' + ownProps.gearButton6: gearPress = 6; gearButton = ownProps.gearButton6; break;
            case 'buttons-' + ownProps.gearButton7: gearPress = 7; gearButton = ownProps.gearButton7; break;
            case 'buttons-' + ownProps.gearButton8: gearPress = 8; gearButton = ownProps.gearButton8; break;
            default: gearPress = 0; break;
        }
    }
    else if ('buttons-' + ownProps.gearButton === key) {
        gearPress = 0;
    }
    return {
        gearPress,
        gearButton
    }
}

export default flatstore.connect([], onCustomWatched, onCustomProps)(ShifterButtons);