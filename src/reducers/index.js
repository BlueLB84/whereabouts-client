import * as actions from '../actions';

const initialState = {
    currentUser: null,
    users: [],
    teams: [],
    checkUserLoading: false,
    userLoading: false,
    teamLoading: false,
    bulletinLoading: false,
    whereaboutsLoading: false,
    error: null
};

export const whereaboutsReducer = (state=initialState, action) => {
    switch(action.type) {
        case `${actions.ADD_TEAM}` : {
            return {
                ...state,
                teams: action.teamId
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
        // LOGOUT user
        case `${actions.LOGOUT_USER}` : {
            return {
                ...state,
                currentUser: action.currentUser
            }
        }
        // Check if user exists on login
        case `${actions.CHECK_USER_EXISTS_REQUEST}` : {
            return {
                ...state,
                checkUserLoading: action.checkUserLoading
            }
        }
        case `${actions.CHECK_USER_EXISTS_SUCCESS}` : {
            return {
                ...state,
                currentUser: action.currentUser,
                checkUserLoading: false
            }
        }
        case `${actions.CHECK_USER_EXISTS_ERROR}` : {
            return {
                ...state,
                error: action.error,
                checkUserLoading: false
            }
        }
        // Get USERS data
        case `${actions.FETCH_USERS_REQUEST}` : {
            return {
                ...state,
                userLoading: action.userLoading
            }
        }
        case `${actions.FETCH_USERS_SUCCESS}` : {
            return {
                ...state,
                users: action.users,
                userLoading: false
            }
        }
        case `${actions.FETCH_USERS_ERROR}` : {
            return {
                ...state,
                error: action.error,
                userLoading: false
            }
        }
        // Get TEAMS data
        case `${actions.FETCH_TEAMS_REQUEST}` : {
            return {
                ...state,
                teamLoading: action.teamLoading
            }
        }
        case `${actions.FETCH_TEAMS_SUCCESS}` : {
            return {
                ...state,
                teams: action.teams,
                teamLoading: false
            }
        }
        case `${actions.FETCH_TEAMS_ERROR}` : {
            return {
                ...state,
                error: action.error,
                teamLoading: false
            }
        }
        // Add Team bulletin
        case `${actions.ADD_BULLETIN_REQUEST}` : {
            return {
                ...state,
                bulletinLoading: action.bulletinLoading
            }
        }
        case `${actions.ADD_BULLETIN_SUCCESS}` : {
            let teamIndex;

            state.teams.map((team, index) => {
                if (team.teamId === action.teamId) {
                    teamIndex = index;
                }
                return false;
            });

            const newBulletin = action.bulletins.slice(-1)[0];

            const newBulletinsArr = [...state.teams[teamIndex].bulletins, newBulletin];

            return {
                ...state,
                teams: state.teams.map((team, index) => index === teamIndex ? {...team, bulletins: newBulletinsArr} : team),
                bulletinLoading: false
            }
        }
        case `${actions.ADD_BULLETIN_ERROR}` : {
            return {
                ...state,
                error: action.error,
                bulletinLoading: false
            }
        }
        // Update User whereabouts
        case `${actions.ADD_WHEREABOUTS_REQUEST}` : {
            return {
                ...state,
                whereaboutsLoading: action.whereaboutsLoading
            }
        }
        case `${actions.ADD_WHEREABOUTS_SUCCESS}` : {
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
        case `${actions.ADD_WHEREABOUTS_ERROR}` : {
            return {
                ...state,
                error: action.error,
                whereaboutsLoading: false
            }
        }
        default : return state;
    }
}
