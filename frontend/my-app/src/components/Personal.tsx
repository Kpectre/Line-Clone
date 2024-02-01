import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { z } from "zod";
import useSWR from "swr";

async function fetcher(key: string) {
  return fetch(key, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

const Personal = () => {
  const params = useParams();
  const ref = useRef<HTMLInputElement>(null);
  const [log, setlog] = useState<string[]>([]);
  const sendData = () => {};

  const { data, error, isLoading } = useSWR(
    `https://line-clone.onrender.com/posts/${params.id}}`,
    fetcher
  );

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-between">
      <div className="w-full h-11 mt-5 flex justify-between">
        <div className="h-full flex ml-8 items-center">
          <Link onClick={() => sendData()} to={"/"} className="text-4xl">
            {"<"}
          </Link>
          <p className="ml-3 text-3xl">{params.username}</p>
        </div>

        <div className="w-96 h-full mr-5 flex justify-between">
          <p className="text-3xl">🎈</p>
          <p className="text-3xl">🧶</p>
          <p className="text-3xl">🧧</p>
          <p className="text-3xl">🦺</p>
        </div>
      </div>

      <div
        id="logbox"
        className="w-96  bg-red-300 border-[1px] border-black flex flex-col items-center"
        style={{ height: "320px" }}
      >
        {data
          ? data.data.map((value: string, index: number) => {
              return (
                <p key={index} className="h-[30px] text-[20px] ">
                  {value}
                </p>
              );
            })
          : null}
      </div>

      <form className=" w-42 h-32 mb-2 flex flex-col items-center">
        <input
          className="w-4/5 border-[1px] mt-2 border-black outline-none"
          type="text"
          ref={ref}
        />
        <button
          onClick={(e) => {
            e.preventDefault();

            const logbox = document.getElementById("logbox");
            if (ref.current) {
              const valueschema = z.string().min(1);
              const result = valueschema.safeParse(ref.current.value);
              if (!result.success) {
                alert("文字を入力してください");
                return;
              }

              const string = ref.current.value;
              setlog((prev) => ({ ...prev, string }));
            }

            if (logbox) {
              if (logbox.childElementCount + 1 >= 5) {
                logbox.style.height =
                  String(Number(logbox.style.height.replace("px", "")) + 30) +
                  "px";
              }
            }
          }}
          className="bg-blue-500 w-14 mt-2 text-white rounded-xl"
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default Personal;
