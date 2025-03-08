"use client";

import Layout from "@/app/layout/Layout";
import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { PropagateLoader } from "react-spinners";
import RowDropdown from "./RowDropdown";
import toast, { Toaster } from "react-hot-toast";

function Table({ data, perPage, setPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdown, setDropdown] = useState(false);
  const [bookData, setBookData] = useState([]);
  const totalPages = Math.ceil(bookData.length / perPage);
  // console.log(totalPages);
  console.log(bookData.length);
  useEffect(() => {
    if (data && data.data) {
      setBookData(data.totalCount);
    }
  }, [data]);

  const jumpHandler = (e) => {
    const input = e.target.value;
    if (input > totalPages) {
      toast.error(`page must be between 1 to ${totalPages}`);
      setCurrentPage(1);
    } else if (input === "") {
      setCurrentPage(1);
    } else {
      setCurrentPage(input);
    }
    setEditingCategoryId(null);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    setEditingCategoryId(null);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const dropdownHandler = () => {
    setDropdown((prev) => !prev);
  };

  const handleRowsChange = (newRows) => {
    setPerPage(newRows);
    setDropdown(false);
  };

  const allHandler = () => {
    // setShowAll((prev) => !prev);
    // if (!showAll) {
    //   setSearchTerm(info);
    // } else {
    //   setFilteredCategories(info)
    // }
  };

  return (
    <Layout>
      <div className="flex justify-self-start flex-1 min-w-0 max-w-full mx-auto px-4">
        <Sidebar />
        <div className="shadow-md overflow-auto max-h-fit md:min-w-max max-w-[900] mx-auto w-screen rounded-b-2xl">
          <div className="overflow-auto flex flex-col h-fit min-h-fit text-slate-700 bg-white shadow-t-2xl rounded-xl">
            {/* <div className="flex mx-4 mt-4 text-slate-700 rounded-none">
              <h3 className="text-lg font-semibold text-slate-800">
                Book Categories
              </h3>
              <button
                onClick={allHandler}
                className="justify-items-end ml-auto bg-ocean text-white px-2 rounded"
              >
                {showAll ? "see less" : "see all"}
              </button>
            </div> */}

            <div className="p-0">
              {bookData.length > 0 ? (
                <table className="w-full mt-4 text-left table-auto min-w-max">
                  <thead>
                    <tr>
                      <th className="p-4 border-y border-slate-200">
                        <div className="flex justify-between items-center w-full">
                          <div className="flex border-[1px] border-solid border-slate-200 p-2 rounded"></div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookData.map((item) => (
                      <tr key={item.id} className="border-b border-slate-200">
                        <td className="p-4 flex justify-between items-center">
                          <div className="flex space-x-2">
                            <p>{item.title}</p>
                            {/* <div className="flex gap-2">
                              <button
                                className="px-3 py-1 flex items-center justify-center hover:bg-green-200 rounded"
                              ></button>
                              <button
                                className="px-3 py-1 flex items-center justify-center hover:bg-yellow-100 rounded"
                              >
                                Cancel
                              </button>
                            </div> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex justify-center items-center h-64">
                  <PropagateLoader size={20} color="#023047" />
                </div>
              )}
            </div>

            <div className="text-nowrap bg-blue-950 bg-opacity-10 border-[1px] border-blue-950 border-opacity-15 rounded-b-2xl shadow-2xl">
              <div className="flex items-center justify-between p-3">
                <div className="flex relative">
                  <p className="text-sm text-slate-500 pr-3 pt-2.5">
                    Page {currentPage} of {totalPages}
                  </p>
                  <div className="group rounded border border-slate-300 pr-2 h-fit py-1 mt-1.5   pl-1 m-1 lg:px-3 text-center text-xs font-semibold text-slate-600 transition-all ">
                    <p className="group-hover:text-ocean group-focus-within:text-ocean text-sm text-slate-500">
                      jump to page
                      <input
                        type="number"
                        placeholder=" "
                        className="pl-4 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-10 outline-none bg-inherit"
                        onChange={jumpHandler}
                      />
                    </p>
                  </div>

                  <div className="relative flex group rounded border border-slate-300 text-nowrap h-fit py-1 mt-1 text-center text-xs font-semibold text-slate-600 transition-all hover:cursor-pointer">
                    <p
                      onClick={dropdownHandler}
                      className="group-hover:text-ocean group-focus-within:text-ocean text-sm text-slate-500 pl-1"
                    >
                      rows
                      <span> {perPage}</span>
                    </p>
                    <p>
                      <MdArrowDropUp size={20} />
                    </p>
                    {dropdown && (
                      <div className="absolute bottom-10 mx-auto left-6 shadow-lg rounded mt-1 z-50">
                        <RowDropdown onSelect={handleRowsChange} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    disabled={currentPage === 1}
                    onClick={handlePrevious}
                  >
                    Previous
                  </button>
                  <button
                    className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </Layout>
  );
}

export default Table;
