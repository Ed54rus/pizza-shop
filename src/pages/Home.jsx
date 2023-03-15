import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/pizzaBlock";
import Skeleton from "../components/pizzaBlock/Skeleton";

const Home = () => {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [categoryId, setCategoryId] = React.useState(0);
	const [sortType, setSortType] = React.useState({ name: "популярности", sortProperty: "rating" });
	const [sortBy, setSortBy] = React.useState(true);
	React.useEffect(() => {
		setIsLoading(true);

		fetch(
			`https://640d9ee91a18a5db837b0858.mockapi.io/items?${
				categoryId > 0 ? `category=${categoryId}` : ``
			}&sortBy=${sortType.sortProperty}&order=${sortBy ? `asc` : `desc`}`
		)
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType, sortBy]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
				<Sort
					value={sortType}
					onChangeSort={(id) => setSortType(id)}
					sortUp={sortBy}
					onChangeSortBy={() => setSortBy(!sortBy)}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(8)].map((_, id) => <Skeleton key={id} />)
					: items.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
			</div>
		</div>
	);
};

export default Home;
