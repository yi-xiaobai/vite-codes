// console.log("typescipt start");

// let str: string = "111";

// // str = 100;

// console.log(import.meta.env.VITE_PROXY_APP);

// console.log(import.meta.url);

import "./product";
import { forEach } from "lodash";

const mainArr = [];
forEach(mainArr, (elm) => {
  console.log("==>Get elm", elm);
  console.log("==>Get 1111", elm);
});
