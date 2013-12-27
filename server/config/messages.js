
module.exports = {

  /**
   * Authentication messages
   */
  authentication: {
    incorrect: {
      user: function (username) { return 'User \'' + username + '\' was not found'; },
      email: function (email) { return 'Email address \'' + email + '\' is not associated with an account'; },
      password: 'Password is incorrect'
    },
    requires: {
      authentication: function (path) { return 'You must be authenticated to access ' + path; },
      role: function (path) { return 'You are not authorized to access ' + path; },
      self: function (username, path) { return 'You must be user \'' + username + '\' to access ' + path; }
    },
    success: function (username) { return 'Authenticated as \'' + username + '\''; }
  },

  /**
   * Model messages (CRUD, etc)
   */
  user: {
    created: function (username) { return 'User \'' + username + '\' was created'; },
    deleted: function (username) { return 'User \'' + username + '\' was deleted'; },
    updated: function (username) { return 'User \'' + username + '\' was updated'; }
  },

  /*
   * Field validation messages
   */
  body: {
    isNull: 'Body field cannot be empty' 
  },
  comments: {
    isNull: 'Please include comments'
  },
  email: {
    notEmail: 'Email address must be valid',
    isNull: 'Please include your email address'
  },
  jobTitle: {
    isNull: 'Job title cannot be empty'
  },
  name: {
    first: {
      isNull: 'First name cannot be empty'
    },
    last: {
      isNull: 'Last name cannot be empty'
    }, 
    isNull: 'Please include your name'
  },
  password: {
    isNull: 'Password cannot be empty'
  },
  position: {
    isNull: 'Position cannot be empty',
    notNumeric: 'Position must be numeric'
  },
  title: {
    isNull: 'Title cannot be empty'
  },
  url: {
    notUrl: 'Url must be valid'
  },
  username: {
    isNull: 'Username cannot be empty'
  },

  /**
   * Unbound validation messages
   */
  default: 'Sorry! There was an error',
  notUnique: function (collectionField, fieldValue) { return collectionField + ' \'' + fieldValue + '\' already exists, please enter another'; },

  /**
   * HTTP status code messages
   */
  status: {
    403: 'You are not authorized to access this content',
    404: 'The content you were looking for was not found',
    500: 'There was a server error while processing your request'
  }
}
