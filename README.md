# Under the Sea Scuba Shop
A full CRUD, multi-page application, emulating an e-commerce store.
Under the Sea Scuba Shop displays a list of items for sale. Each product type has a display page, and each individual project has a show page.
User's can easily navigate through shop, adding items to a cart, which interacts with inventory.
Admin users can create, edit and delete items.

#### Items to improve upon/ to do's:
- check for unused variables
- simplify the controllers -- use variable
- simplify the layouts ---use variables
- check for dead CSS, HTML
- mobile responsive
- images:   save all images in image public folder?
- Cart - have items add up
- add User Auth...disable create/update/delete, must be signed in with 'demo' pw
- make sure deployed to Heroku

## Project features:
  - A working multi-page application built with Express using Node.js, and MongoDB/Mongoose
  - Multiple models with full CRUD application
  - Authorization that includes sign up/login functionality, with encrypted passwords & an authorization flow

### As a user
- I am greeted with a home page containing multiple scuba dive items.
- I can click on any of the items and am taken to the product's index page.
- I can browse any particular item and see different types of the product.
- I can add items to a shopping cart and view the cart containing my items at any time
- I can easily navigate throughout the site from page to page with links taking me back and forth when needed
- If I am the admin, I can edit/delete/add products to the store
- I can check my cart to view items see total amount

### As a developer I
- created a multi-page application, emulating an e-commerce store
- implemented a home page displaying various types of products
- created an index page for each product type that displays image, price, brief description and name for for each product.
- created individual show page for each individual item allowing user to add to cart or admin to edit/delete product
- implemented authorization that includes sign up/login functionality, with encrypted passwords & an authorization flow (sign-up disabled for purposes of demo only)
- created a cart that totals price of items, as well as updates inventory on product's individual show page
- created links/buttons allowing user to easily navigate throughout site
- allow user to add products to cart,
- created a controlled inventory, that increases/decreases if user places/deletes item in cart. Disables this option if quantity reaches zero.

## Technologies Used  

JavaScript\
JSX/Node.js\
MongoDB/Mongoose\
