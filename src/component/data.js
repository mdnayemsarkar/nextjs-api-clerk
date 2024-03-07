"use client";
import { useState } from "react";
import axios from "axios";

const DataFetcher = () => {
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/user-api");
      console.log("Fetched Data:", response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={fetchData}
    >
      Fetch Data and Log
    </button>
  );
};

export default DataFetcher;
