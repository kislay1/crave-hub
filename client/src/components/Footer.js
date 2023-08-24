import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const contactDetails = "Contact us at: support@example.com | Phone: +123-456-7890";
  const address = "123 Main Street, City, Country, ZIP Code";

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
       <div className="col-md-4 d-flex justify-content-md-end">
       <span className="text-muted">© 2023 <i>CraveHub</i>, Inc</span>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"> </Link>
      

        <span className="text-muted">{contactDetails}</span>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <span className="text-muted">{address}</span>
      </div>
    </footer>
  );
}
