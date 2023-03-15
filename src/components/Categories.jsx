import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';

const Categories = ({ value, onChangeCategory }) => {
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	return (
		<div className='categories'>
			<ul>
				<Swiper
					slidesPerView={'auto'}
					spaceBetween={10}
					scrollbar={{
						hide: true,
					}}
					modules={[Scrollbar]}
				>
					{categories.map((category, id) => (
						<SwiperSlide key={id}>
							<li className={value === id ? 'active' : ''} onClick={() => onChangeCategory(id)}>
								{category}
							</li>
						</SwiperSlide>
					))}
				</Swiper>
			</ul>
		</div>
	);
};

export default Categories;
