import React, { Fragment } from 'react';
import Footer from './Footer';
import Form from './Form/Form';
import Header from './Header';

const Teste = () => {
	const active = false;
	if (active) {
		return <p>Teste</p>;
	} else {
		return null;
	}
};

function App() {
	return (
		// <React.Fragment>
		<Fragment>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<Teste />
						<Header />
						<Form />
						<Footer />
					</div>
				</div>
			</div>
		</Fragment>
		// </React.Fragment>
	);
}

export default App;
