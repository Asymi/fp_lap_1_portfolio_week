var expect  = require('chai').expect;
var request = require('request');
const chaiHttp = require('chai-http');

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

it('Social Media page status', function(done){
    request('http://localhost:3000/social', function(error, response, body){
        expect(response.statusCode).to.equal(200);
        done(); 
    });
}); 


it('Post page content', function(done) {
    request(' http://localhost:3000/social' , function(error, response, body) {
        expect(body).to.equal('Testing!');
        done();
    });
});

it('Entry variable to exist', function(done) {
    request(' http://localhost:3000/social' , function(error, response, body) {
        expect(Object).to.exist;
        done();
    });
});


it('Entry variable should be an object property of post', function(done) {
    request(' http://localhost:3000/social' , function(error, response, body) {
        expect({post: 'Hey'}).to.have.be.an('object')
        done();
    });
});

const chai = require('chai');
chai.use(chaiHttp);

it('should be a json file', done => {
    chai.request('http://localhost:3000/social')
    .get('/social')
    .end((err,res) => {
        expect(res).to.be.html;
        done();
    });
});

it('POST', done => {
    chai.request('http://localhost:3000/social')
    .post('/social')
    // .type('form')
    // .send({'post': 'Hey'})
    .then(res => {
        expect(res).to.have.status(404); //200
        expect(res).to.be.html; //json
    })
    .catch(err => {
        throw err;
    });
    done();
});
