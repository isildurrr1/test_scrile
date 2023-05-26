const Popup = ({isOpen, onClose, children}) => {
  return(
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h1 className="popup__title">Title form</h1>
        {children}
        <button onClick={onClose} className="popup__close" type="button"></button>
      </div>
    </div>
  );
}

export default Popup;