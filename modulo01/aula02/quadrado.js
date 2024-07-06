// * Módulo
/* Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e 
compartilhamento de código comum.

<!-- Só funciona em servidor, seja local ou online
Não irá funcionar se você abrir o html direto -->
<script type="module" src="./script.js"></script> <-- configuração do módulo no html
*/

// ? O export exporta as funções que podem ser utilizadas em outros documentos
// export function areaQuadrado(lado) {
// 	return lado * lado;
// }

// export function perimetroQuadrado(lado) {
// 	return 4 * lado;
// }

// ? exportando objeto único com funções
function areaQuadrado(lado) {
	return lado * lado;
}

function perimetroQuadrado(lado) {
	return 4 * lado;
}

const quadrado = {
	areaQuadrado,
	perimetroQuadrado,
};

export default quadrado;
