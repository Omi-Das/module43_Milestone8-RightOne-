import Book from "@/components/Book";
//cache: no-store -> It will fetch the data on every request, and it will not cache the data.(SSR)
//cache: force-cache -> It will cache the data, and it will not fetch the data on every request. (SSG)
//revalidate:20 -> It will cache the data for 20 seconds, and it will fetch the data after 20 seconds. (ISR)

const BooksPage = async() => {
    const res = await fetch('http://localhost:5000/books', {next: { revalidate: 9}})
    const books = await res.json()
    return (
        <div>
            <h2>Books: {books.length}</h2>
          <div className="grid grid-cols-3 gap-4">
            {
                books.map(book => <Book key={book.id} book={book}/>)
            }
          </div>
        </div>
    );
};

export default BooksPage;