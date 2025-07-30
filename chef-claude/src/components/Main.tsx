import { useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../../ai";

const Main = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [showPopUp, setShowPopUp] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [recipe, setRecipe] = useState<string | undefined>("");

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
    }
  };

  const removeIngredient = (ingredientToRemove: string) => {
    setIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  };

  const generateRecipe = async () => {
    try {
      const recipeMarkDown = await getRecipeFromMistral(ingredients);
      setRecipe(recipeMarkDown);
    } catch (err) {
      let message = "Something went wrong.";

      if (err instanceof Error) {
        message = err.message;
      }

      setErrorMessage(message);
      setShowPopUp(true);

      setTimeout(() => {
        setShowPopUp(false);
        setErrorMessage("");
      }, 2000);
    }
  };

  const handleReset = () => {
    setIngredients([]);
    setErrorMessage("");
    setShowPopUp(false);
    setRecipe("");
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
        <button type="button" className="reset-button" onClick={handleReset}>
          ⟳
        </button>
      </form>
      <div className="fixed-container">
        <div className="inner-ingredients">
          {ingredients.length > 0 && (
            <IngredientsList
              ingredients={ingredients}
              list={list}
              generateRecipe={generateRecipe}
            />
          )}
          {recipe && <Recipe recipe={recipe} />}
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
