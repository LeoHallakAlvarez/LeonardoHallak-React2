import React from 'react'
import { Link } from 'react-router-dom'

// Data
import { CATEGORIES } from '../../utils/globalConstants'

// Componentes
import CartWidget from '../CartWidget/CartWidget'
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu'

const cart = {
  cantItems: 2,
  items: [
    {
      id: 1,
      title: 'Celular 1',
      price: 429,
      quantity: 1
    },
    {
      id: 2,
      title: 'Celular 2',
      price: 570,
      quantity: 1
    }
  ],
  subTotal: 999
}

function NavBar () {
  return (
    <div className='navbar bg-base-100'>

      {/* Logo */}
      <div className='flex-none'>
        <Link
          className='text-xl normal-case btn btn-ghost'
          to='/'
        >
          tuPortátil
          <span
            className='block mx-1 text-xs text-center'
          >TECHSTORE
          </span>
        </Link>
      </div>

      {/* Menu */}
      <div className='justify-between flex-1'>
        <div />
        <CategoriesMenu menuItems={CATEGORIES} />
        <CartWidget cart={cart} />
      </div>
    </div>
  )
}

export default NavBar