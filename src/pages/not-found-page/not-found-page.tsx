import { NavLink } from 'react-router-dom';
import './not-found.css';

function NotFoundPage() {
  return (
    <div className="page">
      <main className="page__main page__main--not-found">
        <section className="not-found">
          <h1>404 Not Found</h1>
          <NavLink className="back" to="/">
            Back to Home page
          </NavLink>
        </section>
      </main>
    </div>
  );
}

export default NotFoundPage;
