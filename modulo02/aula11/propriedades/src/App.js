import React from 'react';
import Form from './form/Form';

// const Titulo = (props) => {
// 	return <h1>{props.texto}</h1>;
// };

// const Titulo = (props) => {
// 	return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
// };

// const Titulo = ({ cor, texto }) => {
// 	return <h1 style={{ color: cor }}>{texto}</h1>;
// };

// const Titulo = ({ cor, texto, children }) => {
// 	return (
// 		<h1 style={{ color: cor }}>
// 			{texto}, {children}
// 		</h1>
// 	);
// };

function App() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm-12'>
					{/* <Titulo cor='red' texto='Meu título 1' /> */}
					{/* <Titulo cor='blue' texto='Meu título 2' /> */}
					{/* <Titulo cor='red' texto='Meu título 1'>
				Isso é o children
				<p>Teste</p>
        </Titulo> */}
					{/* <Titulo cor='blue' texto='Meu título 2' /> */}
					<Form />
				</div>
			</div>
		</div>
	);
}

export default App;
