"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Playerdashboard from "./components/Playerdashboard";

export default function Dashboard() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleItemUpdate = (updatedItem, deletedId) => {
    if (deletedId) {
      setItems(items.filter((item) => item._id !== deletedId));
    } else if (updatedItem) {
      setItems(
        items.map((item) => (item._id === updatedItem._id ? updatedItem : item))
      );
    }
  };

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/mongodb", {
          method: "GET",
          cache: "no-store",
        });
        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isSignedIn) {
      fetchData();
    }
  }, [isSignedIn]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Laster data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Dashboard
          </h1>
          <p className="text-gray-300 text-xl">MongoDB data vises nedenfor</p>
        </div>

        <Playerdashboard items={items} onUpdate={handleItemUpdate} />
      </div>
    </div>
  );
}
