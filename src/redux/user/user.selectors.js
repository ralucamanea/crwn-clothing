import { createSelector } from 'reselect';

const selectUser = state => state.user; //one level deep only

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);