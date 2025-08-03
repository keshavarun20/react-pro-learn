
# Chef Claude – AI Recipe Generator

A modern, interactive web application that leverages the power of AI to generate personalized recipe suggestions based on ingredients you have on hand. This project is part of the react learning path, showcasing key concepts of a modern React development workflow.

## ✨ Features

-   **Dynamic Ingredient Input**: Easily add and remove ingredients you have in your kitchen.
-   **AI-Powered Recipes**: Utilizes a powerful AI model (e.g., Anthropic's Claude, Hugging Face's Mistral) to generate unique and creative recipes.
-   **Responsive Design**: A clean and intuitive user interface that works seamlessly on both desktop and mobile devices.
-   **Modern Tech Stack**: Built with contemporary tools for a fast and efficient developer experience.
-   **Clean UI**: Recipes are formatted in a clear, easy-to-read style using Markdown.

### 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
-   An API key for an AI model (e.g., Anthropic, Hugging Face). Instructions to get one are below.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/keshavarun20/react-pro-learn.git
    cd react-pro-learn/chef-claude
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up your environment variables:**
    -   Create a file named `.env` in the root of the `chef-claude` directory.
    -   Add your AI API key to this file. For example, if you are using Hugging Face, it might look like this:
        ```env
        VITE_HUGGING_FACE_API_TOKEN="your_hugging_face_api_token_here"
        ```
    -   If using a different service, refer to its documentation for the correct variable name.

### Running the App

Once you have installed the dependencies and configured your environment, you can start the development server:

```bash
npm run dev
# or
yarn dev 
```
## 🛠️ Tech Stack

-   **Frontend**: [React](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: Plain CSS or a CSS-in-JS library (depending on the implementation)
-   **AI Integration**: A library or API client for the specific AI model used (e.g., Hugging Face, Anthropic)
-   **Markdown Rendering**: `react-markdown` (or a similar library)

## 🤝 Contributing

This project is a learning resource, so pull requests are not the primary focus. However, if you find a bug or have a suggestion, feel free to open an issue.

---

## 📄 License

This project is open-source and available under the MIT License. See the `LICENSE` file for more details.
