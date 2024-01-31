import axios from "axios";

export const loader = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users");
};
