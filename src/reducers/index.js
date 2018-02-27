import * as actions from '../actions';

const initialState = {
    users: [],
    teams: [],
    loading: null,
    err: null
};

export const whereaboutsReducer = (state=initialState, action) => {
    switch(action.type) {
        case `${actions.ADD_TEAM}` : {
            return {
                ...state,
                teams: action.teamId
            }
        }
        case `${actions.ADD_BULLETIN}` : {
            let teamIndex;

            state.teams.map((team, index) => {
                if (team.teamId === action.teamId) {
                    teamIndex = index;
                }
                return false;
            });

            const newBulletinsArr = [...state.teams[teamIndex].bulletins, action.bulletins];

            return {
                ...state,
                teams: state.teams.map((team, index) => index === teamIndex ? {...team, bulletins: newBulletinsArr} : team)
            }
        }
        case `${actions.ADD_USER}` : {
            return {
                ...state,
                users: action.userId
            }
        }
        case `${actions.UPDATE_USER}` : {
            return {
                ...state,
                users: {...state.users, ...action.userId}
            }
        }
        case `${actions.ADD_WHEREABOUTS}` : {
            let userIndex;
            state.users.map((user, index) => {
                if (user.userId === action.userId) {
                    userIndex = index;
                }
                return false;
            });

            return {
                ...state,
                users: state.users.map((user, index) => index === userIndex ? {...user, whereabouts: {...action.whereabouts}} : user)
            }
        }
        default : return state;
    }
}


// export const whereaboutsReducer = (state=initialState, action) => {
//     if (action.type === actions.ADD_TEAM) {
//         return {
//             ...state,
//             teams: action.teamId
//         }
//     } else if (action.type === actions.ADD_BULLETIN) {
//         let teamIndex;

//         state.teams.map((team, index) => {
//             if (team.teamId === action.teamId) {
//                 teamIndex = index;
//             }
//             return false;
//         });

//         const newBulletinsArr = [...state.teams[teamIndex].bulletins, action.bulletins];

//         return {
//             ...state,
//             teams: state.teams.map((team, index) => index === teamIndex ? {...team, bulletins: newBulletinsArr} : team)
//         }
//     } else if (action.type === actions.ADD_USER) {
//         return {
//             ...state,
//             users: action.userId
//         }
//     } else if (action.type === actions.UPDATE_USER) {
//         return {
//             ...state,
//             users: {...state.users, ...action.userId}
//         }
//     } else if (action.type === actions.ADD_WHEREABOUTS) {
//         let userIndex;
//         state.users.map((user, index) => {
//             if (user.userId === action.userId) {
//                 userIndex = index;
//             }
//             return false;
//         });

//         return {
//             ...state,
//             users: state.users.map((user, index) => index === userIndex ? {...user, whereabouts: {...action.whereabouts}} : user)
//         }
//     } 
//     return state;
// };


