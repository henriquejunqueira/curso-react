// const menu = {
// 	seletor: '.principal',
// };

// console.log(menu.seletor.toUpperCase());

// * Função comum
// function uppername(name) {
// 	return name.toUpperCase();
// }

// * Arrow function
// const lowerName = () => {
// 	console.log('Essa é uma arrow function');
// };

// const uppername = (name) => {
// 	return name.toUpperCase();
// };

// const uppername = (name) => name.toUpperCase();

// * Função anônima
// const uppername = function (name) {
// 	return name.toUpperCase();
// };

// console.log(uppername('henrique'));

// * Desestruturação (Destructuring) objetos e arrays
// ? Objetos
// function handleMouse(event) {
// console.log(event);

// const x = event.clientX;
// const y = event.clientY;

// 	const { clientX, clientY } = event;
// 	console.log(clientX, clientY);
// }

// function handleMouse({ clientX, clientY }) {
// 	console.log(clientX, clientY);
// }

// ? Arrays
// const frutas = ['banana', 'uva'];
// const [fruta1, fruta2] = frutas;

// console.log(fruta2);

// const useQuadrado = [
// 	4,
// 	function (lado) {
// 		return 4 * lado;
// 	},
// ];

// const [lados, perimetro] = useQuadrado;
// console.log(lados);
// console.log(perimetro(10));

// document.addEventListener('click', handleMouse);

// * REST e Spread
// function showList(empresa, clientes) {
// 	clientes.forEach((cliente) => {
// 		console.log(cliente, empresa);
// 	});
// }
// showList('Google', ['André', 'Rafael']);

// ? Operador REST (Permite representar um número indefinido de argumentos na forma de um Array)
// function showList(empresa, ...clientes) {
// 	clientes.forEach((cliente) => {
// 		console.log(cliente, empresa);
// 	});
// }
// showList('Google', ['André', 'Rafael', 'Henrique']);

// ? Operador Spread (Permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos)
const numeros = [10, 5, 20];
// const maior = Math.max(10, 5, 20);
// const maior = Math.max(numeros); // ! Retorna NaN
const maior = Math.max(...numeros); // ! aqui ele está utilizando o spread para receber múltiplos elementos
console.log(maior);

const numeros2 = [13, ...numeros, 24, 32, 32]; // ! aqui é como se estivesse clonando o array anterior
console.log(numeros2);

const numeros3 = [13, numeros, 24, 32, 32]; // ! sem o spread ele coloca um array dentro de outro
console.log(numeros3);

const carro = {
	cor: 'Azul',
	portas: 4,
};
carro.ano = 2020;
console.log(carro);

carroAno = { ...carro, ano: 2008 }; // ! aqui o objeto carro não é modificado, apenas desestruturado
console.log(carroAno);
