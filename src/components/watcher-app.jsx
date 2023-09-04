import {useEffect, useState} from "react";
import {watcherService, Watcher} from "../services/watcher.service.js";
import WatcherCard from "./watcher-card.jsx";

function WatcherApp() {
    const [watchers, setWatchers] = useState([])
    const [selectedWatcher, setSelectedWatcher] = useState(null)

    useEffect(() => {
        async function fetchWatchers() {
            const watchers = await watcherService.getWatchers()
            setWatchers(watchers)
        }

        fetchWatchers()
    }, [])

    async function fetchAndSetWatchers() {
        const watchers = await watcherService.getWatchers()
        setWatchers(watchers)
    }
    async function onAddWatcherButtonClicked() {
        const newWatcher = new Watcher()
        await watcherService.addWatcher(newWatcher)
        await fetchAndSetWatchers()
    }

    async function onWatcherDeleteButtonClick(id) {
        await watcherService.removeWatcher(id)
        await fetchAndSetWatchers()
    }

    async function onWatcherNameSubmit(id, name) {
        const watcher = watchers.find(watcher => watcher.id === id)
        const updatedWatcher = {...watcher, fullname: name}
        await watcherService.updateWatcher(updatedWatcher)
        await fetchAndSetWatchers()
    }

    function onWatcherSelectButtonClick(id) {
        const selectedWatcher = watchers.find(watcher => watcher.id === id)
        setSelectedWatcher(selectedWatcher)
    }


    return (
        <div className="watcher-container">
            <div className="watcher-title">Watcher App</div>
            <div className="watcher-menu">
                <button className="watcher-add-button"
                        onClick={onAddWatcherButtonClicked}
                >
                    Add Watcher
                </button>
            </div>
            <div className="watcher-main">
                {watchers.map(watcher =>
                    <WatcherCard
                        key={watcher.id}
                        name={watcher.fullname}
                        id={watcher.id}
                        selected={selectedWatcher && watcher.id === selectedWatcher.id}
                        onWatcherDeleteButtonClick={onWatcherDeleteButtonClick}
                        onWatcherSelectButtonClick={onWatcherSelectButtonClick}
                        onWatcherNameSubmit={onWatcherNameSubmit}
                    />
                )}
            </div>
        </div>
    );
}

export default WatcherApp;

