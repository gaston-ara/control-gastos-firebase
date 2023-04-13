const Modal = ({ children, activeModal, setActiveModal, title }) => {
  return (
    <div>
      {activeModal && <div>
        <span>
          <button onClick={setActiveModal(false)}>x</button>
          </span>
        <h3>{title}</h3>
        <div>
          {children}
        </div>
      </div>
      }
    </div>
  )
}

export default Modal