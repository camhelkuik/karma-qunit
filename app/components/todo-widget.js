import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addTodo(text) {
      this.get('todos').pushObject({ text: text});
    },
    removeTodo(text){
      this.get('todos').removeObject({ text: text});
    }
  }
});
