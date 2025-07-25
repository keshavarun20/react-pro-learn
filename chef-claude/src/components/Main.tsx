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

  const addIngredients = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
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
        }, 3000);
        return;
      }

      if (ingredients.some((i) => i.toLowerCase() === trimmed.toLowerCase())) {
        setErrorMessage("Ingredient already exists!");
        setShowPopUp((prev) => !prev);
        setTimeout(() => {
          setShowPopUp((prev) => !prev);
          setErrorMessage("");
        }, 3000);
        return;
      }

      if (!isAlpha.test(trimmed)) {
        setErrorMessage("Ingredient must only contain letters");
        setShowPopUp((prev) => !prev);
        setTimeout(() => {
          setShowPopUp((prev) => !prev);
          setErrorMessage("");
        }, 3000);
        return;
      }

      setIngredients((prev) => [...prev, trimmed]);
      console.log("Added:", trimmed);
      event.currentTarget.reset();
    }
  };

  const removeIngredient = (ingredientToRemove: string) => {
    setIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== ingredientToRemove)
    );
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
      {showPopUp && (
        <div className={`pop-up ${showPopUp ? "show" : ""}`}>
          {errorMessage}
        </div>
      )}
    </main>
  );
};

export default Main;
