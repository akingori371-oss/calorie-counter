const foodInput = document.getElementById("food-name");
const caloriesInput = document.getElementById("calories");
const addBtn = document.getElementById("add-btn");
const total = document.getElementById("total-count");
const reset = document.getElementById("reset-btn");

 const food = foodInput.value;
const calories = caloriesInput.value;
  const list = document.createElement("li");

addBtn.addEventListener("click", () => {
     const food = foodInput.value;
    const calories = caloriesInput.value;
   

    if (!food) {
        alert("Kindly write something in the input");
        return;
    }

    const list = document.createElement("li");
    list.textContent = `${food} - ${calories} calories`;

    total.appendChild(list);
});

reset.addEventListener(`click`, () => {
   foodInput.value = ""
   caloriesInput.value = ""
   total.innerHTML = ""
})

document.cookie = `food=${food}`