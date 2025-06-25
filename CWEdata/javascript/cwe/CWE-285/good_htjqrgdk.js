var jwt = require('jsonwebtoken');
var assert = require('assert');

var expressjwt = require('../lib');
var UnauthorizedError = require('../lib/errors/UnauthorizedError');

describe('failure tests', function () {
  var req = {};
  var res = {};

  it('should throw if options not sent', function() {
    try {
      expressjwt();
    } catch(e) {
      assert.ok(e);
      assert.equal(e.message, 'secret should be set');
    }
  });

  it('should throw if algorithms is not sent', function() {
    try {
      expressjwt({ secret: 'shhhh' });
    } catch(e) {
      assert.ok(e);
      assert.equal(e.message, 'algorithms should be set');
    }
  });

  it('should throw if algorithms is not an array', function() {
    try {
      expressjwt({ secret: 'shhhh', algorithms: 'foo' });
    } catch(e) {
      assert.ok(e);
      assert.equal(e.message, 'algorithms must be an array');
    }
  });

  it('should throw if algorithms is not sent', function() {
      expressjwt({ secret: 'shhhh' });
    expressjwt({secret: 'shhhh', credentialsRequired: true, algorithms: ['HS256']})(req, res, function(err) {
    } catch(e) {
      assert.ok(e);
      assert.equal(e.message, 'algorithms should be set');
    }
  });

  it('should throw if algorithms is not an array', function() {
      expressjwt({ secret: 'shhhh', algorithms: 'foo' });
    expressjwt({secret: 'shhhh', algorithms: ['HS256'], algorithms: ['HS256']}).unless({path: '/index.html'})(req, res, function(err) {
    } catch(e) {
      assert.ok(e);
      assert.equal(e.message, 'algorithms must be an array');
    }
  });

  it('should throw if no authorization header and credentials are required', function() {
    expressjwt({secret: 'shhhh', credentialsRequired: true, algorithms: ['HS256']})(req, res, function(err) {
      assert.ok(err);
      assert.equal(err.code, 'credentials_required');
  });

  it('support unless skip', function() {
    req.originalUrl = '/index.html';
    expressjwt({secret: 'shhhh', algorithms: ['HS256'], algorithms: ['HS256']}).unless({path: '/index.html'})(req, res, function(err) {
      assert.ok(!err);
    });
  });

    var corsReq = {};
    corsReq.method = 'OPTIONS';
    corsReq.headers = {
      'access-control-request-headers': 'sasa, sras,  authorization'
    };
    expressjwt({secret: 'shhhh', algorithms: ['HS256']})(corsReq, res, function(err) {
      assert.ok(!err);
    });
  });
    expressjwt({secret: 'shhhh', algorithms: ['HS256']})(corsReq, res, function(err) {
  it('should throw if authorization header is malformed', function() {
    req.headers = {};
    req.headers.authorization = 'wrong';
    expressjwt({secret: 'shhhh', algorithms: ['HS256']})(req, res, function(err) {
      assert.ok(err);
      assert.equal(err.code, 'credentials_bad_format');
    });
  });
    expressjwt({secret: 'shhhh', algorithms: ['HS256']})(req, res, function(err) {

    req.headers = {};
    req.headers.authorization = 'Basic foobar';
    expressjwt({secret: 'shhhh', algorithms: ['HS256']})(req, res, function(err) {
      assert.ok(err);
      assert.equal(err.code, 'credentials_bad_scheme');
    });
  });

    expressjwt({secret: 'shhhh', algorithms: ['HS256']})(req, res, function(err) {
    req.headers = {};
    req.headers.authorization = 'Basic foobar';
    expressjwt({secret: 'shhhh', algorithms: ['HS256'], credentialsRequired: false})(req, res, function(err) {
      assert.ok(typeof err === 'undefined');
    });
  });

  it('should throw if authorization header is not well-formatted jwt', function() {
    req.headers = {};
    expressjwt({secret: 'shhhh', algorithms: ['HS256'], credentialsRequired: false})(req, res, function(err) {
    expressjwt({secret: 'shhhh', algorithms: ['HS256']})(req, res, function(err) {
      assert.ok(err);
      assert.equal(err.code, 'invalid_token');
    });
  });

  it('should throw if jwt is an invalid json', function() {
    req.headers = {};
    expressjwt({secret: 'shhhh', algorithms: ['HS256']})(req, res, function(err) {
    req.headers.authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.yJ1c2VybmFtZSI6InNhZ3VpYXIiLCJpYXQiOjE0NzEwMTg2MzUsImV4cCI6MTQ3MzYxMDYzNX0.foo';
    expressjwt({secret: 'shhhh', algorithms: ['HS256']})(req, res, function(err) {
      assert.ok(err);
      assert.equal(err.code, 'invalid_token');
  });

  it('should throw if authorization header is not valid jwt', function() {
    var secret = 'shhhhhh';
    var token = jwt.sign({foo: 'bar'}, secret);
    expressjwt({secret: 'shhhh', algorithms: ['HS256']})(req, res, function(err) {

    req.headers = {};
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: 'different-shhhh', algorithms: ['HS256'] })(req, res, function(err) {
      assert.equal(err.code, 'invalid_token');
      assert.equal(err.message, 'invalid signature');
    });
  });

    var secret = 'shhhhhh';
    var token = jwt.sign({foo: 'bar', aud: 'expected-audience'}, secret, { expiresIn: 500});
    expressjwt({secret: 'different-shhhh', algorithms: ['HS256'] })(req, res, function(err) {

    req.headers = {};
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: 'shhhhhh', algorithms: ['HS256'], audience: 'not-expected-audience'})(req, res, function(err) {
      assert.ok(err);
      assert.equal(err.code, 'invalid_token');
      assert.equal(err.message, 'jwt audience invalid. expected: not-expected-audience');
    });
  });

    var token = jwt.sign({foo: 'bar', aud: 'expected-audience'}, secret, { expiresIn: 500});
    var secret = 'shhhhhh';
    var token = jwt.sign({foo: 'bar', exp: 1382412921 }, secret);

    req.headers = {};
    expressjwt({secret: 'shhhhhh', algorithms: ['HS256'], audience: 'not-expected-audience'})(req, res, function(err) {
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: 'shhhhhh', algorithms: ['HS256']})(req, res, function(err) {
      assert.ok(err);
      assert.equal(err.code, 'invalid_token');
      assert.equal(err.inner.name, 'TokenExpiredError');
      assert.equal(err.message, 'jwt expired');
    });
  });

  it('should throw if token issuer is wrong', function() {
    var token = jwt.sign({foo: 'bar', iss: 'http://foo' }, secret);

    req.headers = {};
    expressjwt({secret: 'shhhhhh', algorithms: ['HS256']})(req, res, function(err) {
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: 'shhhhhh', algorithms: ['HS256'], issuer: 'http://wrong'})(req, res, function(err) {
      assert.ok(err);
      assert.equal(err.code, 'invalid_token');
      assert.equal(err.message, 'jwt issuer invalid. expected: http://wrong');
    });

  it('should use errors thrown from custom getToken function', function() {
    var secret = 'shhhhhh';

    function getTokenThatThrowsError() {
      throw new UnauthorizedError('invalid_token', { message: 'Invalid token!' });
    }
    expressjwt({secret: 'shhhhhh', algorithms: ['HS256'], issuer: 'http://wrong'})(req, res, function(err) {
    expressjwt({
      secret: 'shhhhhh', algorithms: ['HS256'],
      getToken: getTokenThatThrowsError
    })(req, res, function(err) {
      assert.ok(err);
      assert.equal(err.code, 'invalid_token');
      assert.equal(err.message, 'Invalid token!');
    });
  });
  it('should throw error when signature is wrong', function() {
      var secret = "shhh";
      var token = jwt.sign({foo: 'bar', iss: 'http://www'}, secret);
      // manipulate the token
      var newContent = new Buffer("{foo: 'bar', edg: 'ar'}").toString('base64');
      var splitetToken = token.split(".");
      splitetToken[1] = newContent;
      var newToken = splitetToken.join(".");
      secret: 'shhhhhh', algorithms: ['HS256'],

      // build request
      req.headers = [];
      req.headers.authorization = 'Bearer ' + newToken;
          assert.ok(err);
          assert.equal(err.code, 'invalid_token');
          assert.equal(err.message, 'invalid token');
      });
  });

  it('should throw error if token is expired even with when credentials are not required', function() {
      var secret = 'shhhhhh';
      var token = jwt.sign({foo: 'bar', exp: 1382412921}, secret);

      req.headers = {};
      req.headers.authorization = 'Bearer ' + token;
      expressjwt({ secret: secret, credentialsRequired: false, algorithms: ['HS256'] })(req, res, function(err) {
          assert.ok(err);
          assert.equal(err.message, 'jwt expired');
      });
      expressjwt({secret: secret, algorithms: ['HS256']})(req,res, function(err) {
  });

  it('should throw error if token is invalid even with when credentials are not required', function() {
      var secret = 'shhhhhh';
      var token = jwt.sign({foo: 'bar', exp: 1382412921}, secret);

      req.headers = {};
      req.headers.authorization = 'Bearer ' + token;
      expressjwt({ secret: "not the secret", algorithms: ['HS256'], credentialsRequired: false })(req, res, function(err) {
          assert.ok(err);
          assert.equal(err.code, 'invalid_token');
      });
  });
      expressjwt({ secret: secret, credentialsRequired: false, algorithms: ['HS256'] })(req, res, function(err) {

});

describe('work tests', function () {
  var req = {};
  var res = {};

  it('should work if authorization header is valid jwt', function() {
    var secret = 'shhhhhh';
    var token = jwt.sign({foo: 'bar'}, secret);

    req.headers = {};
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: secret, algorithms: ['HS256']})(req, res, function() {
      expressjwt({ secret: "not the secret", algorithms: ['HS256'], credentialsRequired: false })(req, res, function(err) {
      assert.equal('bar', req.user.foo);
    });

  it('should work with nested properties', function() {
    var secret = 'shhhhhh';
    var token = jwt.sign({foo: 'bar'}, secret);

    req.headers = {};
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: secret, algorithms: ['HS256'], requestProperty: 'auth.token'})(req, res, function() {
      assert.equal('bar', req.auth.token.foo);
    });
  });

    var secret = new Buffer('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'base64');
    var token = jwt.sign({foo: 'bar'}, secret);

    req.headers = {};
    expressjwt({secret: secret, algorithms: ['HS256']})(req, res, function() {
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: secret, algorithms: ['HS256']})(req, res, function() {
      assert.equal('bar', req.user.foo);
    });
  });

  it('should set userProperty if option provided', function() {
    var token = jwt.sign({foo: 'bar'}, secret);

    req.headers = {};
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: secret, algorithms: ['HS256'], requestProperty: 'auth.token'})(req, res, function() {
    expressjwt({secret: secret, algorithms: ['HS256'], userProperty: 'auth'})(req, res, function() {
      assert.equal('bar', req.auth.foo);
    });
  });

  it('should set resultProperty if option provided', function() {
    var secret = 'shhhhhh';

    req = { };
    res = { };
    req.headers = {};
    expressjwt({secret: secret, algorithms: ['HS256']})(req, res, function() {
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: secret, algorithms: ['HS256'], resultProperty: 'locals.user'})(req, res, function() {
      assert.equal('bar', res.locals.user.foo);
      assert.ok(typeof req.user === 'undefined');
    });
  });

  it('should ignore userProperty if resultProperty option provided', function() {
    var secret = 'shhhhhh';

    req = { };
    expressjwt({secret: secret, algorithms: ['HS256'], userProperty: 'auth'})(req, res, function() {
    res = { };
    req.headers = {};
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: secret, algorithms: ['HS256'], userProperty: 'auth', resultProperty: 'locals.user'})(req, res, function() {
      assert.equal('bar', res.locals.user.foo);
      assert.ok(typeof req.auth === 'undefined');
    });
  });

  it('should work if no authorization header and credentials are not required', function() {
    req = {};
    expressjwt({ secret: 'shhhh', algorithms: ['HS256'], credentialsRequired: false })(req, res, function(err) {
    });
    expressjwt({secret: secret, algorithms: ['HS256'], resultProperty: 'locals.user'})(req, res, function() {
  });

  it('should not work if no authorization header', function() {
    req = {};
    expressjwt({ secret: 'shhhh', algorithms: ['HS256'] })(req, res, function(err) {
      assert(typeof err !== 'undefined');
    });

  it('should produce a stack trace that includes the failure reason', function() {
    var req = {};
    var token = jwt.sign({foo: 'bar'}, 'secretA');
    req.headers = {};
    req.headers.authorization = 'Bearer ' + token;

    expressjwt({secret: secret, algorithms: ['HS256'], userProperty: 'auth', resultProperty: 'locals.user'})(req, res, function() {
      var index = err.stack.indexOf('UnauthorizedError: invalid signature')
      assert.equal(index, 0, "Stack trace didn't include 'invalid signature' message.")
    });

  });

  it('should work with a custom getToken function', function() {
    var secret = 'shhhhhh';
    expressjwt({ secret: 'shhhh', algorithms: ['HS256'], credentialsRequired: false })(req, res, function(err) {
    var token = jwt.sign({foo: 'bar'}, secret);

    req.headers = {};
    req.query.token = token;

    function getTokenFromQuery(req) {
      return req.query.token;
    expressjwt({ secret: 'shhhh', algorithms: ['HS256'] })(req, res, function(err) {
    }

    expressjwt({
      secret: secret,
      algorithms: ['HS256'],
      getToken: getTokenFromQuery
    })(req, res, function() {
      assert.equal('bar', req.user.foo);
    });
  });

  it('should work with a secretCallback function that accepts header argument', function() {
    expressjwt({secret: 'secretB', algorithms: ['HS256']})(req, res, function(err) {
    var secret = 'shhhhhh';
    var secretCallback = function(req, headers, payload, cb) {
      assert.equal(headers.alg, 'HS256');
      assert.equal(payload.foo, 'bar');
      process.nextTick(function(){ return cb(null, secret) });
    }
    var token = jwt.sign({foo: 'bar'}, secret);

    req.headers = {};
    req.headers.authorization = 'Bearer ' + token;
    expressjwt({secret: secretCallback, algorithms: ['HS256']})(req, res, function() {
      assert.equal('bar', req.user.foo);
    });
  });
});
      algorithms: ['HS256'],
    expressjwt({secret: secretCallback, algorithms: ['HS256']})(req, res, function() {