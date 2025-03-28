document.addEventListener("DOMContentLoaded", () => {
    const revealButton = document.querySelector(".reveal-button");
    const hiddenMessage = document.querySelector(".hidden-message");

    revealButton.addEventListener("click", () => {
        hiddenMessage.style.display = "block";
        revealButton.style.display = "none"; 
    });

    const heart = document.querySelector(".heart-animation");
    heart.addEventListener("click", () => {
        alert("ليش تضغطين ولج؟ اشاقهه ❤️");
    });

    const giftBoxes = document.querySelectorAll(".gift-box");
    giftBoxes.forEach((giftBox) => {
        giftBox.addEventListener("click", () => {
            if (giftBox.getAttribute("disabled")) {
                
                const effect = document.createElement("div");
                effect.innerText = "هاي اخذتيها يمعوده هههه";
                effect.style.position = "absolute";
                effect.style.color = "#ff4081";
                effect.style.fontSize = "1.2rem";
                effect.style.fontWeight = "bold";
                effect.style.top = `${giftBox.offsetTop - 30}px`;
                effect.style.left = `${giftBox.offsetLeft}px`;
                effect.style.animation = "fadeOut 1.5s ease-out";
                document.body.appendChild(effect);
                setTimeout(() => effect.remove(), 1500);
                return;
            }

            
            giftBox.style.backgroundColor = "#cccccc";
            giftBox.setAttribute("disabled", "true");

            const link = giftBox.getAttribute("data-link");
            window.open(link, "_blank");
        });
    });
});


const style = document.createElement("style");
function createFlowerEffect() {
    const flowerContainer = document.createElement("div");
    flowerContainer.classList.add("flower-container");
    document.body.appendChild(flowerContainer);

    for (let i = 0; i < 30; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.innerHTML = "🌸";
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${3 + Math.random() * 2}s`;
        flowerContainer.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 3000);
    }
}

document.querySelector(".reveal-button").addEventListener("click", createFlowerEffect);



document.head.appendChild(style);
