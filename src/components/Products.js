import React, { Component } from 'react'
import '../index.css'
import formatCurrency from '../utils'
import { Fade, Zoom } from 'react-reveal'
import Modal from 'react-modal'

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null
        }
    }

    openModal = (product) => {
        this.setState({
            product: product
        })
    }

    closeModal = () => {
        this.setState({
            product: null
        })
    }

    render() {
        const { product } = this.state
        return (
            <div>
                <Fade bottom cascsde>
                    <ul className='products'>
                        {this.props.products.map((product) => (
                            <li key={product._id}>
                                <div className='product'>
                                    <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                                        <img src={product.image} alt="..."></img>
                                        <p>{product.title}</p>

                                    </a>
                                    <div className='product-price'>
                                        <div>{formatCurrency(product.price)}</div>
                                        <button className='button primary' onClick={() => this.props.addToCart(product)}>Add To Cart</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
                {
                    product && <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <Zoom>
                            <button onClick={this.closeModal} className='close-modal'>x</button>
                            <div className='product-details'>
                                <img src={product.image} alt='...' />
                                <div className='product-details-description'>
                                    <p><strong>{product.title}</strong></p>
                                    <p>{product.description}</p>
                                    <p>Available Sizes
                                        {product.availableSizes.map((size) => (
                                            <span>{" "}
                                                <button className='button'>
                                                    {size}
                                                </button>
                                            </span>
                                        ))}
                                    </p> 
                                    <div className='product-price'>
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button className='button primary' onClick={()=>{
                                            this.props.addToCart(product)
                                            this.closeModal()}}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                }
            </div>
        )
    }
}
