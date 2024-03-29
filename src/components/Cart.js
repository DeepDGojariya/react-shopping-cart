import React, { Component } from 'react'
import '../index.css'
import formatCurrency from '../utils'
import { Fade } from 'react-reveal'

export default class Cart extends Component {

    constructor(props){
        super(props)
        this.state = {
            showCheckout:false,
            name:"",
            email:"",
            address:""
        }
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };

    createOrder = (event)=>{
        event.preventDefault();
        const order = {
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            cartItems:this.props.cartItems
        }
        console.log(order)
        this.props.createOrder(order)//parent should save data

    }

    


    render() {
        const {cartItems} = this.props
        
        return (
            <>
        <div>
            {cartItems.length===0?
            <div className='cart cart-header'>Your Cart Is empty</div>:
            <div className='cart cart-header'>You have {cartItems.length} items in your cart.</div>
            }
        </div>
        <div className='cart'>
        <Fade left cascade>
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
            </Fade>
            <div className='cart'>
                <Fade left cascade>
                <div className='total'>
                    {cartItems.length>0?
                    <>
                    <div>Total:{" " + formatCurrency(cartItems.reduce((a,b)=>a+ b.price * b.count,0))}</div><br/>
                    <button className='button primary' onClick={()=>this.setState({showCheckout:true})}>Proceed</button>
                    </>:null
                    }
                </div>
                </Fade>
            </div>
            <div>
                {this.state.showCheckout && cartItems.length>0 &&(
                    <div className='cart'>
                    <Fade right>
                        <form onSubmit={this.createOrder}>
                            <ul className='form-container'>
                                <li>
                                    <label>Email</label>
                                    <input name="email" type="email" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <label>Name</label>
                                    <input name="name" type="text" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <label>Address</label>
                                    <input name="address" type="text" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <button type="submit" className='button primary'>Checkout</button>
                                </li>
                                
                            </ul>
                        </form>
                        </Fade>
                    </div>
                )}
            </div>
        </div>
        </>
        )
    }
}
