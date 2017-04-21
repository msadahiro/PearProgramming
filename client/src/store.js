import { createStore } from 'redux';
import { getUsername } from './api';

const initialState = {
    projects: [],
    currentProjIndex: 0
}

const reducer = (state, action) => {
    console.log(`${action.type} was just dispatched!`);
    switch(action.type){
        case 'PROJECTS_RECEIVED':
            return {
                ...state, 
                projects: action.payload
            }
        case 'PASS':
            const nextIdx = (state.currentProjIndex === state.projects.length - 1) ? 0 : state.currentProjIndex + 1;
            return {
                ...state, 
                currentProjIndex: nextIdx
            }
        case 'ADD_MEMBER':
            const projId = state.projects[state.currentProjIndex].id;
            return {
                ...state,
                projects: state.projects.map((proj) => {
                                if (proj.id === projId) {
                                    return {
                                        ...proj,
                                        members: [...proj.members, getUsername()]
                                    }
                                } else {
                                    return proj
                                }
                            })
            }
        default:
            return state;
    }
}

const store = createStore(
                    reducer, 
                    initialState,
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                    )

export default store;