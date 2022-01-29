import MainContext from "../context/MainContext";
import { useContext, useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
const ShortLink = () => {
  const [inputLink, setInputLink] = useState("");
  const links = useContext(MainContext);
  const [errors, setErrors] = useState({});

  const validate = (targetObj) => {
    const schema = {
      inputLink: Joi.string().required(),
      shortLink: Joi.string().required(),
      id: Joi.string().required(),
    };
    const { error } = Joi.validate(targetObj, schema);
    if (error === null) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = "Please add link";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let shortUrl = `https://api.shrtco.de/v2/shorten?url=${inputLink}/very/long/link.html`;
    try {
      const data = await axios.get(shortUrl);
      const shortLink = data.data.result.full_short_link;
      const id = data.data.result.code;
      const linkObj = { inputLink, shortLink, id };
      const errors = validate(linkObj);
      if (errors) {
        setErrors(errors);
        return;
      }
      setErrors({});
      const copyLink = [...links.links];
      copyLink.push(linkObj);
      links.setLinks(copyLink);
    } catch (ex) {
      console.log(ex.response);
    }
    setInputLink("");
  };

  return (
    <div className="container shortLink p-4 positon-absolute top-0 start-50 translate-middle-y">
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="col-md-8">
          <input
            type="text"
            className={
              Object.keys(errors).length !== 0
                ? "form-control-lg form-control is-invalid"
                : "form-control-lg form-control"
            }
            placeholder="Shorten a link here"
            value={inputLink || ""}
            onChange={(e) => {
              setInputLink(e.target.value);
            }}
          />
          <div className="invalid-feedback">{errors.inputLink}</div>
        </div>
        <div className="col-md-2">
          <div className="d-grid gap-2 resp-m">
            <button className="btn btn-lg btn-info text-light fw-bold w-sm-100">
              Shorten it!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShortLink;
