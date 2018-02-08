export const ADD_BULLETIN = 'ADD_BULLETIN';
export const addBulletin = (text, team) => ({
	type: ADD_BULLETIN,
	text,
	team
});

export const ADD_WHEREABOUTS = 'ADD_WHEREABOUTS';
export const addWhereabouts = (location, activity, whereaboutsIndex) => ({
	type: ADD_WHEREABOUTS,
	location,
	activity,
	whereaboutsIndex
});

