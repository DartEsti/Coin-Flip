function flipCoin() {
    const coin = document.getElementById("coin");
    const status = document.getElementById("status");
    const button = document.querySelector("button");

    button.disabled = true;

    status.innerHTML = 'Flipping<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';

    // Start animation
    coin.style.animation = "none";
    coin.offsetHeight;

    coin.style.animation = "spin 3s ease-in-out";

    // Random result
    const isHeads = Math.random() < 0.5;

    setTimeout(() => {
        if (isHeads) {
            coin.src = "Heads.png";
            status.textContent = "Heads";
        } else {
            coin.src = "Tails.png";
            status.textContent = "Tails";
        }

        button.disabled = false;
    }, 3000);
}