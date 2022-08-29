// console.log(greet("Obum"));
describe('Test my greet function' , function(){
    it("It should return ,'Hello,Obum'when called with 'Obum'" , function(){
        
        assert.equal("Hello, Obum",greet("Obum"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ,'Hello,John'when called with 'John'" , function(){
        
        assert.equal("Hello, John",greet("John"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });

});
// console.log(greet('Obum'))