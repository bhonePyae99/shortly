const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-2">
      <div className="container-lg">
        <span className="navbar-brand">
          <h3 className="fw-bolder">Shortly</h3>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link" aria-current="page">
                Features
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Pricing</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Resources</span>
            </li>
          </ul>
          <ul className="list-inline">
            <li className="list-inline-item me-4 bg-info rounded-pill py-2 px-4 text-muted">
              Login
            </li>
            <li className="list-inline-item text-muted">Sign Up</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
