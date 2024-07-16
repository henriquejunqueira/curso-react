// import React from 'react';
import { useState } from 'react';
// import Modal from './Modal';
// import ButtonModal from './ButtonModal';
import './App.css';

function App() {
	// const [modal, setModal] = React.useState(false);
	// const [modal, setModal] = React.useState(() => false); // * com função de callback
	// const [modal, setModal] = React.useState(() => {
	// 	const ativo = window.localStorage.getItem('ativo');
	// 	return ativo;
	// });
	// const [items, setItems] = React.useState('Teste');
	// let [items, setItems] = React.useState('Teste');

	// function handleClick() {
	// items = 'Outro';
	// setItems('Outro');
	// }

	// const [contar, setContar] = React.useState(1);
	const [contar, setContar] = useState(1);
	// const [items, setItems] = React.useState(['Item 1']);
	const [items, setItems] = useState(['Item 1']);

	function handleClick() {
		// setContar((contar) => {
		// 	return contar + 1;
		// });
		// setContar((contar) => contar + 1);
		setContar(contar + 1);

		// setItems((items) => [...items, 'Item ' + (contar + 1)]);
		setItems([...items, 'Item ' + (contar + 1)]);
	}

	return (
		<div className='App'>
			{/* <p>{items}</p>
			<button className='btn btn-success' onClick={handleClick}>
				Clicar
			</button>
			<Modal modal={modal} setModal={setModal} />
			<ButtonModal setModal={setModal} /> */}

			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
			<buttton className='btn btn-success' onClick={handleClick}>
				{contar}
			</buttton>
		</div>
	);
}

export default App;
