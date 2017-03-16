import { map } from 'lodash';
import { Observable } from 'rxjs/Rx';
import store from './store';

console.log(store);

export const loadGithubFollowers = store.actionCreator((payload) => {
  const url = `https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json`;
  return {
    type: 'GITHUB_FOLLOWERS_LOADING',
    payload: Observable.ajax(url)
      .map(xhr => xhr.response.map(el => el))
      .map(followers => ({
        type: 'GITHUB_FOLLOWERS_LOADED',
        payload: followers,
      })),
  };
});

export const changeName = store.actionCreator(payload => ({
  type: 'NAME_CHANGED',
  payload,
}));

export const changeImg = store.actionCreator((payload) => ({
  type: 'IMG_CHANGED',
  payload,
}));

export const changeTown = store.actionCreator((payload) => ({
  type: 'TOWN_CHANGED',
  payload,
}));
