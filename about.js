import React, { Component }  from 'react';
import {NavLink,useLocation,useHistory} from 'react-router-dom'

export default function AboutPage()
{
    return(
        <div>
            
        <head>

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

   
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>

    <title>Best Rice Trading Site!</title>
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

    
        <div className="container ">
            <br />
            <form>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label" style={{fontSize:20}}><b>Owner Name</b></label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control-plaintext" style={{fontSize:16}} id="staticName"
                            value="Muhammad Haseeb Kharal"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label" style={{fontSize:20}}><b>Email</b></label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control-plaintext" style={{fontSize:16}} id="staticEmail"
                            value="Kharaltrading@gmail.com"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label" style={{fontSize:20}}><b>Contact No</b></label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control-plaintext" style={{fontSize:16}} id="staticnumber"
                            value="0333-4096192"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label" style={{fontSize:20}}><b>Landline</b> </label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control-plaintext" style={{fontSize:16}} id="staticnumber" value="056-786786"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label" style={{fontSize:20}}><b>Address</b></label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control-plaintext" style={{fontSize:16}} id="staticaddress"
                            value="Kharal Trading Company, Grain Market Sheikhupura"/>
                    </div>
                </div>
            </form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br/>
            <br/>
            <br />
            <br />
            <br />
            <br />
            <br/>
            <br/>
            <footer className="container" style={{fontSize:15}}>
                <p className="float-right"><a href="#">Back to top</a></p>
                <p>© 2020-2021 Kharal Trading Company, Pvt,Ltd. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
        </div>
   
    
   

</div>

    )
}