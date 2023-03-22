import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType, setSortByAsc } from '../redux/slices/filterSlice';

export const sortList = [
	{ name: 'популярности', property: 'rating' },
	{ name: 'цене', property: 'price' },
	{ name: 'названию', property: 'title' },
];

export const Sort = () => {
	const dispatch = useDispatch();
	const { sortType, sortByAsc } = useSelector((state) => state.filter);
	const [toggleSortPopup, setToggleSortPopup] = React.useState(false);
	const sortRef = React.useRef();

	const onClickSortName = (obj) => {
		dispatch(setSortType(obj));
		setToggleSortPopup(false);
	};
	const onChangeSortByAsc = () => {
		dispatch(setSortByAsc(!sortByAsc));
	};

	React.useEffect(() => {
		const handleClickOutsideSort = (event) => {
			if (!event.path.includes(sortRef.current)) {
				setToggleSortPopup(false);
			}
		};
		document.body.addEventListener('click', handleClickOutsideSort);
		return () => document.body.removeEventListener('click', handleClickOutsideSort);
	}, []);

	return (
		<div className='sort' ref={sortRef}>
			<div className='sort__label'>
				<div
					className={sortByAsc ? 'sort__type' : 'sort__type active'}
					onClick={() => onChangeSortByAsc()}
				>
					<svg
						width='10'
						height='6'
						viewBox='0 0 10 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
							fill='#2C2C2C'
						/>
					</svg>
				</div>
				<b>Сортировка по:</b>
				<span onClick={() => setToggleSortPopup(!toggleSortPopup)}>{sortType.name}</span>
			</div>
			{toggleSortPopup && (
				<div className='sort__popup'>
					<ul>
						{sortList.map((obj, id) => (
							<li
								className={sortType.property === obj.property ? 'active' : ''}
								onClick={() => onClickSortName(obj)}
								key={id}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
