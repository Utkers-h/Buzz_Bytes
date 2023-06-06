import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }
          }>
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>

          <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpJZ4y0gU_QKwIh-xyUsrgqFt2nm91gBBAA&usqp=CAU" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " 
            style={{ zIndex : "1"}}>
              {source}</span> */}

            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unkonown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>

    )
  }
}

export default NewsItem
