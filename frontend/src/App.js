import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function App() {
  const [isloggedin, setLoggedin] = useState(null);
  const [readval, setVal] = useState(" ");
  const navigate = useNavigate();

  const handleData = (event) => {
    setVal(event.target.value);
  };

  const check = (event) => {
    if (event.target.value === "LoggedIn") {
      const data = { readval };
      sessionStorage.setItem("key", JSON.stringify(data));
      setVal(" ");
      setLoggedin(true);
    } else {
      sessionStorage.setItem("key", "");
      setLoggedin(false);
      navigate("/");
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/Home">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Contactus">Contact us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Listemployee">List Employees</Link>{" "}
          </li>
        </ul>
      </nav>
      <span>
        <input type="text" value={readval} onInput={handleData} />
      </span>
      {isloggedin ? (
        <button onClick={check} value="LoggedOut">
          LoggedOut
        </button>
      ) : (
        <button onClick={check} value="LoggedIn">
          LoggedIn
        </button>
      )}

      <Outlet />
    </div>
  );
}

export default App;
