// import { areaQuadrado, perimetroQuadrado } from './quadrado.js'; // ! importação com destructuring
// import numeroAleatorio from './numeroAleatorio.js'; // ! importação sem destructuring pois a função contém o export default
// import quadrado from './quadrado.js';

// console.log(areaQuadrado(5)); // 25
// console.log(perimetroQuadrado(5)); // 20
// console.log(numeroAleatorio());

// console.log(quadrado.areaQuadrado(5)); // 25
// console.log(quadrado.perimetroQuadrado(5)); // 20

// * Fetch
// ? Envia requisições assíncronas para o servidor. Serve para acessarmos/escrevermos dados em apis externas.
// TODO: O fetch é uma promessa. O then é um método do fetch e necessita de uma função de callback para dizer o que fazer quando
// TODO: a promessa for resolvida
// ! nesse caso a função dentro do primeiro then pega a resposta do servidor e tranforma em json
// ! no segundo then ele pega a informação do json e exibe no console
// fetch('https://ranekapi.origamid.dev/json/api/produto')
// 	.then((response) => response.json())
// 	.then((json) => {
// 		console.log(json);
// 	});

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// 	.then((resposta) => resposta.json())
// 	.then((json) => {
// 		console.log(json);
// 	});

// ? Fetch de forma mais fácil (nova forma de fazer)
// ! dessa forma não terá retorno, então será necessário usar o async/await já que a função é uma promessa
// function fetchProdutos(url) {
// 	const response = fetch(url);
// 	return response;
// }

// * Async/Await
// ? Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver,
// ? antes de continuar com o código.
// ! nessa forma funcionará, pois tem o async/await
// async function fetchProdutos(url) {
// 	const response = await fetch(url);
// 	console.log(produtos);
// 	return response;
// }

// ! é necessário também mover o console.log pra dentro da função e pedir o 'response' ao invés de 'produtos' pra que funcione
// async function fetchProdutos(url) {
// 	const response = await fetch(url);
// 	console.log(response);
// 	return response;
// }

// ! também posso transformar o objeto de response em json e exibir o json
// async function fetchProdutos(url) {
// 	const response = await fetch(url);
// 	const json = await response.json();
// 	console.log(json);
// 	return response;
// }

// const produtos = fetchProdutos(
// 	'https://ranekapi.origamid.dev/json/api/produto',
// );

// console.log(produtos);

// * Filter
// ? O filter serve para filtrar os valores dentro de um array e retorna apenas os que atendem à condição do filtro
const precos = [
	'Crédito',
	'R$ 200',
	'R$ 400',
	'Contas Pagar',
	'R$ 300',
	'R$ 400',
	'Meus dados',
];

// ! O filter irá retorna uma array nova, que contem os items em que o retorno da função for verdadeiro
// const precosFiltro = precos.filter(function (preco) {
// 	console.log(preco);
// 	return true;
// });

// ! O filter está filtrando todos os indices que contém R$ e retorna true para os que existem
// const precosFiltro = precos.filter(function (preco) {
// ! O método includes verifica se o objeto, array, string, etc contém o que é passado nele
// 	console.log(preco.includes('R$'));
// 	return true;
// });

// ! O filter está filtrando todos os itens que contém R$
// const precosFiltro = precos.filter(function (preco) {
// 	return preco.includes('R$'); // ! retorna os itens que contém R$
// });

// ! O mesmo filter anterior porém simplificado
// const precosFiltro = precos.filter((preco) => {
// 	return preco.includes('R$');
// });

// ! O mesmo filter que os anteriores porém mais simplificado ainda
// const precosFiltro = precos.filter((preco) => preco.includes('R$'));

// ! O mesmo filter que os anteriores porém mais simplificado ainda mudando precos para 'p'
// const precosFiltro = precos.filter((p) => p.includes('R$'));
// console.log(precosFiltro);

// * Map
// ? Retorna uma nova array, modificada com o retorno de cada item da função
// ! No exemplo abaixo será retornado 'teste' pra cada item filtrado no array,
// ! ou seja ao invés de retornar ['R$ 200', 'R$ 400', 'R$ 300', 'R$ 400']
// ! será retornado ['teste', 'teste', 'teste', 'teste']
// const precosNumeros = precosFiltro.map((preco) => 'teste');

// ! No exemplo abaixo será retornado ['undefined 200', 'undefined 400', 'undefined 300', 'undefined 400']
// ! ao invés de retornar ['R$ 200', 'R$ 400', 'R$ 300', 'R$ 400']
// const precosNumeros = precosFiltro.map((preco) => preco.replace('R$'));

// ! Retorna [' 200', ' 400', ' 300', ' 400']
// const precosNumeros = precosFiltro.map((preco) => preco.replace('R$', ''));

// ! Retorna ['200', '400', '300', '400'] note que sem o espaço dessa vez
// const precosNumeros = precosFiltro.map((preco) => preco.replace('R$ ', ''));

// ! Retorna [200, 400, 300, 400], dessa vez convertido pra Number
// const precosNumeros = precosFiltro.map((preco) =>
// 	Number(preco.replace('R$ ', '')),
// );

// console.log(precosNumeros);

// * Expressões
const grupoA = 100;
const grupoB = 200;

// if (grupoA > grupoB) {
// 	console.log('Grupo A, ganhou');
// } else {
// 	console.log('Grupo B, ganhou');
// }

// ! Operador ternário é uma expressão, já if-else não
// const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu';
// console.log(vencedor);

// ! Um array é uma expressão
// const vencedor = [323, 3243];

// ! Uma operação é uma expressão
// const vencedor = grupoB * 20;

// console.log(vencedor);

// ! O && é uma expressão (no caso abaixo, se active for true então ele retorna 'Botão está ativo', senão retorna false)
const active = true;
const button = active && 'Botão está ativo';
console.log(button);
