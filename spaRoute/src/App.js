import Router from "./Router.js";
import { navigate } from "./utills/navigate.js";

export default function App({ target }) {
    this.$container = target;
    const init = () => {
        document.querySelector(".navbar").addEventListener("click", (e) => {
            // 기존 이벤트 제거 
            e.preventDefault();
            // 기존url을 빈 문자열로 바꿨다.(새로 만든 url만 남아있음)
            const targetURL = e.target.href.replace("http://127.0.0.1:5500", "");
            console.log(targetURL);
            navigate(targetURL);
        });
        new Router(this.$container);
    }
    init();
}