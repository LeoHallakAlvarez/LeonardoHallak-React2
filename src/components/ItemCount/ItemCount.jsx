import { useState } from 'react'
import clsx from 'clsx'
import { removeNumberInputControls } from '../../styles/styleUtils'

function ItemCount ({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    if (count > 1) setCount(prevCount => prevCount - 1)
  }

  return (
    <div className='relative w-40'>
      <button
        className='absolute top-0 left-0 w-6 rounded-r-none btn btn-primary'
        onClick={decrement}
      >-
      </button>
      <input
        type='number'
        min={1}
        max={stock}
        step={1}
        className={clsx('w-full px-12 text-center input input-bordered arrow-hide', removeNumberInputControls)}
        value={count}
        readOnly
      />
      <button
        className='absolute top-0 right-0 w-6 rounded-l-none btn btn-primary'
        onClick={increment}
      >+
      </button>
      <button
        className='w-full mt-2 btn btn-md btn-primary'
        onClick={() => onAdd(count)}
        disabled={!stock}
      >
        Agregar
        <span className='ml-2'>
          <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' /></svg>
        </span>
      </button>

    </div>
  )
}

export default ItemCount