# Services Folder

Contais the external services

- api.js (it creates an axios instance with the base url)
- items.js
  - searchItems (method)
    - usage: makes a get request on mercado livre api and brings a collection of products
    - params: ( query: String, limit: Number )
  - searchItemByid (method)
    - usage: makes a get request on mercado livre api and brings the details of a single product
    - params: ( itemID: String)
  - searchCategories (method)
    - usage: makes a get request on mercado livre api and brings an array of categorie names
    - params: ( categoryID: String)
  - searchDescription (method)
    - usage: makes a get request on mercado livre api and brings the description of an item
    - params: ( itemID: String)
