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

describe('count book [books]', function () {
    let booksExemple = [{
            "id": 1,
            "name": "test",
            "price": 30,
            "added_at": "2019-01-01"
        },
        {
            "id": 6,
            "name": "test",
            "price": 6.1,
            "added_at": "2019-02-01"
        },
        {
            "id": 7,
            "name": "test",
            "price": 6.1,
            "added_at": "2019-02-01"
        }];

    test('compter par mois', () => {

        let expected_result = [{  year: '2019', month: 2, count: 1, count_cumulative: 1 }, {year: '2019', month: 3, count: 2, count_cumulative: 3 } ];
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(booksExemple)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getCountBookAddedByMonth("test")).toStrictEqual(expected_result);
    });

    test('si le book n\'existe pas dans la base de données', () => {
        let no_book = [];
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(no_book)
        };
        const repository = new BookRepository(dbMock);

        expect(function () {repository.getCountBookAddedByMonth("testFalse")}).toThrow("livre n\'existe pas");
    });
});