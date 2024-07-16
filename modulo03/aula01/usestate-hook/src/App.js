import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {
	//* useState
	// const ativoHook = React.useState(false);
	// const ativoValor = ativoHook[0];
	// const atualizaValor = ativoHook[1];
	// console.log(ativoHook);

	// * useState desestruturado
	// const [ativo, setAtivo] = React.useState(false);

	// * useState multiplos dados desestruturado
	// const [dados, setDatos] = React.useState({ nome: 'André', idade: '30' });

	// const ativo = true;
	// let ativo = true;

	// function handleClick() {
	// ativo = false;
	// ativo = !ativo;
	// console.log(ativo);

	//* useState
	// atualizaValor(!ativoValor);

	// * useState desestruturado
	// setAtivo(!ativo);
	// setDatos({ ...dados, faculdade: 'Possui faculdade' });
	// }

	// * props
	const [modal, setModal] = React.useState(false);

	return (
		<div className='container'>
			<div class='row'>
				<div className='col-md-8 mt-4 mb-4'>
					{/* <button disabled={!ativo} className='btn btn-success'>
						{ativo ? 'Ativo' : 'Inativo'}
					</button> */}
					{/* <button onClick={handleClick} className='btn btn-success'>
						{ativo ? 'Ativo' : 'Inativo'}
					</button> */}
					{/* // *useState */}
					{/* <button onClick={handleClick} className='btn btn-success'>
						{ativoValor ? 'Ativo' : 'Inativo'}
					</button> */}
					{/* // * useState desestruturado */}
					{/* <button onClick={handleClick} className='btn btn-success'>
						{ativo ? 'Ativo' : 'Inativo'}
					</button> */}
					{/* // * useState múltiplos dados desestruturado */}
					{/* <p>{dados.nome}</p> */}
					{/* <p>{dados.idade}</p> */}
					{/* <p>{dados.faculdade}</p> */}
					{/* <button onClick={handleClick} className='btn btn-success'>
						{ativo ? 'Ativo' : 'Inativo'}
					</button> */}

					{/* // * Props */}
					{/* <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div> */}
					<Modal modal={modal} setModal={setModal} />
					<ButtonModal setModal={setModal} />
				</div>
			</div>
		</div>
	);
}

export default App;
