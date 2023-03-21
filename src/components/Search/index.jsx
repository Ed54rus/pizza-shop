import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import styles from './Search.module.scss';

const Search = () => {
	const [value, setValue] = React.useState('');
	const { setSearchValue } = React.useContext(SearchContext);
	const inputSearch = React.useRef();

	const onClickClear = () => {
		setValue('');
		setSearchValue('');
		inputSearch.current.focus();
	};

	const updateSearchValue = React.useCallback(
		debounce((inputValue) => {
			setSearchValue(inputValue);
			console.log(inputValue);
		}, 400),
		[]
	);

	const onChangeInput = (event) => {
		setValue(event.target.value);
		updateSearchValue(event.target.value);
	};

	return (
		<div className={styles.root}>
			<HiOutlineSearch className={styles.iconSearch} />
			<input
				className={styles.input}
				ref={inputSearch}
				type='text'
				onChange={onChangeInput}
				value={value}
				placeholder='Поиск пиццы...'
			/>
			{value && <IoMdClose className={styles.iconClear} onClick={onClickClear} />}
		</div>
	);
};

export default Search;
