"use client";
import Link from 'next/link';

export default function RecipeCard({ recipe }) {
  return (
    <div className="border p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold">{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Link href={`/recipes/${recipe.id}`}>
        View Recipe
      </Link>
    </div>
  );
}