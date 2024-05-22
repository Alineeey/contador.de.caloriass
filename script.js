document.addEventListener('DOMContentLoaded', function() {
    const foodInput = document.getElementById('food-input');
    const weightInput = document.getElementById('weight-input');
    const addBtn = document.getElementById('add-btn');
    const foodList = document.getElementById('food-list');
    const totalCaloriesDisplay = document.getElementById('total-calories');
    const dailyGoalDisplay = document.getElementById('daily-goal');
    const waterIntakeDisplay = document.getElementById('water-intake');
    const waterBtn = document.getElementById('water-btn');

    let totalCalories = 0;
    let waterIntake = 0;
    const dailyGoal = 2000; // Define a meta diária de calorias

    // Base de dados fictícia de alimentos
    const foodDatabase = [
        { name: "Maçã", type: "fruta", caloriesPer100g: 52 },
        { name: "Banana", type: "fruta", caloriesPer100g: 89 },
        { name: "Abacate", type: "fruta", caloriesPer100g: 160 },
        { name: "Tomate", type: "fruta", caloriesPer100g: 18 },
        { name: "Melancia", type: "fruta", caloriesPer100g: 30 },
        { name: "Laranja", type: "fruta", caloriesPer100g: 47 },
        { name: "Cenoura", type: "vegetais", caloriesPer100g: 41 },
        { name: "Espinafre", type: "vegetais", caloriesPer100g: 23 },
        { name: "Brócolis", type: "vegetais", caloriesPer100g: 35 },
        { name: "Pão Integral", type: "grãos e carboidratos", caloriesPer100g: 80 },
        { name: "Pão de sal", type: "grão e carboidratos", caloriesPer100g: 260 },
        { name: "Arroz", type: "grãos e carboidratos", caloriesPer100g: 130 },
        { name: "Arroz integral", type: "grãos", caloriesPer100g: 110 },
        { name: "Aveia", type: "grãos e carboidratos", caloriesPer100g: 375 },
        { name: "Quinoa", type: "grãos e carboidratos", caloriesPer100g: 120 },
        { name: "Batata doce", type: "grãos e carboidratos", caloriesPer100g: 90 },
        { name: "Batata", type: "grãos e calorias", caloriesPer100g: 87 },
        { name: "Frango", type: "proteina", caloriesPer100g: 165 },
        { name: "Salmão", type: "proteina", caloriesPer100g: 206 },
        { name: "Ovos", type: "proteina", caloriesPer100g: 155 },
        { name: "Feijão", type: "proteina", caloriesPer100g: 132},
        { name: "Lentilhas", type: "proteina", caloriesPer100g: 166 },
        { name: "Iogurte", type: "laticínios", caloriesPer100g: 67 },
        { name: "Leite desnatado", type: "laticínios", caloriesPer100g: 35 },
        { name: "Leite Integral", type: "laticínios", caloriesPer100g: 61 },
        { name: "Requeijão Ligth", type: "laticínios", caloriesPer100g: 160 },
        { name: "Amêndoas", type: "nozes e sementes", caloriesPer100g: 576},
        { name: "Castanha de Caju", type: "nozes e sementes", caloriesPer100g: 553 },
        { name: "Macarrão cozido", type: "grãos e carboidratos", caloriesPer100g: 158 },
        { name: "Macarrão Integral cozido", type: "grãos", caloriesPer100g: 125 },
        { name: "Pão Francês", type: "grãos e carboidratos", caloriesPer100g: 299 },
        { name: "Leite de Amêndoas", type: "laticínios alternativos", caloriesPer100g: 13 },
        { name: "Leite de Soja", type: "laticínios alternativos", caloriesPer100g: 33 },
        { name: "Tofu", type: "proteína vegetal", caloriesPer100g: 76 },
        { name: "Aveia em Flocos", type: "grãos e carboidratos", caloriesPer100g: 389 },
        { name: "Cereal Matinal", type: "grãos e carboidratos", caloriesPer100g: 375 },
        { name: "Amendoim", type: "nozes e sementes", caloriesPer100g: 567 },
        { name: "Castanha do Pará", type: "nozes e sementes", caloriesPer100g: 656 },
        { name: "Coco Ralado", type: "fruta desidratada", caloriesPer100g: 354 },
        { name: "Queijo Parmesão", type: "laticínios", caloriesPer100g: 420 },
        { name: "Queijo Mussarela", type: "laticínios", caloriesPer100g: 300 },
        { name: "Queijo Prato", type: "laticínios", caloriesPer100g: 350 },
        { name: "Queijo Minas", type: "laticínios", caloriesPer100g: 300 },
        { name: "Manteiga", type: "laticínios", caloriesPer100g: 717 },
        { name: "Azeite de Oliva", type: "gorduras", caloriesPer100g: 884 },
        { name: "Óleo de Coco", type: "gorduras", caloriesPer100g: 862 },
        { name: "Óleo de Canola", type: "gorduras", caloriesPer100g: 884 },
        { name: "Margarina", type: "gorduras", caloriesPer100g: 717 },
        { name: "Creme de Leite", type: "laticínios", caloriesPer100g: 345 },
        { name: "Pepino", type: "vegetais", caloriesPer100g: 15 },
        { name: "Pimentão", type: "vegetais", caloriesPer100g: 20 },
        { name: "Cebola", type: "vegetais", caloriesPer100g: 40 },
        { name: "Alho", type: "vegetais", caloriesPer100g: 149 },
        { name: "Atum cozido", type: "proteina", caloriesPer100g: 137 },
        { name: "Sardinha cozida", type: "proteina", caloriesPer100g: 208 },
        { name: "Carne de Vaca (Patinho) cozida", type: "proteina", caloriesPer100g: 250 },
        { name: "Carne de Porco (Lombo) cozida", type: "proteina", caloriesPer100g: 242 },
        { name: "Carne de Frango (Peito) cozida", type: "proteina", caloriesPer100g: 165 },
        { name: "Carne de Cordeiro (Coxão) cozida", type: "proteina", caloriesPer100g: 258 },
        { name: "Melaço", type: "adoçantes", caloriesPer100g: 290 },
        { name: "Mel", type: "adoçantes", caloriesPer100g: 304 },
        { name: "Açúcar Mascavo", type: "adoçantes", caloriesPer100g: 377 },
        { name: "Açúcar Refinado", type: "adoçantes", caloriesPer100g: 387 },
        { name: "Chocolate Amargo (70% cacau)", type: "doces", caloriesPer100g: 604 },
        { name: "Chocolate ao Leite", type: "doces", caloriesPer100g: 535 },
        { name: "Chocolate Branco", type: "doces", caloriesPer100g: 539 },
        { name: "Biscoito de Água e Sal", type: "snacks", caloriesPer100g: 445 },
        { name: "Biscoito de Polvilho", type: "snacks", caloriesPer100g: 498 },
        { name: "Batata Frita", type: "snacks", caloriesPer100g: 536 },
        { name: "Pipoca", type: "snacks", caloriesPer100g: 382 },
    ];

    // Função para filtrar os alimentos da base de dados
    function filterFoods(input) {
        return foodDatabase.filter(food => {
            const regex = new RegExp('^' + input, 'gi'); // Adiciona ^ para garantir que a correspondência comece no início do nome
            return food.name.match(regex);
        });
    }

    // Função para mostrar opções de autocompletar
    function showOptions(options) {
        foodList.innerHTML = '';
        options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('autocomplete-option');
            optionElement.textContent = option.name;
            optionElement.addEventListener('click', function() {
                foodInput.value = option.name;
                foodList.innerHTML = '';
            });
            foodList.appendChild(optionElement);
        });
    }

    // Evento de entrada para o campo de entrada de alimento
    foodInput.addEventListener('input', function() {
        const inputValue = this.value.trim();
        if (inputValue === '') {
            foodList.innerHTML = '';
            return;
        }
        const filteredFoods = filterFoods(inputValue);
        showOptions(filteredFoods);
    });

    // Evento de clique fora do campo de entrada para limpar as opções de autocompletar
    document.addEventListener('click', function(event) {
        if (!foodList.contains(event.target) && event.target !== foodInput) {
            foodList.innerHTML = '';
        }
    });

    addBtn.addEventListener('click', function() {
        const foodName = foodInput.value.trim();
        const weight = parseInt(weightInput.value.trim());

        if (foodName !== '' && !isNaN(weight) && weight > 0) {
            const food = foodDatabase.find(item => item.name.toLowerCase() === foodName.toLowerCase());

            if (food) {
                const calories = (food.caloriesPer100g * weight) / 100;

                const foodItem = document.createElement('div');
                foodItem.classList.add('food-item');
                foodItem.innerHTML = `<strong>${food.name}</strong> (${weight}g) - ${calories.toFixed(2)} cal <span class="remove-btn">X</span>`;
                foodList.appendChild(foodItem);

                totalCalories += calories;
                totalCaloriesDisplay.textContent = totalCalories;

                foodInput.value = '';
                weightInput.value = '';

                const removeBtn = foodItem.querySelector('.remove-btn');
                removeBtn.addEventListener('click', function() {
                    totalCalories -= calories;
                    totalCaloriesDisplay.textContent = totalCalories;
                    foodList.removeChild(foodItem);
                });
            } else {
                alert("Alimento não encontrado na base de dados!");
            }
        } else {
            alert("Por favor, preencha o nome do alimento e o peso corretamente!");
        }
    });

    waterBtn.addEventListener('click', function() {
        waterIntake += 250;
        waterIntakeDisplay.textContent = waterIntake;
    });

    // Exibe a meta diária de calorias
    dailyGoalDisplay.textContent = dailyGoal;
});
