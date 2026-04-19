

const Book = ({book}) => {
    const {title, authors} = book
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>by {authors}</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Book;