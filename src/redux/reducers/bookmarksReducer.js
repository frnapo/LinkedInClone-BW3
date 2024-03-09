import {
	ADD_BOOKMARKED_JOB,
	REMOVE_BOOKMARKED_JOB,
} from "../actions/jobActions";

const bookmarksReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_BOOKMARKED_JOB:
			return [...state, { jobId: action.payload.jobId, isJob: true }];
		case REMOVE_BOOKMARKED_JOB:
			return state.filter((bookmark) => bookmark.jobId !== action.payload);
		default:
			return state;
	}
};

export default bookmarksReducer;
