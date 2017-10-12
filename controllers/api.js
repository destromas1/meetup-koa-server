const data = [{name : "Shahjada" , id : "111"}];

// const api = function * api(next) {
//   if ('GET' != this.method) return yield next;
//   this.body = yield data;
// };

// module.exports.list = function * list(next) {
//   if ('GET' != this.method) return yield next;
//   this.body = yield render('list', {
//     'books': yield data
//   });
// };

// This must be avoided, use ajax in the view.
module.exports.all = function * all(ctx, next) {
  if ('GET' != this.method) return yield next;
  this.body = yield data;
};



// module.exports = {api : api};
