import { NavLink } from 'react-router-dom'

function CategoriesMenu ({ menuItems }) {
  return (
    <ul className='menu menu-horizontal bg-base-100 rounded-box'>
      {
        menuItems.map((menuItem) => {
          return (
            <li
              key={`categories-menu-${menuItem.route}`}
            ><NavLink to={`/category/${menuItem.route}`}>{menuItem.title}</NavLink>
            </li>
          )
        })
      }
    </ul>
  )
}

export default CategoriesMenu