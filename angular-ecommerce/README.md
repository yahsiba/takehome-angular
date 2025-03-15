```markdown
# AngularEcommerce

A simple e-commerce application built with **Angular** that showcases a list of soccer jerseys. Users can view product details, add items to a cart, and see an order summary. The app follows best practices for component architecture, services, routing, and styling.

## Features

- **Product Listing**: Displays a list of products fetched from a service.  
- **Product Details**: Shows detailed information about a product (name, description, price, stock).  
- **Cart Management**: Allows adding and removing products; enforces stock limits.  
- **Alerts**: Shows a banner alert for out-of-stock or max limit reached.  
- **Responsive Layout**: Uses a shared global stylesheet for consistent UI styling.

## Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js)
- **Angular CLI** (optional, you can use `npx` if not installed globally)

## Getting Started

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/AngularEcommerce.git
   cd AngularEcommerce
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```
   This command installs all required packages, including Angular.

3. **Run the Development Server**  
   - **Option A**: If you have Angular CLI installed globally:
     ```bash
     ng serve
     ```
   - **Option B**: If you don’t have Angular CLI installed globally:
     ```bash
     npx ng serve
     ```
   The application will be served at [http://localhost:4200](http://localhost:4200).

## Scripts

- **`npm start`**: Runs `ng serve` to start the dev server.
- **`npm run build`**: Builds the production bundle into `dist/angular-ecommerce`.
- **`npm test`**: Runs unit tests (if configured).
- **`npm run e2e`**: Runs end-to-end tests (if configured).

## Project Structure

- **`/src/app/components/`**: Reusable components (Header, Alert, Buttons, etc.)  
- **`/src/app/pages/`**: Feature pages (ProductsList, Cart, ProductDetail)  
- **`/src/app/services/`**: Business logic and data handling (CartService, ProductService)  
- **`/src/app/models/`**: Interfaces (Product model)  
- **`/src/styles/`**: Shared or global styles (shared-styles.css)

## License

This project is open-sourced under the [MIT License](LICENSE).
```