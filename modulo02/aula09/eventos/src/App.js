import React from 'react';

function App() {
	// function handleClick(event) {
	// 	console.log(event.target);
	// }

	// function mouseMove(event) {
	// 	console.log(event.target);
	// }

	function handleScroll(event) {
		console.log(event);
	}

	window.addEventListener('scroll', handleScroll);

	return (
		<div style={{ height: '200vh' }}>
			{/* <button onClick={handleClick}>Clique</button> */}
			{/* <button onClick={handleClick} onMouseMove={mouseMove}>
				Clique
			</button> */}
			{/* <button onClick={(event) => console.log(event)}>Clique</button> */}
			{/* <button onClick={(event) => console.log(event.target)}>Clique</button> */}
			<button onClick={(event) => alert(event.target.innerText)}>Clique</button>
		</div>
	);
}

export default App;
