export const ADD_BULLETIN = 'ADD_BULLETIN';
export const addBulletin = (text, team, userId=0) => ({
	type: ADD_BULLETIN,
	bulletin: {
		userId,
		text,
		team
	}
});

export const ADD_WHEREABOUTS = 'ADD_WHEREABOUTS';
export const addWhereabouts = (location, activity, userId=0) => ({
	type: ADD_WHEREABOUTS,
	userId,
	user: {
		whereabouts: {
			location,
			activity
		}
	}
});

