// process.nextTick()将复杂的工作拆散
function doSomething(args, callback) {
  somethingComplicated(args);
  process.nextTick(callback);
}

doSomething(function onEnd() {
  compute()
})