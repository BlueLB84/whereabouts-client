import * as actions from '../actions';

const initialState = {
	bulletins: [{
		text: "This is a bulletin post test."
	},
	{
		text: "This is another bulletin for your viewing."
	}],
    whereabouts: [{
        usrname: "Jo John",
        location: "Room 22",
        activity: "Weekly design meeting",
        imgSrc: "https://picsum.photos/150"
    },
    {
        usrname: "Betty Banana",
        location: "Austin, TX",
        activity: "React Hackathon",
        imgSrc: "https://picsum.photos/150"
    }],
    user: {
        teams: [
            {
                teamName: "Best Team Ever",
                imgSrc: "https://instagram.fbed1-1.fna.fbcdn.net/vp/6374ff5e592b546c77d70d0f6f2c56b6/5B1D220B/t51.2885-15/sh0.08/e35/p640x640/26863377_1950373121879732_4411844913881153536_n.jpg"
            },
            {
                teamName: "Also The Best Team Ever",
                imgSrc: "https://instagram.fbed1-1.fna.fbcdn.net/vp/d4316384417239f8254d46c7519f2ffe/5B0D3303/t51.2885-15/sh0.08/e35/p640x640/26153198_133299754137879_6013809235014451200_n.jpg"
            }
        ]
    }
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