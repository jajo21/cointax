import React from "react";
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
        }
    }


    componentDidMount = () => {
        if(this.props.onMount) {
            this.props.onMount({
                setModal: this.toggleModal
            });
        }
    }

    toggleModal = (open) => {
        /* this.props.onChange && this.props.onChange(open); */

        this.setState({
            isOpen: open
        })
    }

    render() {
        const isOpen = this.state.isOpen;
        return ReactDom.createPortal(
            <div className={`modal ${isOpen ? 'open' : ''}`} onClick={() => {this.toggleModal(false)}}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>

                    <div className="modal-close">
                        <button className="modal-close-button" onClick={this.toggleModal.bind(this, false)}> X </button>
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
    onMount: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.any
}

export default Modal;
