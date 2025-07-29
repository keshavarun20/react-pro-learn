type IngredientsListProps = {
  ingredients: string[];
  list: React.ReactNode; // this is JSX you're rendering inside <ul>
  generateRecipe: () => void;
};
export default function IngredientsList({ ingredients, list, generateRecipe }:IngredientsListProps) {
  return (
    <section className="ingredients-list">
      <h2>Ingredients on hand:</h2>
      <ul>{list}</ul>
      {ingredients.length > 3 && (
        <div className="recipe-container">
          <div>
            <h3>Ready for a Recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={generateRecipe}>Get a Recipe</button>
        </div>
      )}
    </section>
  );
}
