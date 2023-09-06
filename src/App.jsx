import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import './App.css'
import SeasonClock from "./components/season-clock.jsx";
import CountDown from "./components/count-down.jsx";
import MouseMonitor from "./components/mouse-monitor.jsx";
import WatcherApp from "./components/watcher-app.jsx";
import Home from "./components/home.jsx";
import RareAnimalsTable from "./components/rare-animals-table.jsx";
// import PageNotFound from "./components/404.jsx";

function App() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/rare-animals-table" element={<RareAnimalsTable/>}/>
                    <Route path="/season-clock" element={<SeasonClock/>}/>
                    <Route path="/count-down"
                           element={<CountDown startFrom={10} onDone={() => console.log('Done!')}/>}
                    />
                    <Route path="/watcher-app" element={<WatcherApp/>}/>
                    <Route path="/mouse-monitor" element={<MouseMonitor/>}/>
                </Routes>
            </main>
        </Router>
    )
}

export default App
