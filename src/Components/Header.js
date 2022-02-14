import { useSelector } from "react-redux";
import randomColor from "randomcolor";

function Header() {
  const color = useSelector((state) => state.color.value);
  const count = useSelector((state) => state.count.value);

  return (
    <div className="header">
      <h1 style={{ color }}>REDUX Project</h1>
      <h3>Count - {count} </h3>
    </div>
  );
}

export default Header;
