const btnPrev = document.querySelector(".btn_prev");

if (btnPrev) {
    btnPrev.addEventListener("click", () => {
        history.back();
    });
}
