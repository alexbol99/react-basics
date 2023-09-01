import {useEffect, useRef, useState} from "react";

function CountDown({startFrom, onDone}) {
    const [counter, setCounter] = useState(startFrom)
    const [isAlert, setIsAlert] = useState(false)
    const interval = useRef(null)

    useEffect(() => {
        interval.current = setInterval(() => {
            setCounter(prevCounter => prevCounter - 1)
        }, 1000)

        return () => clearInterval(interval.current)
    },[])

    useEffect( () => {
        if (counter <= 6)
            setIsAlert(true)
        if (counter == 0) {
            clearInterval(interval.current)
            onDone()
        }
    }, [counter, onDone])

    const alert_style = isAlert ? "count-down-alert" : ""
    return (
        <div className={"count-down-container " + alert_style}>
            <h1>{counter}</h1>
        </div>
    );
}

export default CountDown;