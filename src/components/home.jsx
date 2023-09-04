import Link from "./link.jsx";

function Home() {
    return (
        <div className="router-container">
            <Link url="rare-animals-table" title="Rare Anymals Table" />
            <Link url="season-clock" title="Season Clock" />
            <Link url="count-down" title="Count Down App" />
            <Link url="watcher-app" title="WatcherCard App" />
            <Link url="mouse-monitor" title="Mouse Monitor" />
        </div>
    );
}
export default Home;