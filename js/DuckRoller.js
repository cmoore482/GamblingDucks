function pullLever() {
    const lever = document.getElementById("LeverContainer");

    // Add animation class
    lever.classList.add("lever-pulled");

    // Trigger duck roll slightly after pull
    setTimeout(() => {
        fetchData();
    }, 300);

    // Reset lever
    setTimeout(() => {
        lever.classList.remove("lever-pulled");
    }, 700);
}


function fetchData() {
    const slotMachine = document.getElementById("SlotMachine");

    // 1 in 4 chance to match all ducks
    const forceMatch = Math.random() < 0.25;

    let matchedDuckURL = null;

    if (forceMatch) {
        matchedDuckURL = "https://random-d.uk/api/v2/randomimg?" + Date.now();
    }

    for (let i = 1; i <= 3; i++) {
        const img = document.getElementById("DuckImage" + i);

        // Restart spin animation
        img.classList.remove("spin");
        void img.offsetWidth;
        img.classList.add("spin");

        img.src = forceMatch
            ? matchedDuckURL
            : "https://random-d.uk/api/v2/randomimg?" + Date.now() + i;
    }

    // Jackpot flash if matched
    if (forceMatch) {
        slotMachine.classList.add("jackpot");

        // Remove class after animation so it can trigger again
        setTimeout(() => {
            slotMachine.classList.remove("jackpot");
        }, 1000);
    }
}
