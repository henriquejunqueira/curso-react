import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
	const arr = ['Item 1', 'Item 2'];

	return (
		<form>
			<div className='md-3'>
				<Input id='email' label='Email' required />
			</div>
			<div className='md-3'>
				<Input id='password' type='password' label='Password' />
			</div>
			<Button items={arr} />
		</form>
	);
};

export default Form;
