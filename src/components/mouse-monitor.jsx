import {useEffect, useState} from "react";

function MouseMonitor() {
    const [position, setPosition] = useState({x: 0, y: 0})
    const [isTrackingOn, setIsTrackingOn] = useState(true)

    useEffect(() => {
        const updatePositon = (event) => {
            setPosition({x: event.clientX, y: event.clientY})
        }
        document.addEventListener("mousemove", updatePositon)

        return () => document.removeEventListener("mousemove", updatePositon)
    }, [])

    const toggleTracking = () => {
        setIsTrackingOn(prevIsTrackingOn => !prevIsTrackingOn)
    }

    return (
        <div className="mouse-monitor-container">
            <h3>Mouse Position</h3>
            {isTrackingOn && <h4>x:{position.x} y:{position.y}</h4>}
            <button onClick={toggleTracking}>{isTrackingOn ? "Pause" : "Resume"}</button>
        </div>
    );
}

export default MouseMonitor;
