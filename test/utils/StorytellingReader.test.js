const Reader = require('./../../lib/utils/Reader')

describe('Pruebas de Reader Storyscroll', () => {
    test('1. Test de prubea', () => {
        const jsonFile = 'animales.json'
        const readFile = Reader.sendData(jsonFile)

        expect(readFile.length).toBe(10);
    })
})
