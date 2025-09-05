"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PlayerStatsCard from "@/app/components/PlayerStatsCard";

export default function Playerdashboard({ items = [], onUpdate }) {
  const [editingItem, setEditingItem] = useState(null);
  const [editForm, setEditForm] = useState({});
  const router = useRouter();

  const handleEdit = (item) => {
    setEditingItem(item);
    setEditForm({
      name: item.name || item.title || "",
      description: item.description || item.content || "",
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/playerdata/${editingItem._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm),
      });

      if (response.ok) {
        const updatedItem = await response.json();
        onUpdate(updatedItem);
        setEditingItem(null);
        setEditForm({});
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDelete = async (itemId) => {
    if (confirm("Er du sikker på at du vil slette dette elementet?")) {
      try {
        const response = await fetch(`/api/playerdata/${itemId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          onUpdate(null, itemId);
        }
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  return (
    <div className="w-full">
      {editingItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">
              Rediger Element
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Navn</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Beskrivelse
                </label>
                <textarea
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Lagre
              </button>
              <button
                onClick={() => setEditingItem(null)}
                className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Avbryt
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={item._id || index}>
              {item.matchStats ? (
                <PlayerStatsCard player={item} />
              ) : (
                <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.name || item.title || `Item ${index + 1}`}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {item.description ||
                        item.content ||
                        "No description available"}
                    </p>
                  </div>

                  {item.createdAt && (
                    <p className="text-gray-400 text-xs mb-4">
                      Created: {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  )}

                  <div className="flex gap-2">
                    <button
                      onClick={() => router.push(`/players/${item._id}`)}
                      className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25"
                    >
                      Se Mer
                    </button>
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex-1 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-600/25"
                    >
                      Rediger
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex-1 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25"
                    >
                      Slett
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ingen data funnet
              </h3>
              <p className="text-gray-300">
                MongoDB databasen er tom eller API-endepunktet fungerer ikke.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
