import * as actions from '../actions';

const initialState = {
	bulletins: [
        {
            team: 0,
            user: 0,
            text: "This is an important message from an important person on your team."
    	},
    	{
            team: 1,
            user: 1,
    		text: "This is another important message from an yet another semi-important person on your team."
    	},{
            team: 0,
            user: 2,
            text: "Annual bonus will be distributed this Friday."
        },{
            team: 1,
            user: 3,
            text: "Monthly design team meeting has been moved to March 1st."
        }
    ],

    users: [
        {
            userId: 0,
            usrname: "Yoothee Yuser",
            imgSrc: "https://picsum.photos/150",
            teams: [0, 1],
            whereabouts: [{location: "A secret location", activity: "A secret project"}]
        },{
            userId: 1,
            usrname: "Robby Raspberry",
            imgSrc: "https://picsum.photos/150",
            teams: [0],
            whereabouts: [{location: "Room 22", activity: "Weekly design meeting"}]
        },{
            userId: 2,
            usrname: "Betty Banana",
            imgSrc: "https://picsum.photos/150",
            teams: [0],
            whereabouts: [{location: "Austin, TX", activity: "React Hackathon"}]
        },{
            userId: 3,
            usrname: "Suzy Strawberry",
            imgSrc: "https://picsum.photos/150",
            teams: [1],
            whereabouts: [{location: "San Francisco, CA", activity: "Attending LWT Summit"}]
        },{
            userId: 4,
            usrname: "Charlie Chocolate",
            imgSrc: "https://picsum.photos/150",
            teams: [1],
            whereabouts: [{location: "Desk - Cubby A3", activity: "Working on HTML wireframes"}]
        },{
            userId: 5,
            usrname: "Kelly Kiwi",
            imgSrc: "https://picsum.photos/150",
            teams: [1],
            whereabouts: [{location: "Desk - Cubby A7", activity: "Prepping for afternoon dept standup"}]
        }
    ],

    teams: [
        {
            teamId: 0,
            name: "Team Zoe",
            motto: "Everything is great when you're the best team!",
            imgSrc: "https://instagram.fbed1-1.fna.fbcdn.net/vp/6374ff5e592b546c77d70d0f6f2c56b6/5B1D220B/t51.2885-15/sh0.08/e35/p640x640/26863377_1950373121879732_4411844913881153536_n.jpg"
        },
        {
            teamId: 1,
            name: "Team Chief",
            motto: "Keep your eye on the pie!",
            imgSrc: "https://instagram.fbed1-1.fna.fbcdn.net/vp/d4316384417239f8254d46c7519f2ffe/5B0D3303/t51.2885-15/sh0.08/e35/p640x640/26153198_133299754137879_6013809235014451200_n.jpg"
        }
    ]
};

export const whereaboutsReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_BULLETIN) {
        return {
            ...state, 
            bulletins: [...state.bulletins, {
                team: action.team,
                user: 0,
                text: action.text
            }]
        }
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