
/**
 * Module dependencies
 */
var auth = require('../middleware/auth')
  , mongoose = require('mongoose')
  , msg = require('../../config/messages')
  , Q = require('q')
  , _ = require('underscore');

/**
 * Models
 */
var User = mongoose.model('User');

/**
 * Index
 * GET /api/users
 */
exports.index = function *(next) {
  try {
    var users = yield Q.ninvoke(User, 'find');
    this.body = yield censor(users);
  } catch (err) {
    this.err = err;
    yield next;
  }
}

/**
 * Create
 * POST /api/users/new 
 */
exports.create = function *(next) {
  try {
    var user = new User(this.request.body);
    yield Q.ninvoke(user, 'save');
    this.status = 201; // 201 Created
    this.body = yield resCreated('user', user, user.username);;
  } catch (err) {
    this.err = err;
    yield next;
  }
}

/*------------------------------------*\
    Authentication
\*------------------------------------*/

/**
 * Sign in
 * POST /api/users/sign-in
 */
exports.signIn = function *(next) {
  try {
    var msgJSONArray = [];
    if (!this.request.body.username) msgJSONArray.push(msgJSON(msg.username.isNull, 'validation', 'username'));
    if (!this.request.body.password) msgJSONArray.push(msgJSON(msg.password.isNull, 'validation', 'password'));
    if (msgJSONArray.length > 0) {
      this.status = 422; // 422 Unprocessable Entity
      this.body = yield resJSON(msgJSONArray);
      return;
    }
    var user = yield Q.ninvoke(User, 'findOne', { username: this.request.body.username });
    if (!user) {
      this.status = 401; // 401 Unauthorized
      this.body = yield resJSON(msgJSON(msg.authentication.incorrect.user(this.request.body.username), 'authentication', 'user'));
      return;
    }
    if (!user.authenticate(this.request.body.password, user.salt)) {
      this.status = 401; // 401 Unauthorized
      this.body = yield resJSON(msgJSON(msg.authentication.incorrect.password, 'authentication', 'user'));
      return;
    }
    this.session.user = user.id;
    this.status = 201; // 201 Created
    this.body = yield resJSON(msgJSON(msg.authentication.success(user.username), 'success', 'user', censor(user))); // 201 Created
  } catch (err) {
    this.err = err;
    yield next;
  }
}

/**
 * Sign out
 * DELETE /api/users/sign-out
 */
exports.signOut = function *(next) {
  this.session = {};
  this.body = yield resJSON(msgJSON('logout'));
}
