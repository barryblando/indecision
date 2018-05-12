import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={ !!props.selectedOption /* !! = true boolean. Where !!'string' = true, !!undefined = false */}
    onRequestClose={ props.handleClearSelectedOption /* use esc key or button to click on background in order to clear state & close */ }
    contentLabel="Selected Option"
    closeTimeoutMS={ 200 /* .2s for css animation */}
    className="modal"
  >
    <h3 className="modal__title u-margin-bottom-medium">Selected Option</h3>
    { props.selectedOption && <p className="modal__body u-margin-bottom-large">{ props.selectedOption }</p>}
    <button className="button" onClick={ props.handleClearSelectedOption }>Okay</button>
  </Modal>
);

Modal.setAppElement('#app');

export default OptionModal;