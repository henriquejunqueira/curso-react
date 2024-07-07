import React from 'react';

const titulo = <h1>Esse é um título</h1>;

function App() {
	// const nome = 'Henrique';
	const random = Math.random();
	const ativo = true;

	function mostrarNome(sobrenome) {
		return 'Henrique ' + sobrenome;
	}

	const carro = {
		marca: 'Ford',
		rodas: 4,
	};

	const estiloP = {
		color: 'blue',
		fontSize: '2rem',
	};

	return (
		<>
			{/* Também pode ser colocado como <React.Fragment> no início e... */}
			{/* ? className é o class colocado nos elementos do html, porém foi mudado no react */}
			{/* <a className='ativo' href='https://www.google.com.br' title='Isso é um site'>Google
		</a> */}
			{/* ? htmlFor é o for colocado nos elementos do html, porém foi mudado no react */}
			{/* // {/* <label htmlFor='nome'>Nome</label> */}
			{/* // <input type='text' id='nome' /> */}
			{/* // ...</React.Fragment> no final */}
			{/* // <p>{nome}</p> */}
			{/* // <p>{random}</p> */}
			{/* // <p>{random * 100}</p> */}
			{/* // <p>{random * 1000}</p> */}
			{/* // <p>{(random * 1000) / 50}</p> */}
			{titulo}
			<p>{true ? 'verdadeiro' : 'falso'}</p>
			<p>{10}</p>
			<p>{mostrarNome('Junqueira')}</p>
			<p style={estiloP}>{new Date().getFullYear()}</p>
			<p style={estiloP}>{carro.marca}</p>
			<p>{carro.rodas}</p>
			<p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>
		</>
	);
}

export default App;
