import React from 'react';

const ButtonModal = ({ setModal }) => {
	function handleClick() {
		setModal((ativo) => !ativo);
	}

	return (
		<button className='btn btn-success' onClick={handleClick}>
			Abrir
		</button>
	);
};

export default ButtonModal;
