import React, { Component } from 'react';
import flatstore from 'flatstore';
class ShifterArrows extends Component {

    render() {
        let currentArrow = Math.floor(this.props.arrowAmount * 100);

            switch(this.props.currentArrow !== 128) {
                //case currentArrow === 128: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/shifter-base.png"; break;
                case currentArrow === -100: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basearrow1.png"; break;
                case currentArrow === 71: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basearrow2.png"; break;
                case currentArrow === 14: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basearrow3.png"; break;
                case currentArrow === -43: document.getElementById("shiftBase").src = "/stream-racing-wheel/g27/basearrow4.png"; break;
            }


        return (
            null
        )
    }
}

let onCustomWatched = (ownProps) => {
    return ['axes-' + ownProps.arrowAxis];
}
let onCustomProps = (key, value, store, ownProps) => {
    return {
        arrowAmount: value
    }
}

export default flatstore.connect([], onCustomWatched, onCustomProps)(ShifterArrows);