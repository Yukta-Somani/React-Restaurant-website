import React from 'react'
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

function Products() {
  return (
    <div id='products'>
        <h1> CHOOSE AND ENJOY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptatum nobis! Harum illo iusto nobis? </p>
        <div className='a-container'>
            <Productbox  image={pimage1} title="Luger Burger"/>
            <Productbox  image={pimage2} title="Le Pigeon Burger"/>
            <Productbox  image={pimage1} title="Luger Burger"/>
        </div>
        
    </div>
  )
}

export default Products
