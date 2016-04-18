
var data = require('../config/endpoints'),
    request = require('supertest')(data().url);

describe('Test Demo.', function() {

    this.timeout(10000);

    it('Visit ' + data().url, function(done) {
        request.get('')
            .expect(200)
            .end(done);
    });
    console.log('You are in ' + data().name);
});
