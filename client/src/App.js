import "./App.css";
import ParentCard from "./components/parentCard/ParentCard";

const titles = [
  "Incomplete",
  "To Do",
  "Doing",
  "Under Review",
  "Completed",
  "Overdone",
];

const colors = [
  { color: "rgb(231, 3, 3)" },
  { color: "rgb(12 244 255)" },
  { color: "rgb(182 215 0)" },
  { color: "none", display: "none" },
  { color: "none", display: "none" },
  { color: "none", display: "none" },
];

function App() {
  return (
    <div className="main">
      {titles?.map((title, index) => (
        <ParentCard key={index} title={title} colors={colors} />
      ))}
    </div>
  );
}

export default App;
