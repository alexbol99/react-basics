import {useEffect, useState} from "react";
import {watcherService, Watcher} from "../services/watcher.service.js";

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

    async function onAddWatcherButtonClicked() {
        const newWatcher = new Watcher()
        await watcherService.addWatcher(newWatcher)
        const watchers = await watcherService.getWatchers()
        setWatchers(watchers)
    }

    async function onWatcherDeleteButtonClick(id) {
        await watcherService.removeWatcher(id)
        const watchers = await watcherService.getWatchers()
        setWatchers(watchers)
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
                {
                    const watcherSelectedStyle = selectedWatcher && watcher.id ===  selectedWatcher.id ?
                        " watcher-selected" : ""
                    return (
                        <div className={"watcher-card" + watcherSelectedStyle}
                             key={watcher.id}>
                            <div className="watcher-avatar"></div>
                            <div className="watcher-user-name">
                                {watcher.fullname}
                            </div>
                            <div className="watcher-buttons">
                                <button className="watcher-delete-button"
                                        onClick={() => onWatcherDeleteButtonClick(watcher.id)}
                                >
                                    X
                                </button>
                                <button className="watcher-select-button"
                                        onClick={() => onWatcherSelectButtonClick(watcher.id)}
                                >
                                    Select
                                </button>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
}

export default WatcherApp;

