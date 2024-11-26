"use client";

import { useState } from 'react';
import RecipeCard from './components/RecipeCard';
import { useRecipes } from './RecipeContext';

export default function Home() {
  const { recipes, setRecipes } = useRecipes();
  const [newRecipe, setNewRecipe] = useState({ title: '', description: '' });

  const addRecipe = () => {
    if (newRecipe.title.trim() && newRecipe.description.trim()) {
      setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
      setNewRecipe({ title: '', description: '' });
    }
  };

  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900">Recipe Step Tracker</h1>
      </header>
      <main className="max-w-3xl mx-auto">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Add a New Recipe</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addRecipe();
            }}
            className="flex flex-col gap-4"
            aria-labelledby="add-recipe-section"
          >
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-blue-800">Recipe Title</label>
              <input
                id="title"
                type="text"
                placeholder="Recipe Title"
                value={newRecipe.title}
                onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
                className="w-full border border-blue-300 rounded-lg p-3 text-blue-900 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-blue-800">Description</label>
              <input
                id="description"
                type="text"
                placeholder="Description"
                value={newRecipe.description}
                onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
                className="w-full border border-blue-300 rounded-lg p-3 text-blue-900 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <button type="submit" className="bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 transition-all">
              Add Recipe
            </button>
          </form>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-labelledby="recipe-list-section">
          <h2 id="recipe-list-section" className="sr-only">List of Recipes</h2>
          {recipes.length === 0 ? (
            <p className="text-gray-600">No recipes added yet.</p>
          ) : (
            recipes.map((recipe) => (
              <article key={recipe.id} className="bg-white shadow-lg rounded-lg p-6 border border-blue-100">
                <RecipeCard recipe={recipe} />
              </article>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
