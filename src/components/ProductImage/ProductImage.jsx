import clsx from 'clsx'
import { PUBLIC_IMG_PATH } from '../../utils/globalConstants'

function ProductImage ({ id, src, alt, ...props }) {
  const imagePath = `${PUBLIC_IMG_PATH.productImages}/${id}-${src}`

  return (
    <figure className={clsx('w-full', props.className)}>
      <img
        className='w-full rounded-xl'
        src={imagePath}
        alt={alt}
        title={alt}
      />
    </figure>
  )
}

export default ProductImage