export interface State {
  id: number;
  name: string;
  acronym: string;
  ibge_code: number;
  ddds: string;
}

export const states: State[] = [
  { id: 1, name: "Acre", acronym: "AC", ibge_code: 12, ddds: "[68]" },
  { id: 2, name: "Alagoas", acronym: "AL", ibge_code: 27, ddds: "[82]" },
  { id: 3, name: "Amazonas", acronym: "AM", ibge_code: 13, ddds: "[97,92]" },
  { id: 4, name: "Amapá", acronym: "AP", ibge_code: 16, ddds: "[96]" },
  {
    id: 5,
    name: "Bahia",
    acronym: "BA",
    ibge_code: 29,
    ddds: "[77,75,73,74,71]",
  },
  { id: 6, name: "Ceará", acronym: "CE", ibge_code: 23, ddds: "[88,85]" },
  {
    id: 7,
    name: "Distrito Federal",
    acronym: "DF",
    ibge_code: 53,
    ddds: "[61]",
  },
  {
    id: 8,
    name: "Espírito Santo",
    acronym: "ES",
    ibge_code: 32,
    ddds: "[28,27]",
  },
  { id: 9, name: "Goiás", acronym: "GO", ibge_code: 52, ddds: "[62,64,61]" },
  { id: 10, name: "Maranhão", acronym: "MA", ibge_code: 21, ddds: "[99,98]" },
  {
    id: 11,
    name: "Minas Gerais",
    acronym: "MG",
    ibge_code: 31,
    ddds: "[34,37,31,33,35,38,32]",
  },
  {
    id: 12,
    name: "Mato Grosso do Sul",
    acronym: "MS",
    ibge_code: 50,
    ddds: "[67]",
  },
  {
    id: 13,
    name: "Mato Grosso",
    acronym: "MT",
    ibge_code: 51,
    ddds: "[65,66]",
  },
  { id: 14, name: "Pará", acronym: "PA", ibge_code: 15, ddds: "[91,94,93]" },
  { id: 15, name: "Paraíba", acronym: "PB", ibge_code: 25, ddds: "[83]" },
  { id: 16, name: "Pernambuco", acronym: "PE", ibge_code: 26, ddds: "[81,87]" },
  { id: 17, name: "Piauí", acronym: "PI", ibge_code: 22, ddds: "[89,86]" },
  {
    id: 18,
    name: "Paraná",
    acronym: "PR",
    ibge_code: 41,
    ddds: "[43,41,42,44,45,46]",
  },
  {
    id: 19,
    name: "Rio de Janeiro",
    acronym: "RJ",
    ibge_code: 33,
    ddds: "[24,22,21]",
  },
  {
    id: 20,
    name: "Rio Grande do Norte",
    acronym: "RN",
    ibge_code: 24,
    ddds: "[84]",
  },
  { id: 21, name: "Rondônia", acronym: "RO", ibge_code: 11, ddds: "[69]" },
  { id: 22, name: "Roraima", acronym: "RR", ibge_code: 14, ddds: "[95]" },
  {
    id: 23,
    name: "Rio Grande do Sul",
    acronym: "RS",
    ibge_code: 43,
    ddds: "[53,54,55,51]",
  },
  {
    id: 24,
    name: "Santa Catarina",
    acronym: "SC",
    ibge_code: 42,
    ddds: "[47,48,49]",
  },
  { id: 25, name: "Sergipe", acronym: "SE", ibge_code: 28, ddds: "[79]" },
  {
    id: 26,
    name: "São Paulo",
    acronym: "SP",
    ibge_code: 35,
    ddds: "[11,12,13,14,15,16,17,18,19]",
  },
  { id: 27, name: "Tocantins", acronym: "TO", ibge_code: 17, ddds: "[63]" },
];
