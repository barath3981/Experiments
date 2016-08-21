$(document).ready(function() {
  function testAsync() {
    var deferredObject = $.Deferred();
    setTimeout(function() {
      console.log(deferredObject.state());
   		deferredObject.reject();
      console.log(deferredObject.rejectWith());
   	}, 1000);
    return deferredObject.promise();
  }
  var promise = testAsync();
  promise.done(function() {
    console.log('Execution done');
  });
  promise.fail(function() {
    console.log('Failed');
  });


});
