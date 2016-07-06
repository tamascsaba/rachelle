import App from '../../src/index';

const expect = chai.expect;

describe('Basic demo tests', () => {

    it('should work!', () => {
        expect(true).to.eql(true);
    });

    it('should be a empty object', () => {
        expect(App).to.be.a('object');
    });

    it('should cover "b"', () => {
        expect(App.b).to.be.a('function');
    });

    it('should cover "b" and return true', () => {
        expect(App.b()).to.be.true;
    });
});