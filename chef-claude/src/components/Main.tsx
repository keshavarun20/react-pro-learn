import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [showPopUp, setShowPopUp] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const list = ingredients.map((ingredient) => (
    <li
      className="list"
      key={ingredient}
      onClick={() => removeIngredient(ingredient)}
    >
      {ingredient}
    </li>
  ));

  const addIngredients = (formData: FormData) => {
    const newIngredient = formData.get("ingredient");

    if (typeof newIngredient === "string") {
      const trimmed = newIngredient.trim();
      const isAlpha = /^[a-zA-Z\s]+$/;

      if (trimmed === "") {
        setErrorMessage("No valid ingredient entered");
        setShowPopUp((prev) => !prev);
        setTimeout(() => {
          setShowPopUp((prev) => !prev);
          setErrorMessage("");
        }, 2000);
        return;
      }

      if (ingredients.some((i) => i.toLowerCase() === trimmed.toLowerCase())) {
        setErrorMessage("Ingredient already exists!");
        setShowPopUp((prev) => !prev);
        setTimeout(() => {
          setShowPopUp((prev) => !prev);
          setErrorMessage("");
        }, 2000);
        return;
      }

      if (!isAlpha.test(trimmed)) {
        setErrorMessage("Ingredient must only contain letters");
        setShowPopUp((prev) => !prev);
        setTimeout(() => {
          setShowPopUp((prev) => !prev);
          setErrorMessage("");
        }, 2000);
        return;
      }

      const capitalized = (str: string) =>
        str
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ");

      const formatted = capitalized(trimmed);
      setIngredients((prev) => [...prev, formatted]);
      console.log("Added:", trimmed);
    }
  };

  const removeIngredient = (ingredientToRemove: string) => {
    setIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  };

  return (
    <main className="ingredient-section">
      <form action={addIngredients} className="ingredient-form">
        <input
          className="ingredient-input"
          aria-label="Add Ingredient"
          type="text"
          placeholder="e.g. Carrot"
          name="ingredient"
        />
        <button className="add-ingredient-button">+ Add Ingredient</button>
      </form>
      <div className="fixed-container">
        <div className="inner-ingredients">
          {ingredients.length > 0 && (
            <section className="ingredients-list">
              <h2>Ingredients on hand:</h2>
              <ul>{list}</ul>
              <div className="recipe-container">
                <div>
                  <h3>Ready for a Recipe?</h3>
                  <p>Generate a recipe from your list if ingredients</p>
                </div>
                <button>Get a Recipe</button>
              </div>
            </section>
          )}
        </div>
      </div>
      {showPopUp && (
        <div className={`pop-up ${showPopUp ? "show" : ""}`}>
          {errorMessage}
        </div>
      )}
    </main>
  );
};

export default Main;
