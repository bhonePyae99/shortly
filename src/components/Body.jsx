import workingImg from "../images/illustration-working.svg";
import LinkDisplay from "./LinkDisplay";
import ShortLink from "./ShortLink";
import brand from "../images/icon-brand-recognition.svg";
import detail from "../images/icon-detailed-records.svg";
import customize from "../images/icon-fully-customizable.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";

const Body = () => {
  return (
    <>
      <div className="container-lg mt-5 height">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-md-6 text-center text-md-start">
            <h6 className="display-3 fw-bolder mt-3">
              More than just shorter links
            </h6>
            <p className="text-muted fs-5 fw-bold">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn btn-info fw-bold rounded-pill text-light px-4 py-2">
              Get Started
            </button>
          </div>
          <div className="col-md-6">
            <img src={workingImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative advertise">
        <ShortLink />
        <LinkDisplay />
        <div className="container dashboard-display">
          <div className="dashboard">
            <div className="logo rounded rounded-circle position-absolute top-0 start-50 translate-middle">
              <img src={brand} alt="" className="logo-img" />
            </div>
            <h3>Brand Recognition</h3>
            <p className="text-muted fs-5">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="dashboard">
            <div className="logo rounded rounded-circle position-absolute top-0 start-50 translate-middle">
              <img src={detail} alt="" className="logo-img" />
            </div>
            <h3>Detailed Records</h3>
            <p className="text-muted fs-5">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="dashboard">
            <div className="logo rounded rounded-circle position-absolute top-0 start-50 translate-middle">
              <img src={customize} alt="" className="logo-img" />
            </div>
            <h3>Fully Customizable</h3>
            <p className="text-muted fs-5">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row mt-5 bg-boost">
            <div className="col text-center p-5">
              <h3 className="display-6 fw-bold text-white">
                Boost your links today
              </h3>
              <button className="btn rounded rounded-pill fw-bold btn-info px-3 text-light mt-3">
                Get Started
              </button>
            </div>
          </div>
          <div className="row bg-dark">
            <div className="col p-0">
              <div className="container">
                <div className="row pt-5 justify-content-center">
                  <div className="col-md-4 text-center text-md-start">
                    <h3 className="fw-bold text-light">Shortly</h3>
                  </div>
                  <div className="col-md-2 text-center text-md-start">
                    <h6 className="text-light fw-bold">Features</h6>
                    <ul className="list-unstyled">
                      <li className="text-muted">Link Shortening</li>
                      <li className="text-muted">Branded Links</li>
                      <li className="text-muted">Analytics</li>
                    </ul>
                  </div>
                  <div className="col-md-2 text-center text-md-start">
                    <h6 className="text-light fw-bold">Resources</h6>
                    <ul className="list-unstyled">
                      <li className="text-muted">Blog</li>
                      <li className="text-muted">Developers</li>
                      <li className="text-muted">Support</li>
                    </ul>
                  </div>
                  <div className="col-md-2 text-center text-md-start">
                    <h6 className="text-light fw-bold">Company</h6>
                    <ul className="list-unstyled">
                      <li className="text-muted">About</li>
                      <li className="text-muted">Our Team</li>
                      <li className="text-muted">Careers</li>
                      <li className="text-muted">Contact</li>
                    </ul>
                  </div>
                  <div className="col-md-2 text-center text-md-start">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img src={facebook} className="img-fluid" alt="" />
                      </li>
                      <li className="list-inline-item">
                        <img src={instagram} className="img-fluid" alt="" />
                      </li>
                      <li className="list-inline-item">
                        <img src={pinterest} className="img-fluid" alt="" />
                      </li>
                      <li className="list-inline-item">
                        <img src={twitter} className="img-fluid" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
