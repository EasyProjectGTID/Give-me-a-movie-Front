// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_CLOSE_RESULTAT,
} from './constants';

export function closeResultat() {
  return {
    type: HOME_CLOSE_RESULTAT,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_CLOSE_RESULTAT:
      return {
        ...state,
        resultatRecherche:[]
      };

    default:
      return state;
  }
}
