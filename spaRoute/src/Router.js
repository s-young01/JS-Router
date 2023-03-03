import { routes } from "../contents/routerInfo.js";

export default function Router($container) {
    this.$container = $container;
    // routes배열을 돌며 path속성이 location.pathname과 일치하는 객체를 찾아서 리턴
    const findRoute = () => {
        const matchRoute = routes.find(route => route.path.test(location.pathname));
        const TargetPage = matchRoute.element;
        new TargetPage(this.$container);
    }
    const init = () => {
        window.addEventListener('historyChange', (e) => {
            const { to } = e.detail;
            // history에는 각각의 경로가 담겨짐 (동시에 location.pathname 변경)
            history.pushState(null, "", to)
            findRoute();
        })
        window.addEventListener("popstate", () => {
            findRoute();
        })
    }
    init();
    findRoute();
}