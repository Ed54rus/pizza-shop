import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/pizzaBlock';
import Skeleton from '../components/pizzaBlock/Skeleton';

import { SearchContext } from '../App';

const Home = () => {
	const dispatch = useDispatch();
	const { categoryId, sortType, sortByAsc } = useSelector((state) => state.filter);

	const { searchValue } = React.useContext(SearchContext);
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	const skeleton = [...new Array(8)].map((_, id) => <Skeleton key={id} />);
	const pizzas = items
		// .filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
		.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />);

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	React.useEffect(() => {
		setIsLoading(true);

		const category = categoryId > 0 ? `&category=${categoryId}` : ``;
		const sortBy = `&sortBy=${sortType.property}`;
		const order = sortByAsc ? `&order=asc` : `&order=desc`;
		const search = searchValue ? `&search=${searchValue}` : '';

		axios
			.get(`https://640d9ee91a18a5db837b0858.mockapi.io/items?${category}${sortBy}${order}${search}`)
			.then((res) => {
				setItems(res.data);
				setIsLoading(false);
			});

		window.scrollTo(0, 0);
	}, [categoryId, sortType, sortByAsc, searchValue]);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>{isLoading ? skeleton : pizzas}</div>
		</div>
	);
};

export default Home;
