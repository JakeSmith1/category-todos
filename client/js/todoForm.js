window.TodoForm = (function($) {
  var forEach = function(items, cb) {return Array.prototype.forEach.call(items, cb);},
    $form;

  function init() {
    forEach(document.querySelectorAll('input[type=date]'), function(input){input.value = new Date().toDateInputValue();})

    $form = $('.ui .form');

    $form.submit(function(e){
      e.preventDefault();
      var todo = JSON.stringify($form.form('get values'));
      var url = 'http://localhost:3004/api/todos/';
      /*---------------- add check on values ---------------*/
      $.ajax({
        url: url,
        type: "POST",
        data: todo,
        contentType: "application/json"
      })
      .then(function(data){console.log('success', data);})
      .catch(function(err){console.log('error', err);});

    })
  }
  return {
    init
  }
})(jQuery)
