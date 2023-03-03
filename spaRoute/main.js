import App from "./src/App.js";

// DOMContentLoaded : 초기 html문서가 다 준비 됐을 때 실행시키는 이벤트
window.addEventListener("DOMContentLoaded", () => {
    new App({ target: document.querySelector("#app") });
})