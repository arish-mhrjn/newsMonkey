import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: '100%', top: '-1rem', right: '0%' }}>
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : 'https://dims.apnews.com/dims4/default/a05105a/2147483647/strip/true/crop/1852x1042+0+96/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fee%2F29%2Fc05363225ded8e75b2f33f074fb6%2F56f2e0f645c24a359b5b639884a79ee4'
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small>
                By {!author ? 'unknown' : author} on{' '}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <div style={{ textAlign: 'end' }}>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
