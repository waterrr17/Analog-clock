import React, { Component } from 'react';
import './clock.css';

class Clock extends Component {
    componentDidMount(){
        const {setTime} = this.props;
        setInterval(setTime, 1000);
    }

    rotateDegree(time, unit){
        switch(unit){
            case 'h':
                return ((time/24)*360)+90;
            default:
                return ((time/60)*360)+90;
        }

    }

    render(){
        const {hour, min, sec} = this.props;

        return(
            <div class="clock">
                <div class="clock-back">
                        <div class="marking marking-one"></div>
                        <div class="marking marking-two"></div>
                        <div class="marking marking-three"></div>
                        <div class="marking marking-four"></div>
                        <div class="inner-back"></div>
                    <div class="hand hour" style={{transform:`rotate(${this.rotateDegree(hour)}deg)`}}></div>
                    <div class="hand min" style={{transform:`rotate(${this.rotateDegree(min)}deg)`}}></div>
                    <div class="hand sec" style={{transform:`rotate(${this.rotateDegree(sec)}deg)`}}></div>
                </div>
            </div>
        )
    }
}

export default Clock;