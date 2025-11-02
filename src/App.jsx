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

      // Health quote from API Ninjas
      const quoteRes = await fetch("https://api.api-ninjas.com/v2/quotes?categories=health", {
        headers: { "X-Api-Key": API_KEY },
      });
      if (!quoteRes.ok) throw new Error("Quote fetch failed");
      const quoteData = await quoteRes.json();
      setQuote(quoteData[0]);

      // Relaxation activity from Bored API
      const activityRes = await fetch("https://www.boredapi.com/api/activity?type=relaxation");
      if (!activityRes.ok) throw new Error("Activity fetch failed");
      const activityData = await activityRes.json();
      setActivity(activityData.activity);

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
