const Interval = require('./interval');
describe('Overlaps',function()
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
describe('Interval-Union',function() {
	test('Test Union between Interval(0,1) and Interval(2,5) => [0,1][2,5]', () => {
		var objet1 = new Interval(0, 1);
		var objet2 = new Interval(2, 5);
		expect(objet1.union(objet2)).toEqual([new Interval(0, 1), new Interval(2, 5)]);
	});
	test('Test Union between Interval(0,2) and Interval(1,5) => [0,5]', () => {
		var objet1 = new Interval(0, 2);
		var objet2 = new Interval(1, 5);
		expect(objet1.union(objet2)).toEqual([new Interval(0, 5)]);
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
		var obj1= new Interval(2,6);
		var obj2=new Interval(0,4);
		expect(obj2.intersection(obj1)).toEqual(new Interval(2,4));
	});
	test('intersection between (0,8) and (2,6)',() => {
		var obj1= new Interval(2,6);
		var obj2=new Interval(0,8);
		expect(obj2.intersection(obj1)).toEqual(new Interval(2,6));
	});
	test('intersection between (0,8) and (2,8)',() => {
		var obj1= new Interval(0,6);
		var obj2=new Interval(2,8);
		expect(obj2.intersection(obj1)).toEqual(new Interval(2,6));
	});
	test('intersection between (2,6) and (0,8)',() => {
		var obj1= new Interval(0,8);
		var obj2=new Interval(2,6);
		expect(obj2.intersection(obj1)).toEqual(new Interval(2,6));
	});
});

describe('test exclusion',function()
{
	test('Exclusion between (0,5) and (6,8)',()=>
	{
		var obj1= new Interval(6,8);
		var obj2=new Interval(0,5);
		expect(obj2.exclusion(obj1)).toEqual([obj2,obj1]);
	});
	test('Exclusion between (0,6) and (4,8)',()=>
	{
		var obj1= new Interval(0,6);
		var obj2=new Interval(4,8);
		expect(obj2.exclusion(obj1)).toEqual([new Interval(0,4),new Interval(6,8)]);
	});
	test('Exclusion between (0,3) and (2,6)',()=>
	{
		var obj1= new Interval(2,6);
		var obj2=new Interval(0,3);
		expect(obj2.exclusion(obj1)).toEqual([new Interval(0,2),new Interval(3,6)]);
	});
	test('Exclusion between (0,6) and (2,4)',()=>
	{
		var obj1= new Interval(2,4);
		var obj2=new Interval(0,6);
		expect(obj2.exclusion(obj1)).toEqual([new Interval(0,2),new Interval(4,6)]);
	});
	test('Exclusion between (0,8) and (2,4)',()=>
	{
		var obj1= new Interval(0,8);
		var obj2=new Interval(2,4);
		expect(obj2.exclusion(obj1)).toEqual([new Interval(0,2),new Interval(4,8)]);
	});
});
