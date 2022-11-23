function setupTabs() {
    document.querySelectorAll('.tabs__button').forEach(button => {
        button.addEventListener('click', () => {
            const sidebar = button.parentElement;
            const tabsContainer = sidebar.parentElement;
            const tabsNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabsNumber}"]`)

            sidebar.querySelectorAll('.tabs__button').forEach(button => {
                button.classList.remove("tabs__button--active");
            });

            tabsContainer.querySelectorAll('.tabs__content').forEach(tab => {
                tab.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();

    document.querySelector(".tabs").querySelector(".tabs__sidebar .tabs__button").click();
});