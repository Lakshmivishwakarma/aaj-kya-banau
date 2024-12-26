'use client';

import { FormEvent, useState } from "react";

export default function AddMenu() {
  const [formData, setFormData] = useState({
    name: '',
    mealTiming: [] as string[],
    dietPreference: '',
    active: false
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;

    if (type === 'checkbox' && event.target instanceof HTMLInputElement) {
      const checked = event.target.checked;
      if (name === 'mealTiming') {
        setFormData(prevData => {
          const newMealTiming = checked
            ? [...prevData.mealTiming, value]
            : prevData.mealTiming.filter(item => item !== value);
          return { ...prevData, mealTiming: newMealTiming };
        });
      } else {
        setFormData(prevData => ({
          ...prevData,
          [name]: checked
        }));
      }
    } 
    else if (type === 'select-one' && event.target instanceof HTMLSelectElement) {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    } 
    else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };
  
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    if (formData.mealTiming.length === 0) {
      alert("Please select at least one meal prefrence.");
      return;
    } 
    console.log("Form data:", formData);
  
    setFormData({
      name: '',
      mealTiming: [],
      dietPreference: '',
      active: false
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-6 sm:px-8">
      <div className="sm:max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-6">
          Add Menu
        </h2>

        <form
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Menu Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Enter menu name"
              value={formData.name}
              onChange={handleInputChange}
              className="block w-full mt-2 rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Meal Timing
            </label>
            <div className="mt-2 grid grid-cols-3 gap-4">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="breakfast"
                  name="mealTiming"
                  value="Breakfast"
                  checked={formData.mealTiming.includes("Breakfast")}
                  onChange={handleInputChange}
                  className="form-checkbox text-indigo-600"
                />
                <span>Breakfast</span>
              </label>
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="lunch"
                  name="mealTiming"
                  value="Lunch"
                  checked={formData.mealTiming.includes("Lunch")}
                  onChange={handleInputChange}
                  className="form-checkbox text-indigo-600"
                />
                <span>Lunch</span>
              </label>
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="dinner"
                  name="mealTiming"
                  value="Dinner"
                  checked={formData.mealTiming.includes("Dinner")}
                  onChange={handleInputChange}
                  className="form-checkbox text-indigo-600"
                />
                <span>Dinner</span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="diet-preference"
              className="block text-sm font-medium text-gray-700"
            >
              Diet Preference
            </label>
            <select
              id="diet-preference"
              name="dietPreference"
              required
              value={formData.dietPreference}
              onChange={handleInputChange}
              className="block w-full mt-2 rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Diet Preference</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Eggetarian">Eggetarian</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Active
            </label>
            <div className="mt-2 flex items-center">
              <input
                id="active"
                name="active"
                type="checkbox"
                checked={formData.active}
                onChange={handleInputChange}
                className="form-checkbox text-indigo-600"
              />
              <span className="ml-2 text-gray-600">Active?</span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Menu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
