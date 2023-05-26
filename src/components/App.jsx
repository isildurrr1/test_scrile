import { useState } from "react";
import Form from "./Form";
import Popup from "./Popup";

const App = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(true);

  const closePopup = () => {
    setPopupIsOpen(false);
  }

  return (
    <div className="App">
      <Popup isOpen={popupIsOpen} onClose={closePopup}>
        <Form onClose={closePopup}/>
      </Popup>
    </div>
  );
}

export default App;
