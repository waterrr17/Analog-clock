export function reTime(hour, min, sec){
    return {
        type: 'RETIME',
        hour: hour,
        min: min,
        sec: sec,
    }
}