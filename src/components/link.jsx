function Link({url, title}) {
    function onLinkClicked() {
        history.pushState({}, "", `?page=${url}`)
        location.reload()
    }

    return (
        <button onClick={onLinkClicked}>
            <h2>{title}</h2>
        </button>
    );
}

export default Link;