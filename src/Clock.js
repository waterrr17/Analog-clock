import React, { Component } from 'react';
import './clock.css';
import ReactTooltip from 'react-tooltip';

class Clock extends Component {
    componentDidMount(){
        const {setTime} = this.props;
        setInterval(setTime, 1000);
    }

    rotateDegreeH(hour,min){
        return (((hour+min*0.01)/12)*360)+90
    }
    rotateDegree(time){
        return ((time/60)*360)+90;
    }

    render(){
        const {hour, min, sec} = this.props;

        return(
        <div>
            <div class="clock">
                <a data-tip data-for="timeTooltip">
                    <div class="clock-back">
                        <div class="marking marking-one"></div>
                        <div class="marking marking-two"></div>
                        <div class="marking marking-three"></div>
                        <div class="marking marking-four"></div>
                        <div class="inner-back"></div>
                        <div class="hand hour" style={{transform:`rotate(${this.rotateDegreeH(hour,min)}deg)`}}></div>
                        <div class="hand min" style={{transform:`rotate(${this.rotateDegree(min)}deg)`}}></div>
                        <div class="hand sec" style={{transform:`rotate(${this.rotateDegree(sec)}deg)`}}></div>
                    </div>
                </a>
            </div>
            
            <ReactTooltip id="timeTooltip" place="top" offset ="{'right': 20}" type="dark">
                <span>{hour<10? "0"+hour: hour}시 {min<10? "0"+min : min}분 {sec<10? "0"+sec:sec}초</span>
            </ReactTooltip>
        </div>
        )
    }
}

export default Clock;