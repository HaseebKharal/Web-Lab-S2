import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="container" style={{fontSize:15}}>
          <p className="float-right" ><a href=".">Back to top</a></p>
          <p>© 2020-2021 Kharal Trading Company, Pvt,Ltd. · <a href=".">Privacy</a> · <a href=".">Terms</a></p>
        </footer>
      </div>
    );
  }
}

export default Footer;
