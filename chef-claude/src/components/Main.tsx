import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [showPopUp, setShowPopUp] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [recipeShown, setRecipeShown] = useState(false);

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

  const generateRecipe = () => {
    setRecipeShown((prev) => !prev);
  };

  const handleReset = () => {
    setIngredients([]);
    setErrorMessage("");
    setShowPopUp(false);
    setRecipeShown(false);
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
            <section className="ingredients-list">
              <h2>Ingredients on hand:</h2>
              <ul>{list}</ul>
              {ingredients.length > 3 && (
                <div className="recipe-container">
                  <div>
                    <h3>Ready for a Recipe?</h3>
                    <p>Generate a recipe from your list if ingredients</p>
                  </div>
                  <button onClick={generateRecipe}>Get a Recipe</button>
                </div>
              )}
            </section>
          )}
          {recipeShown && (
            <section>
              <h2>Chef Claude Recommends:</h2>
              <article
                className="suggested-recipe-container"
                aria-live="polite"
              >
                <p>
                  Based on the ingredients you have available, I would recommend
                  making a simple a delicious{" "}
                  <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
                </p>
                <h3>Beef Bolognese Pasta</h3>
                <strong>Ingredients:</strong>
                <ul>
                  <li>1 lb. ground beef</li>
                  <li>1 onion, diced</li>
                  <li>3 cloves garlic, minced</li>
                  <li>2 tablespoons tomato paste</li>
                  <li>1 (28 oz) can crushed tomatoes</li>
                  <li>1 cup beef broth</li>
                  <li>1 teaspoon dried oregano</li>
                  <li>1 teaspoon dried basil</li>
                  <li>Salt and pepper to taste</li>
                  <li>
                    8 oz pasta of your choice (e.g., spaghetti, penne, or
                    linguine)
                  </li>
                </ul>
                <strong>Instructions:</strong>
                <ol>
                  <li>
                    Bring a large pot of salted water to a boil for the pasta.
                  </li>
                  <li>
                    In a large skillet or Dutch oven, cook the ground beef over
                    medium-high heat, breaking it up with a wooden spoon, until
                    browned and cooked through, about 5-7 minutes.
                  </li>
                  <li>
                    Add the diced onion and minced garlic to the skillet and
                    cook for 2-3 minutes, until the onion is translucent.
                  </li>
                  <li>Stir in the tomato paste and cook for 1 minute.</li>
                  <li>
                    Add the crushed tomatoes, beef broth, oregano, and basil.
                    Season with salt and pepper to taste.
                  </li>
                  <li>
                    Reduce the heat to low and let the sauce simmer for 15-20
                    minutes, stirring occasionally, to allow the flavors to
                    meld.
                  </li>
                  <li>
                    While the sauce is simmering, cook the pasta according to
                    the package instructions. Drain the pasta and return it to
                    the pot.
                  </li>
                  <li>
                    Add the Bolognese sauce to the cooked pasta and toss to
                    combine.
                  </li>
                  <li>
                    Serve hot, garnished with additional fresh basil or grated
                    Parmesan cheese if desired.
                  </li>
                </ol>
              </article>
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
