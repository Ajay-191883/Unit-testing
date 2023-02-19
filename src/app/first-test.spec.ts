describe('First-unit-test', ()=>{
    let testVariable: any;

    beforeEach(()=> {
        testVariable = {};
    })

    it('should return true if a is true', ()=>{
        //arrange (any initialization type of work here)
        testVariable.a = false;
        
        //act (logic or function here)
        testVariable.a = true;

        //assert (check value here)
        expect(testVariable.a).toBe(true)
    })
})