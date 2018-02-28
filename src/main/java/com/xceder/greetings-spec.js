//greetings-spec.js
describe("Counter", function() {

    it("should say Hi given a name", function() {
        sayHi("Tom").should.equal("Hi Tom");
    });

    it("should not say Hi if no input", function() {
        sayHi().should.equal("Nobody comes");
    });

});