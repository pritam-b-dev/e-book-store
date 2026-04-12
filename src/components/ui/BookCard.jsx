import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    //BookCard শুধু URL-এ একটা value রেখে গেছে, আর BookDetails সেটা URL থেকে পড়ছে।
    <Link to={`/bookdetails/${book.bookId}`}>
      <div className="card bg-base-100 w-full shadow-sm p-6 space-y-4">
        <figure className="p-6 bg-gray-50">
          <img className="h-55 rounded-lg" src={book.image} />
        </figure>
        <div className="card-actions justify-start">
          {book.tags.map((tagItem, ind) => (
            <div key={ind} className="badge badge-soft badge-success">
              {tagItem}
            </div>
          ))}
        </div>
        <div className="justify-start">
          <h2 className="card-title">{book.bookName}</h2>
          <p>by : {book.author}</p>
        </div>
        <div className="flex justify-between border-t border-dashed border-gray-300 py-4">
          <div className="">{book.category}</div>
          <div>
            <span>{book.rating}</span>
            <span>-star img</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
