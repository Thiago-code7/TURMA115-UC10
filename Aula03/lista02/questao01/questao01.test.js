/*
calcularMedia(lista)
Calcula a média dos números em uma lista.
Entrada: [7, 8, 9]
Saída esperada: 8 (tipo: number)
Entrada: []
Saída esperada: null (tipo: null)
*/
const calcularMedia = require("./questao01");
describe('Testes para a função calcularMedia', ()=>{
    test('Testar se a função calcula corretamente a média',() =>{
        expect(calcularMedia([8,8,2])).toBe(6);   
    });
    test('Testar se a função retorna null ao receber um array vazio', () =>{
        expect(calcularMedia([])).toBeNull();
    });
    test('Testar se a função retorna erro quando o tipo de dado não é um array', ()=>{
        expect(()=>calcularMedia("jorel")).toThrow('Não é possivel realizar o calculo');
    });

    test('Testar se a função retorna erro quando nenhum dado é passado como parametro', ()=>{
        expect(() => calcularMedia()).toThrow('Não é possivel realizar o calculo');
    });


})
