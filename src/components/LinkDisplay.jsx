import MainContext from "../context/MainContext";
import { useContext, useState } from "react";
const LinkDisplay = () => {
  const [currentId, setCurrentId] = useState("");
  const links = useContext(MainContext);
  const displayLinks = links.links;

  const copyLink = (link) => {
    navigator.clipboard.writeText(link.shortLink);
    setCurrentId(link.id);
  };

  return (
    <div className="container link-display">
      {displayLinks.map((link) => (
        <div className="row bg-light p-2 rounded mb-3" key={link.id}>
          <div className="col-md-7 d-flex align-items-center resp-header">
            {link.inputLink}
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <span className="text-info">{link.shortLink}</span>
              </div>
              <div className="col-md-6 resp-m">
                <div className="d-grid">
                  {currentId === link.id ? (
                    <button
                      className="btn text-light"
                      style={{ backgroundColor: "hsl(257, 27%, 26%)" }}
                    >
                      Copied!
                    </button>
                  ) : (
                    <button
                      className="btn btn-info px-4 py-2 text-light"
                      onClick={() => copyLink(link)}
                    >
                      Copy
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkDisplay;
