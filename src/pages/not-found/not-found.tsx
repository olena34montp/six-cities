import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
    return (
        <div className="page page--gray">
            <Helmet>
                <title>6 cities. Not found</title>
            </Helmet>
            <main className="page__main">
                <h1>404</h1>
                <p>Page not found</p>
                <Link to="/">Go to main page</Link>
            </main>
        </div>
    );
}

export default NotFoundPage;