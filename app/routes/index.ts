import Route from '@ember/routing/route';
import { computed } from '@ember/object';
import DS from 'ember-data';

function asyncComputed() {
  return computed('key', function() {
    return DS.PromiseObject.create({
      promise: Promise.resolve(),
    })
  });
}

export default class Index extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
}
