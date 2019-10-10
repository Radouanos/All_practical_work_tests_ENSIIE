class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db.get('books').push(book).write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount()
    {
        return this.db.get('books').size().value();
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {//3
        let somme=0;
        let nombreTotal = this.getTotalCount();
        while (nombreTotal > 0)
        {
            somme=somme+this.db.get('books['+(nombreTotal-1)+'].price').value();
            nombreTotal--;
        }
        return somme;
    }

    /**
     * Retourne un livre
     */
    getBookByName(bookName)//4
    {
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMonth()
	{
 
    }

}


module.exports = BookRepository;