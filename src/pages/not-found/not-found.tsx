import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
    return (
        <div className="page page--gray">
            <main className="page__main">
                <h1>404</h1>
                <p>Page not found</p>
                <Link to="/">Go to main page</Link>
            </main>
        </div>
    );
}

export default NotFoundPage;