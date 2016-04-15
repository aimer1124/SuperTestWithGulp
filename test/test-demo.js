
var data = require('../config/endpoints'),
    request = require('supertest')(data().url);

describe('Test Demo.', function() {

    it('Visit ' + data().url, function(done) {
        request.get('')
            .expect(200)
            .end(done);
    });
    console.log('You are in ' + data().name);
});
