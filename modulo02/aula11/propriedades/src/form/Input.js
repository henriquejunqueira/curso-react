import React from 'react';

// const carro = {
// 	portas: '4',
// 	portas: '5',
// };

const Input = ({ label, id, ...props }) => {
	return (
		<div style={{ margin: '1rem 0' }}>
			<label htmlFor={id} className='form-label'>
				{label}
			</label>
			<input id={id} type='text' className='form-control' {...props} />
		</div>
	);
};

export default Input;
