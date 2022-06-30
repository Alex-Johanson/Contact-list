window.addEventListener('load', () => {
    const form = document.querySelector("#new-contact-form");    
    const input = document.querySelector("#new-contact-input", "#new-number-input");
    const list_el = document.querySelector("#users");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const users = input.value;

        if (!users) {
            alert("Пожалуйста заполните поле");
            return;
        }

        const user_el = document.createElement("div");
        user_el.classList.add("user");

        const user_content_el = document.createElement("div");
        user_content_el.classList.add("content");
        user_content_el.innerText = user;

        user_el.appendChild(user_el);

    })
})