const Main = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const list = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const addIngredients = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (typeof newIngredient === "string" && newIngredient.trim() !== "") {
      ingredients.push(newIngredient);
      console.log(ingredients);
    } else {
      console.log("No valid ingredient entered");
    }
  };
  return (
    <main className="ingredient-section">
      <form onSubmit={addIngredients} className="ingredient-form">
        <input
          className="ingredient-input"
          aria-label="Add Ingredient"
          type="text"
          placeholder="e.g. Carrot"
          name="ingredient"
        />
        <button className="add-ingredient-button">+ Add Ingredient</button>
      </form>
      <ul>{list}</ul>
    </main>
  );
};

export default Main;
