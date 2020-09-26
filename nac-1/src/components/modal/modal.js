import React from 'react';
import './modal.style.scss';
export default function Modal(props){
    return(
        <div className="modal bg" style={{display: props.toggle ? 'block' : 'none'}}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Alerta</h5>
                        <button type="button" className="close" onClick={props.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={props.closeModal}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};