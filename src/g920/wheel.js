import React, { Component } from 'react';
import flatstore from 'flatstore';
import WheelButtons from './wheelbuttons'

flatstore.set('maxrotation', 360);


class Wheel extends Component {



    render() {
        let maxrotation = flatstore.get('maxrotation');
        let degrees = this.props.currentRotation * (maxrotation / 2);
        let wheelStyle = {
            width: '550px',
            transform: 'rotate(' + degrees + 'deg)'
        };
        
        return (
            <div>
                <img id="wheel" alt="" style={wheelStyle} src={"/stream-racing-wheel/g27/wheel.png"} />
                <WheelButtons 
                    upShift={5} 
                    downShift={4} 
                    wheelButton1={7} 
                    wheelButton2={20}
                    wheelButton3={22}
                    wheelButton4={6}
                    wheelButton5={19}
                    wheelButton6={21}    
                    src="/stream-racing-wheel/g27/downshift.png" />
            {/* <WheelButtons downShift={4} src="/stream-racing-wheel/g27/downshift.png" /> */}
            </div>
            
        )
    }
}
let onCustomWatched = (ownProps) => {
    return ['axes-' + ownProps.axis];
}
let onCustomProps = (key, value, store, ownProps) => {


    return {
        currentRotation: value
    }
}






export default flatstore.connect([], onCustomWatched, onCustomProps)(Wheel);