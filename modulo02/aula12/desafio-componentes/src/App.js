import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Produtos from './components/Produtos';

function App() {
	const { pathname } = window.location;
	// console.log(pathname);

	let Pagina;
	if (pathname === '/produtos') {
		Pagina = Produtos;
	} else {
		Pagina = Home;
	}

	return (
		<section>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mt-4'>
						<Header />
						<Pagina />
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;
