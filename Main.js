import React, { Component }  from 'react';
import {useHistory,NavLink, Switch} from 'react-router-dom'
import br1 from './1br.jpg';
import js10 from './10js.jpg';
import br2 from './2br.jpg';
import br3 from './3br.jpg';
import br4 from './4br.jpg';
import br5 from './5br.jpg';
import br6 from './6br.jpg';
import br7 from './7br.jpg';
import br8 from './8br.jpg';
import br9 from './9br.jpg';
import br10 from './10br.jpg';
import br11 from './11br.jpg';
import br12 from './12br.jpg';
import br13 from './13br.jpg';
import Basamti from './basmati'
import Product from './product'
import Footer from './footer'
import Carousel from './carousel'
import PunjabiRice from './punjabRice'





export default function Main()
{
    let history = useHistory();
    return(
       
<div>

        <head>
   
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>

    <title>Kharal Rice Trading Site!</title>
</head>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#" style={{color:'white',fontSize:25,fontWeight:'bold'}}>Kharal Trading Rice</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-red text-uppercase  " href="#" style={{color:'green',fontWeight:'bold',fontSize:18}}><NavLink to="/" style={{textDecoration:'none',color:'white'}}>Home <span class="sr-only">(current)</span></NavLink></a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-red text-uppercase  " href="#" style={{color:'green',fontWeight:'bold',textDecoration:'none'}}><NavLink to = "/About/" style={{textDecoration:'none',color:'white',fontSize:18}}>About </NavLink></a>
            </li>
            <li className="nav-item dropdown"style={{color:'red',fontWeight:'bold'}}>
            </li>
            <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:18}}>
                      Qualties of Paddy
                          </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#" style={{fontSize:16}}>Kainaat 1121</a>
                      <a class="dropdown-item" href="#" style={{fontSize:16}}>1509</a>
                      <a class="dropdown-item" href="#" style={{fontSize:16}}>Super Chenab</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#" style={{fontSize:16}}>386</a>
                      <a class="dropdown-item" href="#" style={{fontSize:16}}>Super 515</a>
                    </div>
                  </li>
        
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1" aria-disabled="true"style={{color:'green',fontWeight:'bold'}}><NavLink to="/Contact/" style={{textDecoration:'none',color:'white',fontSize:18}}>BUY FROM US</NavLink></a>
          </li>
            
          </ul>
         </div>
      </nav>
      
    <br />
    <Carousel/>
        <div className="container my-4">
          <div className="row mb-2">
            <div className="col-md-6">
              <Basamti/>
            </div>
            <div className="col-md-6">
              <PunjabiRice/>
            </div>
          </div>
          <Product/>
          <Footer />
        </div>
</div>
    )
}
