function flipCoin() {

    const coin = document.getElementById("coin");
    const status = document.getElementById("status");
    const button = document.querySelector("button");

    button.disabled = true;

    status.textContent = "Flipping...";

    // Spin animation
    coin.classList.add("spinning");

    // Random result
    const isHeads = Math.random() < 0.5;

    setTimeout(() => {

        // CHANGE IMAGE AFTER SPIN
        if (isHeads) {
            coin.src = "Heads.png";
            status.textContent = "Heads";
        } else {
            coin.src = "Tails.png";
            status.textContent = "Tails";
        }

        coin.classList.remove("spinning");

        button.disabled = false;

    }, 3000);
}