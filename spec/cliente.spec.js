const Cliente = require('../models/Cliente');

test('Testando se o objeto Cliente tem a propriedade nome', () => {
    let cliente = new Cliente()
    cliente.nome = "Eduardo"
  expect(cliente.nome).not.toBeUndefined();
});

test('Testando se o objeto Cliente tem a propriedade CPF', () => {
    let cliente = new Cliente()
    cliente.cpf = "123.456.789-00"
  expect(cliente.cpf).not.toBeUndefined();
});

test('Testando se a propriedade CPF é válida', () => {
    let cliente = new Cliente()
    cliente.cpf = undefined
  expect(cliente.validarCPF(cliente.cpf)).toBe(false);
});