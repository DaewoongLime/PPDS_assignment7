export default function ActivityCard({ activity }) {
  return (
    <div className="card">
      <h2>🌱 Today's Micro-Habit</h2>
      <p>{activity}</p>
    </div>
  );
}
