import { VOTE_ANGULAR, VOTE_REACT, VOTE_VUE } from './actionTypes';

export const voteReact = () => {
    return {
        type: VOTE_REACT
    }
}

export const voteVue = () => {
    return {
        type: VOTE_VUE
    }
}

export const voteAngular = () => {
    return {
        type: VOTE_ANGULAR
    }
}