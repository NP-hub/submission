import React, { Component } from 'react'
import './intro.css'

const purchaseClicked = () => {
  alert('Thank you for your purchase')
}

export class Intro extends Component {
  render() {
    return (
      <div>
        <h2 class='section-header'>CART</h2>
        <div class='cart-row'>
          <span class='cart-item cart-header cart-column'>ITEM</span>
          <span class='cart-price cart-header cart-column'>PRICE</span>
          <span class='cart-quantity cart-header cart-column'>QUANTITY</span>
        </div>
        <div class='cart-items'>
          <div class='cart-row'>
            <div class='cart-item cart-column'>
              <img
                class='cart-item-image'
                src={require('../img/macaroons.jpg')}
                width='100'
                height='100'
              />
              <span class='cart-item-title'>Macaroons</span>
            </div>
            <span class='cart-price cart-column'>Rs 200</span>
            <div class='cart-quantity cart-column'>
              <input class='cart-quantity-input' type='number' value='1' />
              <button class='btn btn-danger' type='button'>
                REMOVE
              </button>
            </div>
          </div>
          <div class='cart-row'>
            <div class='cart-item cart-column'>
              <img
                class='cart-item-image'
                src={require('../img/croissant.png')}
                width='100'
                height='100'
              />
              <span class='cart-item-title'>Croissant</span>
            </div>
            <span class='cart-price cart-column'>Rs 150</span>
            <div class='cart-quantity cart-column'>
              <input class='cart-quantity-input' type='number' value='2' />
              <button class='btn btn-danger' type='button'>
                REMOVE
              </button>
            </div>
          </div>
        </div>
        <div class='cart-total'>
          <strong class='cart-total-title'>Total</strong>
          <span class='cart-total-price'>Rs 350</span>
        </div>
        <button
          class='btn btn-primary btn-purchase'
          type='button'
          onClick={this.purchaseClicked}
        >
          PURCHASE
        </button>
      </div>
    )
  }
}
