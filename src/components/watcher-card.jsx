import {useState} from "react";

function WatcherCard({id, name, selected,
                         onWatcherDeleteButtonClick, onWatcherSelectButtonClick, onWatcherNameSubmit}) {
    const [isInput, setIsInput] = useState(false)
    const [watcherName, setWatcherName] = useState(name)

    function onInputNameSubmit(event) {
        event.preventDefault()
        const watcherName = event.currentTarget[0].value
        onWatcherNameSubmit(id, watcherName)
        setIsInput(false)
        setWatcherName(watcherName)
    }

    const watcherSelectedStyle = selected ? " watcher-selected" : ""
    return (
        <div className={"watcher-card" + watcherSelectedStyle}>
            <div className="watcher-avatar">
                <img src="avatar-svgrepo-com.svg"/>
            </div>
            {isInput ?
                <form onSubmit={onInputNameSubmit}>
                    <input type="text" name="watcherName" defaultValue={watcherName}/>
                </form>
                :
                <div className="watcher-user-name"
                     onClick={() => setIsInput(true)}>
                    {watcherName}
                </div>
            }
            <hr />
            <div className="watcher-buttons">
                <button className="watcher-delete-button"
                        onClick={() => onWatcherDeleteButtonClick(id)}
                >
                    X
                </button>
                <button className="watcher-select-button"
                        onClick={() => onWatcherSelectButtonClick(id)}
                >
                    Select
                </button>
            </div>
        </div>
    )
}

export default WatcherCard;