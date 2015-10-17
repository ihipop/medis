'use strict';

import * as instance from './instance';
import * as favorite from './favorite';

const handlers = {};
Object.assign(handlers, instance);
Object.assign(handlers, favorite);

export default function (state, action) {
  console.log(`* ACTION ${action.type}`);
  if (handlers[action.type]) {
    return handlers[action.type].call(state, action.data);
  }
  return state;
}