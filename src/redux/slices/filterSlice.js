import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	sortType: { name: 'популярности', property: 'rating' },
	sortByAsc: true,
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSortType(state, action) {
			state.sortType = action.payload;
		},
		setSortByAsc(state, action) {
			state.sortByAsc = action.payload;
		},
	},
});

export const { setCategoryId, setSortType, setSortByAsc } = filterSlice.actions;

export default filterSlice.reducer;
