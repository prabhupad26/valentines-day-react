export default function EventSelector({ value, onChange }) {
  return (
    <select
      className="event-dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="default">Be my Valentine</option>
      <option value="rose">Rose Day</option>
      <option value="propose">Propose Day</option>
    </select>
  );
}
