
function PageNotFound()
{
    return (
        <div className="page-not-found-container">
            <div className="page-not-found-error-code">404</div>
            <div className="page-not-found-error-message">Page Not Found</div>
            {/*<a className="home-link" href="/">Go back to home</a>*/}
        </div>
    );
}

export default PageNotFound;