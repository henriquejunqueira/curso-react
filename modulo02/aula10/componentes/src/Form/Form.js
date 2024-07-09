import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
	return (
		<form>
			<div class='mb-3'>
				<label class='form-label' htmlFor='nome'>
					Nome
				</label>
				<Input />
			</div>
			<div class='mb-3'>
				<label class='form-label' htmlFor='email'>
					Email
				</label>
				<Input />
			</div>
			<Button />
		</form>
	);
};

export default Form;
