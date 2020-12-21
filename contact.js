import react,{useState} from 'react'
import {useHistory,useLocation,NavLink} from 'react-router-dom'
import React, { Component }  from 'react';
export default function Contact ()
{

let formsubmission = () => 
{

var fname = document.getElementById('fn').value
var lname = document.getElementById('ln').value
var address = document.getElementById('address').value
var email = document.getElementById('exampleFormControlInput1').value
var contact = document.getElementById('exampleFormControlInput3').value
var ricetype = document.getElementById('exampleFormControlSelect1').value
console.log(ricetype)
var bagtype = document.getElementById('inlineFormCustomSelect').value
console.log(bagtype)
var noofbags = document.getElementById('bn').value
var price = 0

if(ricetype=="White Rice" && bagtype=="1")
{

 price= 1400

}
if(ricetype=="Steam Rice" && bagtype=="3")
{
   price = 8000
}

if(ricetype=="Sela Rice" && bagtype=="3")
{
  price = 6500
}
if(ricetype=="Sela Rice" && bagtype=="2")
{
  price = 2600
}
if(ricetype=="White Rice" && bagtype=="2")
{
  price = 2800
}
if(ricetype == "Sela Rice" && bagtype=="1")
{
  price = 1300
}
let tprice = noofbags * price
let buyingform= {
    firstname:fname,
    lastname:lname,
    address:address,
    email:email,
    contact:contact,
    ricetype:ricetype,
    riceprice: price,
    Qty: noofbags,
    TotalPrice: tprice






}
alert(JSON.stringify(buyingform))
}
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

    <div className="container " style={{fontSize:16}}>
        <h1>Provided By Us/Inventory</h1>
        <form>
            
            <form>
                <label for="exampleFormControlInput1"><b>Name</b></label>
                <div className="form-row">
                  <div className="col" >
                    <input type="text" className="form-control" style={{fontSize:12}}  id="fn" placeholder="First name" />
                  </div>
                  <div class="col">
                    <input type="text" className="form-control" style={{fontSize:12}} id="ln" placeholder="Last name"/>
                  </div>
                </div>
            </form>
            <br />
            </form>
            <div className="mb-3">
                <label for="address"><b>Village/City</b></label>
                <input type="text" className="form-control" style={{fontSize:14}} id="address"  placeholder="Village/City" required=""/>
                <div className="invalid-feedback">

                  <label>Enter address</label>
                </div>
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1"><b>Your Contact Number</b></label>
                <input type="text" className="form-control" style={{fontSize:14}} id="exampleFormControlInput3" placeholder="contact"/>
             </div>
              <div className="form-group">
                <label for="exampleFormControlInput1"><b>Email address</b></label>
                <input type="email" className="form-control" style={{fontSize:14}}id="exampleFormControlInput1" placeholder="name@example.com"/>
             </div>
             <br/>
             <div className="form-group">
                <label for="exampleFormControlSelect1"><b>You Want To Buy??</b></label>
                <select className="form-control" style={{fontSize:14}} id="exampleFormControlSelect1">
                    <option>White Rice</option>
                    <option>Steam Rice</option>
                    <option>Sela Rice</option>
                    <option>Crop Seed</option>
                    <option>Fertilizer</option>
                    <option>Weet</option>
                    <option>Crop Medicen</option>
                </select>
             </div>
             <br/>
             <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Price of White Rice</div>
                <div className="col-md-4 themed-grid-col">50 kg</div>
                <div className="col-md-4 themed-grid-col">Rs 7000</div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Price of Steam Rice</div>
                <div className="col-md-4 themed-grid-col">50 kg</div>
                <div className="col-md-4 themed-grid-col">Rs 8000</div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Price of Sela Rice</div>
                <div className="col-md-4 themed-grid-col">50 kg</div>
                <div className="col-md-4 themed-grid-col">Rs 6500</div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Price of Crop Seed</div>
                <div className="col-md-4 themed-grid-col">50 kg</div>
                <div className="col-md-4 themed-grid-col">Rs 4000</div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Price of Fertilizer</div>
                <div className="col-md-4 themed-grid-col">50 kg</div>
                <div className="col-md-4 themed-grid-col">Rs 4400</div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Price of Weat</div>
                <div className="col-md-4 themed-grid-col">50 kg</div>
                <div className="col-md-4 themed-grid-col">Rs 2500</div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Price of Crop Medicen</div>
                <div className="col-md-4 themed-grid-col">20 kg</div>
                <div className="col-md-4 themed-grid-col">Rs 3000</div>
              </div>
              <br/>
            <form>
                  <div >
                    <label for="exampleFormControlInput1"><b>Quantity</b></label>
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" style={{fontSize:14}}>
                    
                      <option selected>Choose Quantity</option>
                      <option value="1">10 Kg</option>
                      <option value="2">20 Kg</option>
                      <option value="3">50 Kgs</option>
                    </select>
                </div>
                <br/>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{fontSize:14}} id="inputGroup-sizing-default"><b>No Of Bags</b></span>
                    </div>
                    <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="bn"/>
                  </div>
                  <br/>
                </form>
            <div className="form-group">
                
                <label for="exampleFormControlTextarea1"><b>Feedback/Suggestions</b></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn-primary" onClick={()=> formsubmission()}>Buy</button>
            
        
       </div>
  
    
    
    
    <br />
    <br />
    <br />
    <br />
    <br />
    <footer className="container" style={{fontSize:15}}>
        <p className="float-right"><a href="#">Back to top</a></p>
        <p>© 2020-2021 Kharal Trading Company, Pvt,Ltd. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
    </footer>



<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
    integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
    crossorigin="anonymous"></script>

</div>


    )
}
}