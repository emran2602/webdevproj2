"use client";

import { useEffect, useState } from 'react';

export default function RecipePage({ params }) {
  const [id, setId] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    async function fetchParams() {
      const unwrappedParams = await params;
      setId(unwrappedParams.id);
    }
    fetchParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      setRecipe({ id, title: 'Sample Recipe', description: 'Delicious food', steps: [] });
    }
  }, [id]);

  const addStep = () => {
    setSteps([...steps, { id: Date.now(), description: '' }]);
  };

  const updateStep = (index, newDescription) => {
    const updatedSteps = [...steps];
    updatedSteps[index].description = newDescription;
    setSteps(updatedSteps);
  };

  const deleteStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recipe Steps</h2>
        {steps.length === 0 && (
          <p className="text-gray-500 mb-4">No steps added yet. Click "Add Step" to get started.</p>
        )}
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center mb-2">
            <input
              type="text"
              value={step.description}
              onChange={(e) => updateStep(index, e.target.value)}
              className="border p-2 flex-grow mr-2 rounded"
            />
            <button onClick={() => deleteStep(index)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        ))}
        <button onClick={addStep} className="bg-green-500 text-white p-3 mt-4 rounded shadow-md hover:bg-green-600">
          Add Step
        </button>
      </div>
    </div>
  );
}
