import React, { useContext } from "react";
import { BookContextApi } from "../../context/BookContextApi";
import BookCard from "../ui/BookCard";

const ListedWishList = () => {
  const { wishList } = useContext(BookContextApi);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2">
      {wishList.map((book, ind) => (
        <BookCard key={ind} book={book} />
      ))}
    </div>
  );
};

export default ListedWishList;
