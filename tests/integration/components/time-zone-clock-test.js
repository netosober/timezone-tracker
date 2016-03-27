import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

moduleForComponent('time-zone-clock', 'Integration | Component | time zone clock', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('dateToDisplay', moment('2016-01-01 00:00:00'));

  this.render(hbs`{{time-zone-clock dateToDisplay=dateToDisplay}}`);

  assert.equal(this.$().text().trim(), moment('2016-01-01 00:00:00').format("l hh:mm:ss a"));

  this.set('dateToDisplay', moment('2016-01-01 23:00:00'));

  this.render(hbs`{{time-zone-clock dateToDisplay=dateToDisplay}}`);

  assert.equal(this.$().text().trim(), moment('2016-01-01 23:00:00').format("l hh:mm:ss a"));


  this.set('dateToDisplay', moment('2016-01-01 12:00:00Z'));
  this.set('timeZone', 'America/Los_Angeles');

  this.render(hbs`{{time-zone-clock dateToDisplay=dateToDisplay timeZone=timeZone}}`);

  assert.equal(this.$().text().trim(), moment('2016-01-01 04:00:00').format("l hh:mm:ss a"));


});
