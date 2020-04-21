import generator from '../src/generator';

test('page 1 should no prev', () => {
  let items = generator(1, 10, 2);
  expect(items[0]).toEqual({display: 1, page: 1});
  items = generator(1, 1, 2);
  expect(items[0]).toEqual({display: 1, page: 1});
});


test('page last should no next', () => {
  let items = generator(10, 10, 2);
  expect(items[items.length - 1]).toEqual({display: 10, page: 10});
  items = generator(1, 1, 2);
  expect(items[items.length - 1]).toEqual({display: 1, page: 1});
});

test('ellipsis', () => {
  let items = generator(1, 10, 2);
  expect(items.filter(item => item.display == '...').length).toBe(1);
  expect(items[3]).toEqual({display: '...'});
  items = generator(5,9,2);
  expect(items.filter(item => item.display == '...').length).toBe(0);
});
