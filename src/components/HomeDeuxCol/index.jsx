import Col2 from "../Col2";
import "./index.css";
import text from "../../data/home2.json";

function HomeDeuxCol() {
  
  return (
    (text.length > 0) && text.map((line, index) => 
    <Col2 col1={line.col1} col2={line.col2} key={index} />)
  );
}

export default HomeDeuxCol;
