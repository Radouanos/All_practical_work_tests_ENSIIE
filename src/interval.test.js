const Interval = require('./interval');
describe('interval',function()
{
	test('Test overlaps between Interval(0,1) and Interval(0,3) => true',() =>
	{
		var obj1 = new Interval(0,1);
		var obj2 = new Interval(0,3);
		expect(obj1.overlaps(obj2)).toBe(true);
	});
	test('Test overlaps between Interval(2,3) and Interval(0,1) => false',() =>
	{
		var obj1 = new Interval(2,3);
		var obj2 = new Interval(0,1);
		expect(obj1.overlaps(obj2)).toBe(false);
	});
});
describe('Interval-Includes',function()
{
	test('Test includes between Interval(0,1) and Interval(0,3) => true',() =>
	{
		var obj3 = new Interval(0,1);
		var obj4 = new Interval(0,3);
		expect(obj4.includes(obj3)).toBe(true);
	});
	test('Test includes between Interval(0,3) and Interval(2,5) => false',() =>
	{
		var obj3 = new Interval(0,3);
		var obj4 = new Interval(2,5);
		expect(obj4.includes(obj3)).toBe(false);
	});
});
describe('Interval-Union',function()
{
	test('Test Union between Interval(0,1) and Interval(1,5) => [0,5]',()=>
	{
		var objet1 = new Interval(0,1);
		var objet2 = new Interval(1,5);
		expect(objet1.union(objet2)).toEqual(Array(0,5));
	});
	test('Test Union between Interval(5,8) and Interval(7,15) => [5,15]',() =>
	{
		var obj3 = new Interval(7,15);
		var obj4 = new Interval(5,15);
		expect(obj4.union(obj3)).toEqual(Array(5,15));
	});
});
describe('test intersection',function()
{
	test('intersection between (0,5) and (6,8)',()=>
	{
		var obj1= new Interval(0,5);
		var obj2=new Interval(6,8);
		expect(obj2.intersection(obj1)).toEqual([]);
	});
	test('intersection between (0,6) and (2,8)',() =>
	{
		var obj1= new Interval(0,6);
		var obj2=new Interval(2,8);
		expect(obj2.intersection(obj1)).toEqual(new Interval(2,6));
	})
});
describe('test exclusion',function()
{
   
});