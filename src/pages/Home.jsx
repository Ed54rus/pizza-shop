import React from 'react';
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
		.filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
		.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />);

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	React.useEffect(() => {
		setIsLoading(true);

		fetch(
			`https://640d9ee91a18a5db837b0858.mockapi.io/items?${
				categoryId > 0 ? `category=${categoryId}` : ``
			}&sortBy=${sortType.property}&order=${sortByAsc ? `asc` : `desc`}`
		)
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType, sortByAsc]);

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
