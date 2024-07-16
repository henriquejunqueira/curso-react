import React from 'react';

const ButtonModal = ({ setModal }) => {
	return (
		<button className='btn btn-success' onClick={() => setModal(true)}>
			Abrir
		</button>
	);
};

export default ButtonModal;
