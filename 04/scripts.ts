const geradorDeEtiquetas = (produto: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  let resultado: string[] = [];

  for (let p = 1; p <= produto.qtd; p++) {
    resultado.push(
      `${produto.lote} - ${produto.ano} - ${p.toString().padStart(3, "0")}`
    );
  }

  return resultado;
};

const produto: { produto: string; lote: number; ano: number; qtd: number } = {
  produto: "CPU Dual Core 3.0GHZ",
  lote: 321,
  ano: 2022,
  qtd: 5,
};

console.log(geradorDeEtiquetas(produto));

//     {
//         produto: 'CPU Dual Core 3.0GHZ',
//         lote: 321,
//         ano: 2022,
//         qtd: 5
//     }

// ;[
//     "321-2022-001",
//     "321-2022-002",
//     "321-2022-003",
//     "321-2022-004",
//     "321-2022-005",
// ]
