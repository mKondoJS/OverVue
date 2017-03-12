import store from './store';
import { Observable } from 'rxjs/Rx';
import { map } from 'lodash';

console.log(store);

export const loadGithubFollowers = store.actionCreator((payload) => {
  const url = `https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json`;
  return {
    type: 'GITHUB_FOLLOWERS_LOADING',
    payload: Observable.ajax(url)
      .map((xhr) => {
        return xhr.response.map(el => {return el;})
      })
      .map((followers) => {
        return {
        type: 'GITHUB_FOLLOWERS_LOADED',
        payload: followers
        };
    }),
  };
});

export const changeName = store.actionCreator((payload) => ({
  type: 'NAME_CHANGED',
  payload
}));

export const reName = (name) => {
  {}
}