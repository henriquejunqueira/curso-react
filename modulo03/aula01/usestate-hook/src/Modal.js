import React from 'react';

const Modal = ({ modal, setModal }) => {
	if (modal === true) {
		return (
			<div>
				Esse é um modal.{' '}
				<button className='btn btn-danger' onClick={() => setModal(false)}>
					Fechar
				</button>
			</div>
		);
	}

	return null;
};

export default Modal;
