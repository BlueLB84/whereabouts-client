import * as actions from '../actions';

const initialState = {
    users: {
        0: {
            usrname: "Yoothee Yuser",
            email: "yoothee.yuser@ogmail.com",
            imgSrc: "https://picsum.photos/150",
            whereabouts: {location: "A secret location", activity: "A secret project"},
        },
        1: {
            usrname: "Robby Raspberry",
            email: "robby.raspberry@ogmail.com",
            imgSrc: "https://picsum.photos/150",
            whereabouts: {location: "Room 22", activity: "Weekly design meeting"}
        },
        2: {
            usrname: "Betty Banana",
            email: "betty.banana@ogmail.com",
            imgSrc: "https://picsum.photos/150",
            whereabouts: {location: "Austin, TX", activity: "React Hackathon"}
        },
        3: {
            usrname: "Suzy Strawberry",
            email: "suzy.strawberry@ogmail.com",
            imgSrc: "https://picsum.photos/150",
            whereabouts: {location: "San Francisco, CA", activity: "Attending LWT Summit"}
        },
        4: {
            usrname: "Charlie Chocolate",
            email: "charlie.chocolate@ogmail.com",
            imgSrc: "https://picsum.photos/150",
            whereabouts: {location: "Desk - Cubby A3", activity: "Working on HTML wireframes"}
        },
        5: {
            usrname: "Kelly Kiwi",
            email: "kelly.kiwi@ogmail.com",
            imgSrc: "https://picsum.photos/150",
            whereabouts: {location: "Desk - Cubby A7", activity: "Prepping for afternoon dept standup"}
        },
    },
    teams: {
        0: {
            name: "Team Zoe",
            motto: "Everything is great when you're the best team!",
            imgSrc: "https://instagram.fbed1-1.fna.fbcdn.net/vp/6374ff5e592b546c77d70d0f6f2c56b6/5B1D220B/t51.2885-15/sh0.08/e35/p640x640/26863377_1950373121879732_4411844913881153536_n.jpg",
            bulletins: {
                0: {
                    userId: 0, // firebase DB user key
                    text: "This is an important message from an important person on your team."
                    // dateTime: Date();
                },
                1: {
                    userId: 2,
                    text: "Annual bonus will be distributed this Friday."
                    // dateTime: Date();
                }
            },
            users: {
                0: {userId: 0},
                1: {userId: 1},
                2: {userId: 2}
            }
        },
        21: {
            name: "Team Chief",
            motto: "Keep your eye on the pie!",
            imgSrc: "https://instagram.fbed1-1.fna.fbcdn.net/vp/d4316384417239f8254d46c7519f2ffe/5B0D3303/t51.2885-15/sh0.08/e35/p640x640/26153198_133299754137879_6013809235014451200_n.jpg",
            bulletins: {
                0: {
                    userId: 1,
                    text: "This is another important message from an yet another semi-important person on your team."
                    // dateTime: Date();
                },
                1: {
                    userId: 3,
                    text: "Monthly design team meeting has been moved to March 1st."
                    // dateTime: Date();
                }
            },
            users: {
                0: {userId: 0},
                1: {userId: 3},
                2: {userId: 4},
                3: {userId: 5}
            }
        },
        15: {
            name: "Team BV",
            motto: "Getting it done!",
            imgSrc: "https://instagram.fbed1-1.fna.fbcdn.net/vp/b9ccb2404867881060a1212f572cee8d/5B159285/t51.2885-15/s640x640/sh0.08/e35/27877811_1318188988326985_6472819029957410816_n.jpg",
            bulletins: {
                0: {
                    userId: 4,
                    text: "This is another important message from an yet another semi-important person on your team."
                    // dateTime: Date();
                },
                1: {
                    userId: 5,
                    text: "Monthly design team meeting has been moved to March 1st."
                    // dateTime: Date();
                }
            },
            users: {
                0: {userId: 4},
                1: {userId: 5},
                2: {userId: 0}
            }
        }
    }
};

export const whereaboutsReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_TEAM) {
        return {
            ...state,
            teams: action.teamId
        }
    } else if (action.type === actions.ADD_BULLETIN) {
        const lastBulletinId = Object.keys(state.teams[action.teamId].bulletins).slice(-1)[0];
        const bulletinId = parseInt(lastBulletinId, 10) + 1;

        return {
            ...state,
            teams : {
                ...state.teams,
                [action.teamId] : {
                    ...state.teams[action.teamId],
                    bulletins : {
                        ...state.teams[action.teamId].bulletins,
                        [bulletinId] : {
                            ...state.teams[action.teamId].bulletins[bulletinId],
                            ...action.bulletins
                        }
                    }
                }
            }
        }
    } else if (action.type === actions.ADD_USER) {
        return {
            ...state,
            users: action.userId
        }
    } else if (action.type === actions.UPDATE_USER) {
        return {
            ...state,
            users: {...state.users, ...action.userId}
        }
    } else if (action.type === actions.ADD_WHEREABOUTS) {
        return {
            ...state,
            users : {
                ...state.users,
                [action.userId] : {
                    ...state.users[action.userId],
                   whereabouts : action.whereabouts
                }
            }
        }
    } 
    return state;
};


