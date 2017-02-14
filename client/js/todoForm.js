window.TodoForm = (function() {
  var title; //... elements
  var forEach;
  function init() {
    forEach = function(items, cb) {return Array.prototype.forEach.call(items, cb);}
    forEach(document.querySelectorAll('input[name$=-date]'), function(input){input.value = new Date().toDateInputValue();})
  }
  return {
    init
  }
})()
