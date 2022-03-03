describe("Puppies in a basket", function() {
    describe("when adding 1 puppy to a basket with 2 puppies", function() {
        var puppies = ['fido', 'spot'];
        puppies.push('bowzer');
        it("should change the puppy quantity to 3", function() {
          expect(puppies.length).toEqual(3);
        });
    });
});
