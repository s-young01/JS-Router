export default function Shop($container) {
    this.$container = $container;
    this.setState = () => {
        this.render();
    }
    this.render = () => {
        this.$container.innerHTML = `
            <main class='shopPage'>
                샵페이지 입니다.
            </main>
        `;
    }
    this.render();
}