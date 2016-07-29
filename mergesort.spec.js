describe('Split Array function', function() {
  it('there should be a split function', function() {
    expect( typeof split ).toEqual('function');
  });
  it('is should handle an empty array', function() {
    expect( split([]) ).toEqual([[],[]]);
  });
  it('is able to split an array into two halves', function() {
    expect(split([2,5,1,3,6,7])).toEqual([[2,5,1],[3,6,7]]);
  });
});

describe('Merge function', function(){
  it('there should be a merge function', function(){
    expect(typeof merge).toEqual('function');
  });
  it('it should return an empty array when passed two empty arrays', function(){
    expect(merge([],[])).toEqual([]);
  });  
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2,3,5],[1,6,7])).toEqual([1,2,3,5,6,7]);
  });
});

describe('Merge Sort function', function(){
  it('there should be a mergeSort function', function(){
    expect(typeof mergeSort).toEqual('function');
  });
  it('it should return an empty array when given an empty array', function(){
    expect(mergeSort([])).toEqual([]);
  });
  it('it should return the same array when given an array with 1 element', function(){
    expect(mergeSort([4])).toEqual([4]);
  });
  it('the array lengths should match', function(){
    expect(mergeSort([4,6,2,10]).length).toEqual([4,6,2,10].length);
  });


  it('it should sort an array', function(){
    expect(mergeSort([8,2,6,2,12,25,4,8])).toEqual([2,2,4,6,8,8,12,25]);
  });  
  
});