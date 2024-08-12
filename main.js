const alunos = [
  { nome: "Lucas", nota: 7 },
  { nome: "Thiago", nota: 8 },
  { nome: "Maria", nota: 5 },
  { nome: "Luana", nota: 6 },
  { nome: "Zé", nota: 3 },
];

function verificaNota(alunos) {
  return alunos.filter((aluno) => aluno.nota >= 6);
}

const alunosAprovados = verificaNota(alunos);
console.log(alunosAprovados);
