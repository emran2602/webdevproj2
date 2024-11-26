"use client";

import { useState } from 'react';
import RecipeCard from './components/RecipeCard';
import { useRecipes } from './RecipeContext';

export default function Home() {
  const { recipes, setRecipes } = useRecipes();
  const [newRecipe, setNewRecipe] = useState({ title: '', description: '' });

  const addRecipe = () => {
    setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
    setNewRecipe({ title: '', description: '' });
  };

  return (
    <div className="p-8">
      <header>
        <h1 className="text-3xl font-bold mb-8">Recipe Step Tracker</h1>
      </header>
      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addRecipe();
            }}
          >
            <label htmlFor="title" className="sr-only">Recipe Title</label>
            <input
              id="title"
              type="text"
              placeholder="Recipe Title"
              value={newRecipe.title}
              onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
              className="border p-2 mr-2 rounded"
            />
            <label htmlFor="description" className="sr-only">Description</label>
            <input
              id="description"
              type="text"
              placeholder="Description"
              value={newRecipe.description}
              onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
              className="border p-2 mr-2 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Add Recipe
            </button>
          </form>
        </section>

        <section>
          {recipes.map((recipe) => (
            <article key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
