import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      const text = this.get('text');
      this.removeObject(text);
      this.set(text);
    }
  }
});
