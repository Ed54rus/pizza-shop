import React, { useState } from "react";

const Categories = () => {
	const [activeCategory, setActiveCategory] = useState(0);

	const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];



	return (
		<div className="categories">
			<ul>
				{categories.map((category, id) => (
					<li
						className={activeCategory === id ? "active" : ""}
						onClick={() => setActiveCategory(id)}
						key={id}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
