var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request(' http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('Hello, client!');
        done();
    });
});

it('Main page status', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

describe ('index', function() {
    it('status', function(done){
        request('http://localhost:3000/index', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

/*
 * Server handle post requests
 */
function journalEntries(req, res){
    var newEntry = new Journal(req.body); 
    newEntry.save((err, journal) => {
        if (err){
            res.send(err);
        }else{
            res.json({message: "Journal was successfully posted", journal});
        }
    });
}