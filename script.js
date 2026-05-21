function flipCoin() {

    const coin = document.getElementById("coin");
    const status = document.getElementById("status");
    const button = document.querySelector("button");

    button.disabled = true;

    status.textContent = "Flipping...";

    // Start animation
    coin.classList.remove("spinning");

    void coin.offsetWidth;

    coin.classList.add("spinning");

    // RANDOM RESULT
    const isHeads = Math.random() < 0.5;

    // SHOW BOTH SIDES DURING FLIP
    let frame = 0;

    const flipInterval = setInterval(() => {

        if (frame % 2 === 0) {
            coin.src = "Heads.png";
        } else {
            coin.src = "Tails.png";
        }

        frame++;

    }, 180);

    // FINAL RESULT
    setTimeout(() => {

        clearInterval(flipInterval);

        if (isHeads) {
            coin.src = "Heads.png";
            status.textContent = "Heads";
        } else {
            coin.src = "Tails.png";
            status.textContent = "Tails";
        }

        coin.classList.remove("spinning");

        button.disabled = false;

    }, 1200);
}