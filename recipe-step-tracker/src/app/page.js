"use client";
import { useState } from 'react';
import RecipeCard from './components/RecipeCard';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ title: '', description: '' });

  const addRecipe = () => {
    setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
    setNewRecipe({ title: '', description: '' });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Recipe Step Tracker</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
        <input
          type="text"
          placeholder="Recipe Title"
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newRecipe.description}
          onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={addRecipe} className="bg-blue-500 text-white p-2 rounded">
          Add Recipe
        </button>
      </div>

      <div>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
