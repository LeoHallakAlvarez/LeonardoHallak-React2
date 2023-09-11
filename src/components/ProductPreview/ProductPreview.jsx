import { useState } from 'react'

// Componentes
import ProductImage from '../ProductImage/ProductImage'

function ProductPreview ({ id, name, images }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProductImage
        id={id}
        src={images[0]}
        alt={name}
      />
      <ProductImage
        id={id}
        src={images[1]}
        alt={name}
        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default ProductPreview