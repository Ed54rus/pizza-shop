import React from 'react';
import { useDispatch } from 'react-redux';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

const CartItem = ({ id, title, type, size, price, count, imageUrl }) => {
	const dispatch = useDispatch();
	const onClickPlus = () => {
		dispatch(addItem({ id }));
	};
	const onClickMinus = () => {
		dispatch(minusItem({ id }));
	};

	const onClickRemove = () => {
		dispatch(removeItem({id}));
	};
	return (
		<div className='cart__item'>
			<div className='cart__item-img'>
				<img className='pizza-block__image' src={imageUrl} alt={title} />
			</div>
			<div className='cart__item-info'>
				<h3>{title}</h3>
				<p>
					{type} тесто, {size} см.
				</p>
			</div>
			<div className='cart__item-count'>
				<div
					className='button button--outline button--circle cart__item-count-minus'
					onClick={onClickMinus}
				>
					<BiMinus />
				</div>
				<b>{count}</b>
				<div
					className='button button--outline button--circle cart__item-count-plus'
					onClick={onClickPlus}
				>
					<BiPlus />
				</div>
			</div>
			<div className='cart__item-price'>
				<b>{price * count} ₽</b>
			</div>
			<div className='cart__item-remove' onClick={onClickRemove}>
				<div className='button button--outline button--circle'>
					<BiPlus />
				</div>
			</div>
		</div>
	);
};

export default CartItem;
