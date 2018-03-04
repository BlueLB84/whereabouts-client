
import { API_BASE_URL } from './../config';
import axios from 'axios';

export const ADD_TEAM = 'ADD_TEAM';
export const addTeam = (name, motto, imgSrc, bulletins, users) => ({
	type: ADD_TEAM,
	teamId : {
		name,
		motto,
		imgSrc,
		bulletins,
		users
	}
});

export const ADD_USER = 'ADD_USER';
export const addUser = (userId, usrname, email, imgSrc, location, activity) => ({
	type: ADD_USER,
	userId : {
		usrname,
		email,
		imgSrc,
		whereabouts: {
			location,
			activity
		}
	}
});

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (userId, usrname, email, imgSrc) => ({
	type: ADD_USER,
	userId : {
		usrname,
		email,
		imgSrc
	}
});

export const ADD_WHEREABOUTS_REQUEST = 'ADD_WHEREABOUTS_REQUEST';
export const addWhereaboutsRequest = () => ({
	type: ADD_WHEREABOUTS_REQUEST,
	whereaboutsLoading: true
});

export const ADD_WHEREABOUTS_SUCCESS = 'ADD_WHEREABOUTS_SUCCESS';
export const addWhereaboutsSuccess = data => ({
	type: ADD_WHEREABOUTS_SUCCESS,
	whereabouts: data.whereabouts,
	userId: data.userId,
	whereaboutsLoading: false
});

export const ADD_WHEREABOUTS_ERROR = 'ADD_WHEREABOUTS_ERROR';
export const addWhereaboutsError = err => ({
	type: ADD_WHEREABOUTS_ERROR,
	err
});

export const addWhereaboutsAxios = (location, activity, userId) => dispatch => {
	dispatch(addWhereaboutsRequest());
	const whereabouts = {
		location,
		activity
	};
	axios.put(`${API_BASE_URL}/users/${userId}`, { whereabouts, userId })
	.then(res => {
		if (res.status !== 202) {
			return Promise.reject(res.statusText);
		}
		return res;
	})
	.then(res => {
		dispatch(addWhereaboutsSuccess(res.data));
	})
	.catch(err => {
		console.error(err);
		dispatch(addWhereaboutsError(err));
	})
};

export const ADD_BULLETIN_REQUEST = 'ADD_BULLETIN_REQUEST';
export const addBulletinRequest = () => ({
	type: ADD_BULLETIN_REQUEST,
	bulletinLoading: true
});

export const ADD_BULLETIN_SUCCESS = 'ADD_BULLETIN_SUCCESS';
export const addBulletinSuccess = data => ({
	type: ADD_BULLETIN_SUCCESS,
	bulletins: data.bulletins,
	teamId: data.teamId,
	bulletinLoading: false
});

export const ADD_BULLETIN_ERROR = 'ADD_BULLETIN_ERROR';
export const addBulletinError = err => ({
	type: ADD_BULLETIN_ERROR,
	err
});

export const addBulletinAxios = (text, teamId, userId) => dispatch => {
	dispatch(addBulletinRequest());
	const bulletins = {
		userId,
		text
	};
	axios.put(`${API_BASE_URL}/teams/${teamId}`, { bulletins, teamId })
	.then(res => {
		if (res.status !== 202) {
			return Promise.reject(res.statusText);
		}
		return res;
	})
	.then(res => {
		dispatch(addBulletinSuccess(res.data));
	})
	.catch(err => {
		console.error(err);
		dispatch(addBulletinError(err));
	})
};


// export const LOGOUT_USER = 'LOGOUT_USER';
// export const logoutUser = () => ({
// 	type: LOGOUT_USER,
// 	currentUser: null
// });

// export const CHECK_USER_EXISTS_REQUEST = 'CHECK_USER_EXISTS_REQUEST';
// export const checkUserExistsRequest = () => ({
// 	type: CHECK_USER_EXISTS_REQUEST,
// 	checkUserLoading: true
// });

// export const CHECK_USER_EXISTS_SUCCESS = 'CHECK_USER_EXISTS_SUCCESS';
// export const checkUserExistsSuccess = data => ({
// 	type: CHECK_USER_EXISTS_SUCCESS,
// 	currentUser: data,
// 	checkUserLoading: false
// });

// export const CHECK_USER_EXISTS_ERROR = 'CHECK_USER_EXISTS_ERROR';
// export const checkUserExistsError = err => ({
// 	type: CHECK_USER_EXISTS_ERROR,
// 	err
// });

// export const checkUserExists = (userUID) => dispatch => {
// 	dispatch(checkUserExistsRequest());
// 	axios.get(`${API_BASE_URL}/login/${userUID}`)
// 	.then(res => {
// 		dispatch(checkUserExistsSuccess(res.data));
// 	})
// 	.catch(err => {
// 		console.error(err);
// 		dispatch(checkUserExistsError(err));
// 	})
// };

