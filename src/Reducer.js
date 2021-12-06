const now=new Date();

const defaultTime = {
    hour: now.getHours(),
    min: now.getMinutes(),
    sec: now.getSeconds()
};

function timeReducer(state = defaultTime, action){
    switch(action.type) {
        case 'RETIME':
            return {
                hour: action.hour,
                min: action.min,
                sec: action.sec,
            };
        default:
            return state;
    }
};

export default timeReducer;