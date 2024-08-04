import Header from "../../components/Header/Header";
import "./style.scss";

const PageNotFound = () => {
  return (
    <div>
      <Header />
      <div className="not-found">
        <h1>SORRY, THAT'S A "NO REP!"</h1>
        <h3>404- THIS PAGE DOES NOT EXIST.</h3>
      </div>
    </div>
  );
};

export default PageNotFound;
