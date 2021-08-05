import React, { Component } from 'react';
import flatstore from 'flatstore';
import Shifter from './shifter';
import ShifterButtons from './shifterbuttons'
import ShifterArrows from './shifterarrows'

class ShifterBase extends Component {

    render() {

        return (
            <div style={{ position: 'relative' }}>
                <Shifter
                    top={360}
                    left={225}
                    gridSize={150}
                    gear1={8}
                    gear2={9}
                    gear3={10}
                    gear4={11}
                    gear5={12}
                    gear6={13}
                    reverse={14} />
                <ShifterButtons 
                    gearButton1={0}
                    gearButton2={1}
                    gearButton3={2}
                    gearButton4={3}
                    gearButton5={15}
                    gearButton6={16}
                    gearButton7={17}
                    gearButton8={18} />
                <ShifterArrows arrowAxis={9} />
                <img id="shiftBase" alt="" width="600px" src="/stream-racing-wheel/g27/shifter-base.png" />
            </div>
            
            

            
        )
        
    }
}


export default ShifterBase;