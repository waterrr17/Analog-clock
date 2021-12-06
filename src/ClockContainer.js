import { connect } from 'react-redux';
import { reTime } from './Action'

import Clock from './Clock';

const mapStateToProps = state => ({
    hour: state.hour,
    min: state.min,
    sec: state.sec
});

const mapDispatchToProps = dispatch => ({
    setTime: () => {
        const now = new Date();
        const hour = now.getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();

        dispatch(reTime(hour, min, sec));
    }
});


const ClockContainer= connect(
    mapStateToProps,
    mapDispatchToProps
)(Clock);

export default ClockContainer;
