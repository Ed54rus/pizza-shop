import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../redux/slices/cartSlice';

import CartItem from '../components/CartItem';
import CartEmpty from '../pages/CartEmpty';

import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import { SlArrowLeft } from 'react-icons/sl';

const Cart = () => {
	const dispatch = useDispatch();
	const { totalPrice, items } = useSelector((state) => state.cart);
	const totalCount = items.reduce((sum, item) => sum + item.count, 0);

	const onClickClear = () => {
		dispatch(clearItems());
	};

	if (!totalPrice) {
		return <CartEmpty />;
	}
	return (
		<div className='container container--cart'>
			<div className='cart'>
				<div className='cart__top'>
					<h2 className='content__title'>
						<BsCart3 />
						Корзина
					</h2>
					<div className='cart__clear' onClick={onClickClear}>
						<HiOutlineTrash />
						<span>Очистить корзину</span>
					</div>
				</div>
				<div className='cart__items'>
					{items.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
				</div>
				<div className='cart__bottom'>
					<div className='cart__bottom-details'>
						<span>
							Всего пицц: <b>{totalCount} шт.</b>
						</span>
						<span>
							Сумма заказа: <b>{totalPrice} ₽</b>
						</span>
					</div>
					<div className='cart__bottom-buttons'>
						<Link to='/' className='button button--outline button--add go-back-btn'>
							<SlArrowLeft />
							<span>Вернуться назад</span>
						</Link>
						<div className='button pay-btn'>
							<span>Оплатить сейчас</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
