import React from "react";

const Newsitem = (props) => {
    let { title, description, imageUrl, url, author, time, source } =
      props;

    return (
      <div className="card my-2"  style={{ width: "18rem",backgroundColor:'#E7E8D1' }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success" style = {{ zIndex : 1}}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>

          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on
              {new Date(time).toGMTString()}
            </small>
          </p>
          <a href={url} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
}
export default Newsitem;
