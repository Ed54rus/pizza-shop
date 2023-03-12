import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/pizzaBlock";
import Skeleton from "./components/pizzaBlock/Skeleton";
import "./scss/app.scss";

const App = () => {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		fetch("https://640d9ee91a18a5db837b0858.mockapi.io/items")
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{isLoading
							? [...new Array(8)].map((_, id) => <Skeleton key={id} />)
							: items.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
