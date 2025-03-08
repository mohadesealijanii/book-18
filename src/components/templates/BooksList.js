"use client";

import React, { useEffect, useState } from "react";
import Table from "../module/Table";
import Cookies from "js-cookie";

function BooksList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookList, setBookList] = useState([]);
  const [perPage, setPerpage] = useState(10000);

  const token = Cookies.get("authToken");

  const fetchBooks = async () => {
    try {
      console.log("start fetching");
      const res = await fetch("https://stg-core.bpapp.net/api/Book/GetBooks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          pageNumber: currentPage,
          pageSize: perPage,
        }),
      });
      const data = await res.json();
      console.log(data);
      setBookList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div>
      <Table data={bookList} perPage={perPage} setPerPage={setPerpage}  />
    </div>
  );
}

export default BooksList;
