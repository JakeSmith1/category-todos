window.TodoForm = (function($) {
  var forEach = function(items, cb) {return Array.prototype.forEach.call(items, cb);},
   $form;
   
  function init() {
    forEach(document.querySelectorAll('input[name$=-date]'), function(input){input.value = new Date().toDateInputValue();})

    $form = $('.ui .form');

    $form.submit(function(e){
      e.preventDefault();
      console.log($form.form('get values'));
    })
  }
  return {
    init
  }
})(jQuery)
