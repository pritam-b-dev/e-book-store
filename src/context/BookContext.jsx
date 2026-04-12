import React, { useState } from "react";
import { BookContextApi } from "./BookContextApi";

const BookContext = ({ children }) => {
  const [storeBook, setStoreBook] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleWishList = (currentBook) => {
    const isExistInReadList = storeBook.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      alert("the book is in your read list!");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      alert("alredy exist!");
    } else {
      setWishList([...wishList, currentBook]);
      alert("book successfully added to your Wish list");
    }
  };

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storeBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      alert("alredy exist!");
    } else {
      setStoreBook([...storeBook, currentBook]);
      alert("book successfully added to your read list");
    }
  };
  const data = {
    storeBook,
    setStoreBook,
    handleMarkAsRead,
    handleWishList,
    wishList,
    setWishList,
  };
  return (
    <BookContextApi.Provider value={data}>{children}</BookContextApi.Provider>
  );
};

export default BookContext;
