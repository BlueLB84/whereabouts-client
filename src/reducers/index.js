import * as actions from '../actions';

const initialState = {
	bulletins: [{
		text: "This is a bulletin post test."
	},
	{
		text: "This is another bulletin for your viewing."
	}],
    whereabouts: [{
        location: "Room 22",
        activity: "Weekly design meeting"
    },
    {
        location: "Austin, TX",
        activity: "React Hackathon"
    }]
};

export const whereaboutsReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_BULLETIN) {
    	return Object.assign({}, state, {
    		bulletins: [...state.bulletins, {
    			text: action.text
    		}]
    	})
    } else if (action.type === actions.ADD_WHEREABOUTS) {
        return Object.assign({}, state, {
            whereabouts: [...state.whereabouts, {
                location: action.location,
                activity: action.activity
            }]
        })
    }
    return state;
};