import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { z } from "zod";

const Home = () => {
  type Usertype = {
    [x: string]: any;
  }[];

  const datas = useLoaderData() as Usertype;

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-full h-11 mt-5 flex justify-between">
        <p className="text-3xl ml-8">トーク</p>
        <div className="w-96 mr-5 flex justify-between">
          <p className="text-3xl">🎈</p>
          <p className="text-3xl">🧶</p>
          <p className="text-3xl">🧧</p>
          <p className="text-3xl">🦺</p>
        </div>
      </div>

      <div className="w-80 h-9 relative">
        <input
          className="h-full w-full pl-9 outline-none border-[1px] border-black rounded-lg"
          type="text"
          placeholder="検索"
        />
        <CiSearch className="text-3xl absolute top-1 left-1" />
      </div>

      <div className="w-80 h-[420px] bg-red-600 mt-8 flex flex-col border-x-[1px] border-b-[1px] border-black rounded-sm ">
        {datas.map((data) => {
          return (
            <div
              key={data.id}
              className="w-full h-[42px] border-t-[1px] border-black flex items-center"
            >
              <div className="w-[38px] h-[38px] bg-black ml-2 rounded-3xl"></div>
              <Link
                className="ml-5 text-2xl"
                to={`personal/${data.username}/${data.id}`}
              >
                {data.username}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
