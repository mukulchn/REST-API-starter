const request = require('supertest');
const app = require('./app').app;
const build = require('./app').productBuilder;
const db = require('./app').db;

// TEST THE REST API ENDPOINT FOR GET
describe('GET requests', () => {
    
    test('GET product/read endpoint, expect 200', async () => {
        const res = await request(app).get('/product/read')
        expect(res.statusCode).toBe(200);
    });

    test('GET bad endpoint, expect 404', async () => {
      const res = await request(app).get('/badEndPoint')
      expect(res.statusCode).toBe(404);
    });

});

// TEST THE REST API ENDPOINT FOR POST
describe('CREATE request', () => {
    
    test('CREATE product test', async () => {
	// TEST IN HERE
        const res = await request(app)
            .post('/product/create')
            .set({"name":"example product", "description":"this is an example", "price":9.99})
            .then((res) => {
                expect(res.statusCode).toBe(201);
            })
        
    });

});

// TEST THE REST API ENDPOINT FOR PUT
describe('UPDATE request', () => {
    
    test('UPDATE product test', async () => {
	// TEST IN HERE
    let product = build("product2", "great product2", 2.99);
    db.insert(product, (err, product) => {
        //console.log(`Created a new product:\n`);
        //console.log(product);
    });

    let productFind;
    db.find({}, (err, products) => {
        // log the data to console
        //console.log(`Reading all products:\n`);
        //console.log(products);
        productFind = products[1];
        //console.log(productFind);
    });

    const res = await request(app)
        .put(`/product/update/12`)
        .set({"name":"product3", "description":"this is an awesome product", "price":3.99})
        .then((res) => {
            expect(res.statusCode).toBe(202);
        })
    
    });

    db.find({}, (err, products) => {
        // log the data to console
        console.log(`Reading all products:\n`);
        console.log(products);
    });

});

// UNIT TEST THE PRODUCT BUILDER
describe('Unit Tests', () => {

    test('product object builder', () => {
        // TEST IN HERE
        expect(build("product1", "great product", 1.99)).toStrictEqual({"name":"product1", "description":"great product", "price":1.99});
    });

});
