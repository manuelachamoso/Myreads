function Modal({ setToggle, description, title, image }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title-closeBtn">
          <button
            onClick={() => {
                setToggle(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
        <div
                className="modal-book"
                style={{
                width: 128,
                height: 193,
                backgroundImage:`url(${image ? image : ""})`,
                }}></div>            
        <h2>{title}</h2>
        </div>
        <div className="body">
            <p>{description}</p>
        </div>
        <div className="footer">
        <button
            onClick={() => {
              setToggle(false);
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;