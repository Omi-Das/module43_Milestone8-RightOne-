export const generateStaticParams = async() => {
    const res = await fetch('http://localhost:5000/books')
    const books = await  res.json()

    //no=> [1,2,3,4] for return books.map(book => book.id)

    //right=> [{bookId: 1}, {bookId: 2}, {bookId: 3}, ...] for
    return books.slice(1,3).map(book => ({ bookId: book.id}))
    
}
const page = async({params}) => {
    const { bookId } = await params
    
    const res = await fetch(`http://localhost:5000/books/${bookId}`)
    // const book = await res.json()
    const{title, authors, page_count} = await res.json()
    return (
        <div>
            <h2>Book Details: {bookId}</h2>
            <h3>{title}</h3>
            <p>Author: {authors}</p>
            <small>Page Count: {page_count}</small>

        </div>
    );
};

export default page;