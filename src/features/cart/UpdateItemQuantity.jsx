import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux';
import { decraseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();
  return (
    <div className='flex items-center gap-2 md:gap-3'>
        <Button onClick={() => dispatch(decraseItemQuantity(pizzaId))} type="round">-</Button>
        <span className='text-sm font-medium'> {currentQuantity} </span> 
        <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))} type="round">+</Button>

    </div>
  )
}
