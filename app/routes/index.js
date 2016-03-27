import Ember from 'ember';

export default Ember.Route.extend({
  moment: Ember.inject.service(),
  setupController(controller, model) {
    this._super(controller, model);

    setInterval(function () {
      Ember.run(function () {
        controller.set('currentDate', new Date());
      });
    }, 1000);
  }
});
