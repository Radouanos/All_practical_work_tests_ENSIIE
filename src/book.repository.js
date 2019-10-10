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
        return this.db.get('books').find({name:bookName}).value();
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
    getCountBookAddedByMonth(bookName)
    {
        const results = [];
        let year, month, count=1, count_cumulative=0, date='';
        const TotalBooks = this.db.get('books').filter({name: bookName}).value(); // recuperer les livres avec le nom bookname
        if(TotalBooks.length === 0)
        {
            throw "livre n\'existe pas";
        }
        let length=TotalBooks.length;

        for(let x=0 ; x<length ; x++){

            let book = TotalBooks[x];

            date = book.added_at.split("-");
            year = date[0];
            month = parseInt(date[1])+1;
            if(results.filter(result => result.year === year && result.month === month).length !== 0){
                let index = results.findIndex(result => result.year === year && result.month === month);
                count_cumulative += 1;
                results[index]["count"] +=1;
                results[index]["count_cumulative"] = count_cumulative;
            }
            else
            {
                count_cumulative += 1;
                results.push({ year, month, count, count_cumulative});
            }
        }
        return results;
    }

}


module.exports = BookRepository;