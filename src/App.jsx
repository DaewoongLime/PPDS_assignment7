import React, { useState, useEffect } from "react";
import "./App.css";
import QuoteCard from "./components/QuoteCard";
import ActivityCard from "./components/ActivityCard";

function App() {
  const [quote, setQuote] = useState("");
  const [activity, setActivity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const API_KEY = import.meta.env.VITE_API_NINJAS_KEY;

      // 1️⃣ Health Quote
      const quoteRes = await fetch("https://api.api-ninjas.com/v2/quotes?categories=health", {
        headers: { "X-Api-Key": API_KEY },
      });
      const quoteData = await quoteRes.json();
      setQuote(quoteData[0]);

      // 2️⃣ Random Exercise Habit
      const exerciseTypes = ["stretching", "strength", "cardio", "plyometrics", "yoga", "powerlifting"];
      const randomType = exerciseTypes[Math.floor(Math.random() * exerciseTypes.length)];

      const exerciseRes = await fetch(
        `https://api.api-ninjas.com/v1/exercises?type=${randomType}`,
        { headers: { "X-Api-Key": API_KEY } }
      );
      const exerciseData = await exerciseRes.json();
      const randomExercise = exerciseData[Math.floor(Math.random() * exerciseData.length)];
      setActivity(`${randomExercise.name}: ${randomExercise.instructions}`);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="center">Loading...</div>;
  if (error) return <div className="center">Error: {error}</div>;

  return (
    <div className="App">
      <h1>HealthyBit 💪</h1>
      <QuoteCard quote={quote} />
      <ActivityCard activity={activity} />
      <button onClick={fetchData}>Get New Habit</button>
    </div>
  );
}

export default App;
