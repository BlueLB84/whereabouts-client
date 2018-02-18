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

export const ADD_BULLETIN = 'ADD_BULLETIN';
export const addBulletin = (text, teamId, userId) => ({
	type: ADD_BULLETIN,
	teamId,
	bulletins: {
		userId,
		text
	}
});

export const ADD_WHEREABOUTS = 'ADD_WHEREABOUTS';
export const addWhereabouts = (location, activity, userId=0) => ({
	type: ADD_WHEREABOUTS,
	userId : {
		whereabouts: {
		location,
		activity
		}
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

