import {useEffect, useState} from "react";

function SeasonClock() {
    const [date, setDate] = useState(new Date())
    const [isDark, setIsDark] = useState(false)

    useEffect( () => {
        const interval = setInterval(() => {
            const newDate = new Date()
            if (newDate.getMonth() != date.getMonth()) {
                setDate(newDate)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [date])
    const getSeasonName = (month) => {
        const seasonImageNames = ["winter", "spring", "summer", "autumn"]
        return seasonImageNames[ Math.ceil((month % 12) / 4)]
    }

    const season_name = getSeasonName(date.getMonth()+1)
    const month_name = date.toLocaleString('en-US', { month: 'long' })
    const image_src = `${getSeasonName(date.getMonth())}.png`
    const theme = isDark ? "season-clock-container-dark" : "season-clock-container-light"

    return (
        <div className={"season-clock-container " + theme}
             onClick={() => setIsDark(prevIsDark => !prevIsDark)}>
            <h3>
                {month_name} ({season_name})
            </h3>
            <img src={image_src} alt="season picture"/>
            <h3>
                {date.toLocaleString('en-US', { weekday: 'long' })}
            </h3>
        </div>
    );
}

export default SeasonClock;
