import React from "react";
import PropTypes from 'prop-types';
import './modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <div className={`modal ${this.props.show ? 'show' : ''}`} onClick={this.props.closeModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>

                    <div className="modal-close">
                        <button className="modal-close-button" onClick={this.props.closeModal}> X </button>
                    </div>

                    <div className="modal-title">
                        <h2>{this.props.title}</h2>
                    </div>

                    <div className="modal-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    show: PropTypes.bool,
    closeModal: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.any
}

export default Modal;
