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

export const ADD_WHEREABOUTS = 'ADD_WHEREABOUTS';
export const addWhereabouts = (location, activity, userId) => ({
	type: ADD_WHEREABOUTS,
	userId,
	whereabouts: {
		location,
		activity
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

// USERS API ACTIONS
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const fetchUsersRequest = () => ({
	type: FETCH_USERS_REQUEST,
	userLoading: true
}); 

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const fetchUsersSuccess = users => ({
	type: FETCH_USERS_SUCCESS,
	users,
	userLoading: false
});

export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const fetchUsersError = err => ({
	type: FETCH_USERS_ERROR,
	err
});

export const fetchUsers = () => dispatch => {
	dispatch(fetchUsersRequest());
	fetch(`${API_BASE_URL}/users`)
	    .then(res => {
	        if (!res.ok) {
	            return Promise.reject(res.statusText);
	        }
	        return res.json();
	    })
	    .then(data => {
	        dispatch(fetchUsersSuccess(data.users));
	    })
	    .catch(err => {
	    	console.error(err);
	    	dispatch(fetchUsersError(err));
	    });
};

// TEAMS API ACTIONS

export const FETCH_TEAMS_REQUEST = 'FETCH_TEAMS_REQUEST';
export const fetchTeamsRequest = () => ({
	type: FETCH_TEAMS_REQUEST,
	teamLoading: true
}); 

export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const fetchTeamsSuccess = teams => ({
	type: FETCH_TEAMS_SUCCESS,
	teams,
	teamLoading: false
});

export const FETCH_TEAMS_ERROR = 'FETCH_TEAMS_ERROR';
export const fetchTeamsError = err => ({
	type: FETCH_TEAMS_ERROR,
	err
});

export const fetchTeams = () => dispatch => {
	dispatch(fetchTeamsRequest());
	fetch(`${API_BASE_URL}/teams`)
	    .then(res => {
	        if (!res.ok) {
	            return Promise.reject(res.statusText);
	        }
	        return res.json();
	    })
	    .then(data => {
	        dispatch(fetchTeamsSuccess(data.teams));
	    })
	    .catch(err => {
	    	console.error(err);
	    	dispatch(fetchTeamsError(err));
	    });
};

