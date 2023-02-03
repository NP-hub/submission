import React from 'react'
import './menu.css'

// var menuDescription = 'Our exciting menu of delecious desserts'

export const Menu = () => (
  <section class='container content-section'>
    <h2 class='section-header'>ITEMS</h2>
    <div class='shop-items'>
      <div class='shop-item'>
        <span class='shop-item-title'>Macaroons</span>
        <img class='shop-item-image' src={require('../img/macaroons.jpg')} />
        <div class='shop-item-details'>
          <span class='shop-item-price'>Rs 200</span>
          <button class='btn btn-primary shop-item-button' type='button'>
            ADD TO CART
          </button>
        </div>
      </div>
      <div class='shop-item'>
        <span class='shop-item-title'>Cupcakes</span>
        <img class='shop-item-image' src={require('../img/cupcake.png')} />
        <div class='shop-item-details'>
          <span class='shop-item-price'>Rs 200</span>
          <button class='btn btn-primary shop-item-button' type='button'>
            ADD TO CART
          </button>
        </div>
      </div>
      <div class='shop-item'>
        <span class='shop-item-title'>Croissant</span>
        <img class='shop-item-image' src={require('../img/croissant.png')} />
        <div class='shop-item-details'>
          <span class='shop-item-price'>Rs 150</span>
          <button class='btn btn-primary shop-item-button' type='button'>
            ADD TO CART
          </button>
        </div>
      </div>
      <div class='shop-item'>
        <span class='shop-item-title'>Chocolate butterscotch cake</span>
        <img class='shop-item-image' src={require('../img/choc_scotch.png')} />
        <div class='shop-item-details'>
          <span class='shop-item-price'>Rs 300</span>
          <button class='btn btn-primary shop-item-button' type='button'>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </section>
)
