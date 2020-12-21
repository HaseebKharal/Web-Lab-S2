import React from 'react';
import jp4 from './4.jpg'
import jp1 from './1.jpg'
import jp3 from './3.jpg'

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1" className=""></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2" className=""></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img src={jp4} style={{'width':'900px','height':'300px'}} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block" style={{fontSize:16}}>
                <h2>Paddy Types</h2>
                <p>Best Paddy in Punjab(Pakistan)</p>
                <button type="button" className="btn btn-primary" style={{fontSize:14}}>Super Karnal</button>
                <button type="button" className="btn btn-secondary" style={{fontSize:14}}>Super Chenab</button>
                <button type="button" className="btn btn-success" style={{fontSize:14}}>Super Fan</button>
                <button type="button" className="btn btn-danger" style={{fontSize:14}}>86</button>
                <button type="button" className="btn btn-warning" style={{fontSize:14}}>1509</button>
              </div>
            </div>
            <div className="item">
              <img src={jp1} style={{'width':'900px','height':'300px'}} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block" style={{fontSize:16,color:'black'}}>
                <h2>Kharal Rice</h2>
                <p>Basmati Rice after Processing</p>
                <button type="button" className="btn btn-primary"style={{fontSize:14,color:'black'}}>Steam</button>
                <button type="button" className="btn btn-secondary"style={{fontSize:14,color:'black'}}>White</button>
                <button type="button" className="btn btn-success"style={{fontSize:14,color:'black'}}>Sela</button>
              </div>
            </div>
            <div className="item">
              <img src={jp3} style={{'width':'900px','height':'300px'}} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block" style={{fontSize:16,color:'black'}}>
                <h2>Field of Rice</h2>
                <p>Beautiful View of a Paddy Field</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
