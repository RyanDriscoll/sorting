describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an array', function(){
  	expect( bubbleSort([2,5,1,3,6,7])).toEqual([1,2,3,5,6,7]);
  });
});