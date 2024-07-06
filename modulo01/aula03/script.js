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
