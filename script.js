function findDrinkOfTheDay() {
    let currentMonth = new Date().getMonth() + 1; 
    // console.log(currentMonth)
    
    let springDrinks = ["Chamomile Tea", "Strawberry Lemonade", "Green Tea"];
    let summerDrinks = ["Iced Coffee", "Iced Tea", "Watermelon Smoothie"];
    let autumnDrinks = ["Ginger Ale", "Apple Cider", "Cinnamon Milk"];
    let winterDrinks = ["Hot Chocolate", "Salep", "Winter Tea"];
    
    let winterDrinkImages = ["hot-chocolate.jpg", "salep.jpg", "winter-tea.jpg"];
    let springDrinkImages = ["chamomile-tea.jpg", "strawberry-lemonade.jpg", "green-tea.jpg"];
    let summerDrinkImages = ["iced-coffee.jpg", "iced-tea.jpg", "watermelon-smoothie.jpg"];
    let autumnDrinkImages = ["ginger-ale.jpg", "apple-cider.jpg", "cinnamon-milk.jpg"];
    
    let randomIndex;

    let box = document.querySelector(".box");
    let title = document.querySelector(".title");
    let img = document.querySelector(".img");
    let extrasText = document.querySelector(".extrasText");
    
    extrasText.textContent = "EXTRAS: ";
    
    if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2) {
        console.log("Winter");
        randomIndex = Math.floor(Math.random() * 3);
        title.textContent = winterDrinks[randomIndex].toUpperCase();
        img.setAttribute("src", `img/winterDrinks/${winterDrinkImages[randomIndex]}`);
        img.style.width = "300px";
        img.style.height = "200px";
        box.style.backgroundColor = "#e0f7fa";
    } else if (currentMonth === 3 || currentMonth === 4 || currentMonth === 5) {
        console.log("Spring");
        randomIndex = Math.floor(Math.random() * 3);
        title.textContent = springDrinks[randomIndex].toUpperCase();
        img.setAttribute("src", `img/springDrinks/${springDrinkImages[randomIndex]}`);
        img.style.width = "300px";
        img.style.height = "200px";
        box.style.backgroundColor = "#e8f5e9";
    } else if (currentMonth === 6 || currentMonth === 7 || currentMonth === 8) {
        console.log("Summer");
        randomIndex = Math.floor(Math.random() * 3);
        title.textContent = summerDrinks[randomIndex].toUpperCase();
        img.setAttribute("src", `img/summerDrinks/${summerDrinkImages[randomIndex]}`);
        img.style.width = "300px";
        img.style.height = "200px";
        box.style.backgroundColor = "#fff9c4";
    } else if (currentMonth === 9 || currentMonth === 10 || currentMonth === 11) {
        console.log("Autumn");
        randomIndex = Math.floor(Math.random() * 3);
        title.textContent = autumnDrinks[randomIndex].toUpperCase();
        img.setAttribute("src", `img/autumnDrinks/${autumnDrinkImages[randomIndex]}`);
        img.style.width = "300px";
        img.style.height = "200px";
        box.style.backgroundColor = "#ffe0b2";
    } else {
        console.log("Invalid Month");
    }
    
    let extras = ["Cinnamon", "Cream", "Chocolate Chips"];
    
    for (let i = 0; i < extras.length; i++) {

        if (i === extras.length - 1) {
            extrasText.textContent += `${extras[i]}`;
        } else {
            extrasText.textContent += `${extras[i]}, `;
        }
    }
}

findDrinkOfTheDay();