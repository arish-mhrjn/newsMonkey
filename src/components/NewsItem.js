import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://dims.apnews.com/dims4/default/a05105a/2147483647/strip/true/crop/1852x1042+0+96/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fee%2F29%2Fc05363225ded8e75b2f33f074fb6%2F56f2e0f645c24a359b5b639884a79ee4"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
