import ReactMarkdown from "react-markdown";
type RecipeProps = {
  recipe: string;
};

const Recipe = ({ recipe }: RecipeProps)=> {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </article>
    </section>
  );
};

export default Recipe;
