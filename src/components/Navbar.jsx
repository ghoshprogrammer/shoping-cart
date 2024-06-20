import React from 'react'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup 
  } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
  
const Navbar = () => {
 const {totalQuantity}=useSelector((state)=>state.cart)

  return (
  <div>
  <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <p>All Products</p>
        <MDBBtn color='dark'>
        Cart {totalQuantity}
      </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  </div>
  )
}

export default Navbar