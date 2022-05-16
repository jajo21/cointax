import React from "react";
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props)

/*         this.state = {
            show: this.props.show,
        } */
    }

/*     static getDerivedStateFromProps = (props, state) => {
        if(props.show !== state.show){
            return {show: props.show};
        }
        return null;
    }

    closeModal = () => {
        this.setState({
            show: this.props.show
        })
    } */

    render() {
        return ReactDom.createPortal(
            <div className={`modal ${this.props.open ? 'open' : ''}`} onClick={this.props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>

                    <div className="modal-close">
                        <button className="modal-close-button" onClick={this.props.onClose}> X </button>
                    </div>

                    <div className="modal-title">
                        <h2>{this.props.title}</h2>
                    </div>

                    <div className="modal-body">
                        {this.props.children}
                    </div>
                </div>
            </div>,
            document.getElementById('modals')
        );
    }
}

Modal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.any
}

export default Modal;
