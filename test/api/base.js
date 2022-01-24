const assert = require("assert");
const ripe = require("../..");

describe("API", function() {
    describe("#constructor()", function() {
        it("should be able to construct a new Account API instance", () => {
            const api = new ripe.API();
            assert.notStrictEqual(api.baseUrlAuth, null);
            assert.notStrictEqual(api.baseUrlAuth, undefined);
        });
    });
});
