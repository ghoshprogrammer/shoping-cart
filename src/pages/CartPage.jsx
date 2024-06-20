import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,deleteFun,getCartTotal } from '../features/cartSlice'


const CartPage = () => {
  const { cart,totalPrice,totalQuantity } = useSelector((state) => state.cart)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])
  return (
    <div className='cart container' style={{ marginTop: "40px" , boxShadow:"2px 2px 4px gray", display:"flex",justifyContent:'space-between' }}>
      <div className="carts" style={{width:"60%"}}>
        {
          cart && cart.map((item) => {
            return (
              <>
                <div className='d-flex justify-content-between' style={{marginBottom:"20px", padding:"20px"}} >
                  <div className='content d-flex '>
                    <div className="img-content">
                      <img src={item.img} alt="" style={{ width: "70px", height: "70px", marginRight: "20px" }} />
                    </div>
                    <div className="text-content">
                      {item.title}
                    </div>
                  </div>
                  <div className='quantity-content' style={{ display: "flex", justifyContent: "space-between",  alignItems: 'center' }}>
                    <p style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', columnGap: "2rem",marginRight:"20px" }}><span  style={{ padding: "5px 27px", background: "blue", color: "white", fontSize: "33px" }} onClick={()=>dispatch(decrement(item.id))}>-</span>
                     <span width="50px">{item.quantity}</span> <span style={{ padding: "5px 27px", background: "blue", color: "white", fontSize: "33px" }} onClick={()=>dispatch(increment(item.id))}>+</span></p>
                    <h5 style={{width:"100px"}}>{item.price * item.quantity}</h5>
                  </div>
                  <div>
                  <i class="fa-solid fa-trash-can" onClick={()=>dispatch(deleteFun(item.id))}  style={{fontSize:'33px',color:"red"}}></i>
                  </div>
                </div>
              </>
            )
          })
        }

      </div>

      <div className="summary" style={{width:"25%",padding:"30px 20px",background:'blue',borderRadius:'7px', height:'250px', marginTop:'30px',color:"white"}}>
         <h3>Summary</h3>
         <ul style={{listStyle:"none",}}>
          <li  style={{ display: "flex", justifyContent: "space-between",  alignItems: 'center' }}><p>Total Quantity</p> <p>{totalQuantity}</p></li>
          <li  style={{ display: "flex", justifyContent: "space-between",  alignItems: 'center' }}><p>Total amount</p><p>{totalPrice}</p></li>
         </ul>
         <button style={{width:"100%",padding:"10px 0px",border:"none"}}>CHECKOUT</button>
      </div>
    </div>

  )
}

export default CartPage