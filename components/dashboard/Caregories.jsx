import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase"; // your firebase config file
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const CategoriesManager = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newCategoryName, setNewCategoryName] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editingCategoryName, setEditingCategoryName] = useState("");

  const [newSubcategoryName, setNewSubcategoryName] = useState("");
  const [parentCategoryIdForSub, setParentCategoryIdForSub] = useState(null);
  const [editingSubcategory, setEditingSubcategory] = useState({
    catId: null,
    subId: null,
    name: "",
  });

  const categoriesCollection = collection(db, "categories");

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(categoriesCollection);
      const cats = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCategories(cats);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const addCategory = async () => {
    if (!newCategoryName.trim())
      return alert("Category name is required");
    try {
      await addDoc(categoriesCollection, { name: newCategoryName, subcategories: [] });
      setNewCategoryName("");
      fetchCategories();
    } catch (error) {
      console.error("Error adding category: ", error);
    }
  };

  const updateCategory = async () => {
    if (!editingCategoryName.trim())
      return alert("Category name is required");
    try {
      const catDoc = doc(db, "categories", editingCategoryId);
      await updateDoc(catDoc, { name: editingCategoryName });
      setEditingCategoryId(null);
      setEditingCategoryName("");
      fetchCategories();
    } catch (error) {
      console.error("Error updating category: ", error);
    }
  };

  const deleteCategory = async (catId) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      const catDoc = doc(db, "categories", catId);
      await deleteDoc(catDoc);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category: ", error);
    }
  };

  const addSubcategory = async () => {
    if (!newSubcategoryName.trim())
      return alert("Subcategory name is required");
    if (!parentCategoryIdForSub)
      return alert("Select a parent category");

    try {
      const catDoc = doc(db, "categories", parentCategoryIdForSub);
      const category = categories.find((c) => c.id === parentCategoryIdForSub);
      if (!category) return;

      const updatedSubs = [
        ...category.subcategories,
        { id: uuidv4(), name: newSubcategoryName },
      ];

      await updateDoc(catDoc, { subcategories: updatedSubs });
      setNewSubcategoryName("");
      setParentCategoryIdForSub(null);
      fetchCategories();
    } catch (error) {
      console.error("Error adding subcategory: ", error);
    }
  };

  const updateSubcategory = async () => {
    const { catId, subId, name } = editingSubcategory;
    if (!name.trim()) return alert("Subcategory name is required");

    try {
      const catDoc = doc(db, "categories", catId);
      const category = categories.find((c) => c.id === catId);
      if (!category) return;

      const updatedSubs = category.subcategories.map((sub) =>
        sub.id === subId ? { ...sub, name } : sub
      );

      await updateDoc(catDoc, { subcategories: updatedSubs });
      setEditingSubcategory({ catId: null, subId: null, name: "" });
      fetchCategories();
    } catch (error) {
      console.error("Error updating subcategory: ", error);
    }
  };

  const deleteSubcategory = async (catId, subId) => {
    if (!window.confirm("Are you sure you want to delete this subcategory?")) return;

    try {
      const catDoc = doc(db, "categories", catId);
      const category = categories.find((c) => c.id === catId);
      if (!category) return;

      const updatedSubs = category.subcategories.filter((sub) => sub.id !== subId);
      await updateDoc(catDoc, { subcategories: updatedSubs });
      fetchCategories();
    } catch (error) {
      console.error("Error deleting subcategory: ", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Categories Manager</h2>

      {/* Add Category */}
      <div className="flex space-x-3 mb-6">
        <input
          type="text"
          placeholder="New category name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addCategory}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Category
        </button>
      </div>

      {/* Edit Category */}
      {editingCategoryId && (
        <div className="mb-6 p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Edit Category</h3>
          <div className="flex space-x-3">
            <input
              type="text"
              value={editingCategoryName}
              onChange={(e) => setEditingCategoryName(e.target.value)}
              className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={updateCategory}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Save
            </button>
            <button
              onClick={() => {
                setEditingCategoryId(null);
                setEditingCategoryName("");
              }}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Add Subcategory */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Add Subcategory</h3>
        <div className="flex space-x-3">
          <select
            value={parentCategoryIdForSub || ""}
            onChange={(e) => setParentCategoryIdForSub(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="New subcategory name"
            value={newSubcategoryName}
            onChange={(e) => setNewSubcategoryName(e.target.value)}
            className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addSubcategory}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Subcategory
          </button>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Categories List */}
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : categories.length === 0 ? (
        <p className="text-gray-600">No categories found.</p>
      ) : (
        categories.map((cat) => (
          <div
            key={cat.id}
            className="border border-gray-300 rounded-md p-4 mb-6 shadow-sm"
          >
            <div className="flex justify-between items-center">
              {editingCategoryId === cat.id ? (
                <input
                  type="text"
                  value={editingCategoryName}
                  onChange={(e) => setEditingCategoryName(e.target.value)}
                  className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <h4 className="text-xl font-semibold text-gray-800">{cat.name}</h4>
              )}
              <div className="space-x-2 ml-4">
                {editingCategoryId === cat.id ? null : (
                  <>
                    <button
                      onClick={() => {
                        setEditingCategoryId(cat.id);
                        setEditingCategoryName(cat.name);
                      }}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCategory(cat.id)}
                      className="text-red-600 hover:underline font-medium"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>

            <ul className="mt-4 space-y-2 pl-5 list-disc">
              {cat.subcategories.length === 0 && (
                <li className="text-gray-500 italic">No subcategories.</li>
              )}
              {cat.subcategories.map((sub) => (
                <li key={sub.id} className="flex items-center space-x-3">
                  {editingSubcategory.catId === cat.id &&
                  editingSubcategory.subId === sub.id ? (
                    <>
                      <input
                        type="text"
                        value={editingSubcategory.name}
                        onChange={(e) =>
                          setEditingSubcategory({
                            ...editingSubcategory,
                            name: e.target.value,
                          })
                        }
                        className="flex-grow border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={updateSubcategory}
                        className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition"
                      >
                        Save
                      </button>
                      <button
                        onClick={() =>
                          setEditingSubcategory({ catId: null, subId: null, name: "" })
                        }
                        className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500 transition"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="flex-grow text-gray-700">{sub.name}</span>
                      <button
                        onClick={() =>
                          setEditingSubcategory({
                            catId: cat.id,
                            subId: sub.id,
                            name: sub.name,
                          })
                        }
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteSubcategory(cat.id, sub.id)}
                        className="text-red-600 hover:underline font-medium"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoriesManager;
