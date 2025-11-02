export default function QuoteCard({ quote }) {
  return (
    <div className="card">
      <h2>💭 Quote of the Day</h2>
      <p>"{quote.quote}"</p>
      <h4>- {quote.author}</h4>
    </div>
  );
}
