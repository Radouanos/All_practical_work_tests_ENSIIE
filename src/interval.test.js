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