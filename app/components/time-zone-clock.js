import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  tagName: 'span',
  timeZone: moment.tz.guess(),
  convertedDateToDisplay: Ember.computed('dateToDisplay', 'timeZone', function() {
    return moment.tz(moment(this.get('dateToDisplay')), this.get('timeZone'));
  })
});
