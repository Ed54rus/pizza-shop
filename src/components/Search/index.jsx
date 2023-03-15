import React from 'react';
import { SearchContext } from '../../App';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import styles from './Search.module.scss';

const Search = () => {
	const { searchValue, setSearchValue } = React.useContext(SearchContext);
	return (
		<div className={styles.root}>
			<HiOutlineSearch className={styles.iconSearch} />
			<input
				className={styles.input}
				type='text'
				onChange={(event) => setSearchValue(event.target.value)}
				value={searchValue}
				placeholder='Поиск пиццы...'
			/>
			{searchValue && <IoMdClose className={styles.iconClear} onClick={() => setSearchValue('')} />}
		</div>
	);
};

export default Search;
