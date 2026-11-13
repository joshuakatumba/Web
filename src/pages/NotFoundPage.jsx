import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFoundPage() {
  useDocumentTitle('Page Not Found');

  return (
    <section className="py-12">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <p className="heading-xxs text-primary mb-2">404</p>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="text-gray-500 mb-6">
              The page you are looking for does not exist or may have been moved.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link className="btn btn-dark" to="/">
                Back to Home
              </Link>
              <Link className="btn btn-outline-dark" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

