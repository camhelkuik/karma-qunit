import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    remove(){
      const text = this.get('text');
    }
  }
});


