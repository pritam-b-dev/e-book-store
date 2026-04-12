import React, { useContext } from "react";
import { BookContextApi } from "../../context/BookContextApi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/listed books/ListedReadList";
import ListedWishList from "../../components/listed books/ListedWishList";

const Books = () => {
  const { storeBook, wishList } = useContext(BookContextApi);

  return (
    <div className="container mx-auto">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList />
        </TabPanel>
        <TabPanel>
          <ListedWishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
