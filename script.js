function flipCoin() {
    const coin = document.getElementById("coin");
    const status = document.getElementById("status");
    const button = document.querySelector("button");

    button.disabled = true;

    status.innerHTML = 'Flipping<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';

    // Random result
    const isHeads = Math.random() < 0.5;

    // Remove previous animation
    coin.style.animation = 'none';
    coin.offsetHeight; // trigger reflow

    // Determine final rotation
    const finalRotation = isHeads
        ? 3600
        : 3780;

    // Apply animation
    coin.style.animation = `
        flipResult 3s cubic-bezier(0.17, 0.67, 0.35, 1) forwards
    `;

    coin.style.setProperty('--final-rotation', `${finalRotation}deg`);

    // Finish result
    setTimeout(() => {
        status.textContent = isHeads ? "Heads" : "Tails";
        button.disabled = false;
    }, 3000);
}