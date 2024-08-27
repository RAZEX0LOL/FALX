document.addEventListener("DOMContentLoaded", function() {
    const descriptionDiv = document.getElementById("description");
    const items = document.querySelectorAll("main ul li");

    // Функция для обновления содержимого
    function updateDescription(text) {
        descriptionDiv.innerHTML = `<div class="text-2xl font-medium leading-10 mt-5 text-zinc-900 text-opacity-50 max-md:mt-10 max-md:max-w-full"><p>${text}</p></div>`;
    }

    // Начальный текст
    updateDescription("Пожалуйста, наведите курсор на элементы справа, чтобы увидеть детали.");

    items.forEach(item => {
        item.addEventListener("mouseenter", function() {
            const text = this.getAttribute("data-description");
            updateDescription(text);
        });
    });
});