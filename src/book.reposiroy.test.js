const BookRepository = require('./book.repository');
describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    })});
describe('book repository : Number books',() =>
{
    test('Test Number of books', () =>
    {
        const dbMock =
            {
                get : jest.fn().mockReturnThis(),
                size : jest.fn().mockReturnThis(),
                value : jest.fn().mockReturnValue(1)
            };
        const repository = new BookRepository(dbMock);
        expect(repository.getTotalCount()).toBe(1);
    });
});
describe('book repository : Total price',() =>
{
    test('Test Total price of books',() =>
    {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(5)
        };
        const repository = new BookRepository(dbMock);
        expect(repository.getTotalPrice()).toBe(25);
    });
});
describe('book repository : Book by name',() =>
{
    test('Test get book by name',() =>
    {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue("{ id: 1, name: 'test1', price: 6.1, added_at: '2019-01-01' }")
        };
        const repository = new BookRepository(dbMock);
        expect(repository.getBookByName("test1")).toBe("{ id: 1, name: 'test1', price: 6.1, added_at: '2019-01-01' }");
    });
});