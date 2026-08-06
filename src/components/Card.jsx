import { FaRegClock } from "react-icons/fa";
export function Card({ item }) {
  return (
    <div className="news-card-horizontal">
      <div>
        <span className="news-tag">{item.category}</span>
        <h4 className="news-title">{item.title}</h4>
      </div>
      <span className="news-time"><FaRegClock /> {item.time}</span>
    </div>
  );
}