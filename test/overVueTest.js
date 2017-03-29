import test from 'tape';
import Rx from 'rxjs/Rx';
import { Store } from '../src/OverVue';

const motherstream = new Store({ state: { initial: 'state' } });
test('motherstream is a BehaviorSubject', (t) => {
  t.plan(1);
  t.ok(motherstream.motherStream$ instanceof Rx.BehaviorSubject);
});

test('actions are converted to Observables', (t) => {
  t.plan(1);
  const streamTest = motherstream.createStateStream({ state: 'test' });
  t.ok(streamTest instanceof Rx.Observable);
});

test('motherstream has a state object', (t) => {
  t.plan(1);
  t.ok(typeof motherstream.state === 'object');
});

