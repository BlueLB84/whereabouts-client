import * as actions from '../actions';

const initialState = {
    users: [],
    teams: [],
    userLoading: false,
    teamLoading: false,
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
        case `${actions.FETCH_USERS_REQUEST}` : {
            return {
                ...state,
                userLoading: action.userLoading
            }
        }
        case `${actions.FETCH_TEAMS_REQUEST}` : {
            return {
                ...state,
                teamLoading: action.teamLoading
            }
        }
        case `${actions.FETCH_USERS_SUCCESS}` : {
            return {
                ...state,
                users: action.users,
                userLoading: false
            }
        }
        case `${actions.FETCH_TEAMS_SUCCESS}` : {
            return {
                ...state,
                teams: action.teams,
                teamLoading: false
            }
        }
        case `${actions.FETCH_USERS_ERROR}` : {
            return {
                ...state,
                error: action.error,
                userLoading: false
            }
        }
        case `${actions.FETCH_TEAMS_ERROR}` : {
            return {
                ...state,
                error: action.error,
                teamLoading: false
            }
        }
        default : return state;
    }
}
