import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="router-container">
            {/*<nav>*/}
                <Link to="/rare-animals-table">Rare Animals Table</Link>
                <Link to="/season-clock">Season Clock</Link>
                <Link to="count-down">Count Down App</Link>
                <Link to="watcher-app">WatcherCard App</Link>
                <Link to="mouse-monitor">Mouse Monitor</Link>
            {/*</nav>*/}
        </div>
    );
}
export default Home;