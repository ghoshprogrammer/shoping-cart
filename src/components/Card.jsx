import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const Card = ({ data }) => {
    const dispatch=useDispatch()
    return (
        <div className="container">
            <div className="row d-flex justify-content-center  mt-5">
                {
                    data.map((item) => (
                        <MDBCard className='col-lg-3 col-md-4 col-sm-6 col-12 '>
                            <MDBCardImage src={item.img} position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardText>
                                    <h3>{item.title}</h3>
                                    <p><b>Price</b>{item.price}</p>
                                </MDBCardText>
                                <Link to='/cart' onClick={()=>dispatch(addToCart(item))}> <MDBBtn>Add To Cart</MDBBtn></Link>
                            </MDBCardBody>
                        </MDBCard>
                    ))
                }


            </div>
        </div>


    )
}

export default Card