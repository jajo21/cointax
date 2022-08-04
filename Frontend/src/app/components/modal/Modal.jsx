import React from "react";
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './modal.css';


/**
 ** Modal is a reusable component.
 ** This component renders a Modal for children-elements.
 ** The Modal component takes two props explained in next section.
 * @property {string} title - The title of the modal.
 * @property {function} onMount - With this property you can set the modals isOpen state as shown in the example.
 * 
 * @example
 * ```
 * <Modal title={'My title'} onMount={modal => modal.setModal(true)}>
 *      {children}
 * </Modal>
 * ```
 */
class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    /** If props onMount is available, set the prop to be able to toggleModal */
    componentDidMount = () => {
        if(this.props.onMount) {
            this.props.onMount({
                setModal: this.toggleModal
            });
        }
    }
    
    /** Toggle modal between open and closed (true or false) */
    toggleModal = (open) => {
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
    children: PropTypes.node
}

export default Modal;
