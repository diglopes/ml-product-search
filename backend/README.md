# ML - Product Search | Backend

This folder contains all the files related to the backend

### Routes:

- /products

  - method: GET
  - usage: search for items by a query-string variable named (q)
  - example: /products?q=product+name

- /products/:id

  - method: GET
  - usage: search for an item details by id
  - example: /product/MLB1337287938

### Packages used to build the backend application:

- express (for server running)
- cors (to enable CORS)
- axios (for HTTP requests)
- dotenv (to loads environment)
- nodemon (to restart the server after each change)
- jest (for unitary and integration tests)
- supertest (for HTTP assertions)
