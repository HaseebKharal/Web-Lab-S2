import React from 'react';
import thumb1 from './thumb1.jpg'
class Basmati extends React.Component {
  render() {
    return (
      <div>
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary" style={{fontSize:16}}>Best Rice</strong>
            <h3 className="mb-0">Basmati Best Rice</h3>

            <p className="card-text mb-auto" style={{fontSize:15}}>Pakistan is the world's 10th largest producer of rice. Pakistan's
            exports make up more than 8% of worlds total rice trade.[1] It is an important crop in the
                     agriculture economy of Pakistan. </p>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img className="bd-placeholder-img" width="200" height="250" src={thumb1} alt="" />
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em" ></text>
          </div>
        </div>
      </div>
    );
  }
}

export default Basmati;
