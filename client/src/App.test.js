import  useFetch from './useFetch.js'

test('make sure it returns a defined value',()=>{
  expect(useFetch).toBeDefined();
})

test('make sure the length of the array if greater than 0',()=>{
  expect(useFetch).not.toHaveLength(0);
})

