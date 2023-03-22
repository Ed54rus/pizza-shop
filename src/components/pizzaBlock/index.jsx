import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

import { BiPlus } from 'react-icons/bi';

const PizzaBlock = ({ id, title, price, imageUrl, sizes, types }) => {
	const dispatch = useDispatch();
	const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
	const [activeType, setActiveType] = React.useState(0);
	const [activeSize, setActiveSize] = React.useState(0);
	const typeTitles = ['тонкое', 'традиционное'];

	const addedCount = cartItem ? cartItem.count : 0;

	const onClickAdd = () => {
		const item = {
			id,
			title,
			price,
			imageUrl,
			type: typeTitles[activeType],
			size: sizes[activeSize],
		};
		dispatch(addItem(item));
	};

	return (
		<div className='pizza-block'>
			<img className='pizza-block__image' src={imageUrl} alt={title} />
			<h4 className='pizza-block__title'>{title}</h4>
			<div className='pizza-block__selector'>
				<ul>
					{types.map((type, id) => (
						<li
							className={activeType === id ? 'active' : ''}
							onClick={() => setActiveType(id)}
							key={id}
						>
							{typeTitles[type]}
						</li>
					))}
				</ul>
				<ul>
					{sizes.map((size, id) => (
						<li
							className={activeSize === id ? 'active' : ''}
							onClick={() => setActiveSize(id)}
							key={id}
						>
							{size} см.
						</li>
					))}
				</ul>
			</div>
			<div className='pizza-block__bottom'>
				<div className='pizza-block__price'>от {price} ₽</div>
				<button className='button button--outline button--add' onClick={onClickAdd}>
					<BiPlus />
					<span>Добавить</span>
					{addedCount > 0 && <i>{addedCount}</i>}
				</button>
			</div>
		</div>
	);
};

export default PizzaBlock;
