import React, { Component } from 'react'
import '../index.css'
import formatCurrency from '../utils'

export default class Cart extends Component {
  render() {
    const {cartItems} = this.props
    console.log(cartItems.length)
    return (
        <>
      <div>
        {cartItems.length===0?
        <div className='cart cart-header'>Your Cart Is empty</div>:
        <div className='cart cart-header'>You have {cartItems.length} items in your cart.</div>
        }
      </div>
      <div className='cart'>
        <ul className='cart-items'>
            {cartItems.map(item=>(
                <li key={item._id}>
                    <div>
                        <img src={item.image} alt='...'/>
                    </div>
                    <div>
                        <div>{item.title}</div>
                        <div className='right'>
                        {formatCurrency(item.price)} x {item.count}{"   "}
                        <button className='button' onClick={()=>this.props.removeFromCart(item)}>Remove</button>
                        </div>
                        
                    </div>
                </li>
            ))}
        </ul>
        <div className='cart'>
            <div className='total'>
                {cartItems.length>0?
                <>
                <div>Total:{" " + formatCurrency(cartItems.reduce((a,b)=>a+ b.price * b.count,0))}</div><br/>
                <button className='button primary'>Proceed</button>
                </>:null
                }
            </div>
        </div>
      </div>
      </>
    )
  }
}
