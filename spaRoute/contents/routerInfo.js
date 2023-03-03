import Main from "../src/pages/Main.js";
import Post from "../src/pages/Post.js";
import Shop from "../src/pages/Shop.js";

// 정규표현식
// 1. const re = /표현식 작성/
// 2. const re2 = new RegExp(표현식작성)

// ^ : 문자의 시작, $ : 문자의 끝
export const routes = [
    { path: /^\/$/, element: Main },
    { path: /^\/post\/[\w]+$/, element: Post },
    { path: /^\/shop$/, element: Shop },
]