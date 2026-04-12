import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

//BookCard শুধু URL-এ একটা value রেখে গেছে, আর BookDetails সেটা URL থেকে পড়ছে।

//bookcard.jsx কে এই পেজের এক্সেস দেয়া আছে, bookId পেরামিটারে জেসনের bookID key এর value টা পাস করে। জেসন থেকে পাওয়া bookId টা সহজে মনে রাখার জন্য এই ডিটেইল পেইজেও destructure করে BookCard যে bookId টা URL-এ পাঠিয়েছে, useParams() hook দিয়ে সেই URL থেকে bookId তুলে এনে bookId নামক variable-এ রাখলাম।
const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const navigate = useNavigate();

  const expectedBook = books.find((book) => book.bookId === parseInt(bookId));

  console.log(expectedBook);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto p-6 mt-6">
        <figure className="lg:w-1/2 shrink-0">
          <img
            src={expectedBook.image}
            alt="Album"
            className="h-125 w-full object-contain"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title">{expectedBook.bookName}</h2>
          <p>by {expectedBook.author}</p>
          <div className="border-t border-dashed border-gray-300 "></div>
          <div>{expectedBook.category}</div>
          <div className="border-t border-dashed border-gray-300 "></div>
          <p>
            <span className="font-semibold">Review:</span> {expectedBook.review}
          </p>
          <div>
            {" "}
            <span className="font-semibold">Tags:</span>
            {expectedBook.tags.map((tagItem, ind) => (
              <div key={ind} className="badge badge-soft badge-success">
                {tagItem}
              </div>
            ))}
          </div>
          <div className="border-t border-dashed border-gray-300 "></div>
          <p>
            <span className="font-semibold">Number of pages: </span>
            {expectedBook.totalPages}
          </p>
          <p>
            <span className="font-semibold">Publisher:</span>{" "}
            {expectedBook.publisher}
          </p>
          <p>
            <span className="font-semibold">Yerar of Publishing:</span>{" "}
            {expectedBook.yearOfPublishing}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {expectedBook.rating}
          </p>
          <div className="card-actions start pt-4">
            <button className="btn">Read</button>
            <button className="btn btn-success">Wish List</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-end mt-6 ">
        <button onClick={() => navigate("/")} className="btn btn-accent">
          Go to Main Page
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
