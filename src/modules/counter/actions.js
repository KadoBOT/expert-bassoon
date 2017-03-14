import { createAction } from 'redux-act';
import xs from 'xstream';

// import counterService from './services';

export const addOne = createAction('INCREMENT');
export const addOne$ = createAction('INCREMENT_ASYNC');
export const removeOne = createAction('DECREMENT');
export const removeOne$ = createAction('DECREMENT_ASYNC');

export default function main(sources) {
  const increment$ = sources.ACTION
    .filter(action => action.type === 'INCREMENT_ASYNC')
    .mapTo({ type: 'INCREMENT' });

  const decrement$ = sources.ACTION
    .filter(action => action.type === 'DECREMENT_ASYNC')
    .mapTo({ type: 'DECREMENT' });

  const both$ = xs.merge(increment$, decrement$)
    .map(d =>
      xs.periodic(500) // async
        .take(1)
        .mapTo(d),
    )
    .flatten();

  return {
    ACTION: both$,
  };
}

