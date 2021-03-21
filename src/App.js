import "./App.css";
import { useEffect, useState } from "react";
import Logo from "./Asset.png";

function App() {
  const [random, Setrandom] = useState(0);

  useEffect(() => {
    Setrandom(Math.floor(Math.random() * 2));
  }, []);

  console.log(random);
  let handleLink = () => {
    !random
      ? window.location.replace(
          "https://forms.office.com/Pages/ResponsePage.aspx?id=7qe9Z4D970GskTWEGCkKHpKPtzxfscJEiugEy07kuoNUN1FTSDZPVDE3Rjg3WEdLUDhCWUhHNDVIQS4u"
        )
      : window.location.replace(
          "https://forms.office.com/Pages/ResponsePage.aspx?id=7qe9Z4D970GskTWEGCkKHpKPtzxfscJEiugEy07kuoNUNU5JWUNTUVFQM1ZTRjJMMENSOEU1VEFNUS4u"
        );
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="conten1">
          <img src={Logo} className="Logo" alt="Logo" />
        </div>
        <div className="conten2">
          <div>
            Hi, Thank you for your willingness to participate in my study.
            Please click link below to continue.
            {random}
          </div>
          <div>
            <button className="btn" onClick={handleLink}>
              Click Here
            </button>
          </div>

          <div>
            <div> Researcher </div>
            <div>Ridwan Prasetyo</div>
            <div>
              Marie Sklodowska-Curie Early Stage Researcher (ESR) & PhD Student
            </div>
            <div>ezxrap@nottingham.ac.uk</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
