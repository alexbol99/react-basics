import './App.css'
import SeasonClock from "./components/season-clock.jsx";
import CountDown from "./components/count-down.jsx";
import MouseMonitor from "./components/mouse-monitor.jsx";
import WatcherApp from "./components/watcher-app.jsx";
import {useEffect, useState} from "react";
import Home from "./components/home.jsx";
import RareAnimalsTable from "./components/rare-animals-table.jsx";
import PageNotFound from "./components/404.jsx";

function App() {
    const [pathName, setPathName] = useState("/")

    function getPageName() {
        const url = new URL(window.location)
        let page = url.searchParams.get("page")
        return page ? `/${page}` : "/"
    }

    useEffect(() => {
        setPathName(getPageName())
    }, [window.location])

    useEffect(() => {
        function popStateHandler() {
            setPathName(getPageName())
        }
        window.addEventListener("popstate", popStateHandler)

        return () => window.removeEventListener("popstate", popStateHandler)
    }, [])

    let page = <Home/>
    switch (pathName) {
        case "/":
            page = <Home/>
            break;
        case "/rare-animals-table":
            page = <RareAnimalsTable/>
            break;
        case "/season-clock":
            page = <SeasonClock/>
            break;
        case "/count-down":
            page = <CountDown startFrom={10} onDone={() => console.log('Done!')}/>
            break;
        case "/watcher-app":
            page = <WatcherApp/>
            break;
        case "/mouse-monitor":
            page = <MouseMonitor/>
            break;
        default:
            page = <PageNotFound/>
            break;
    }
    return (
    <>
        {page}
    </>
  )
}

export default App
