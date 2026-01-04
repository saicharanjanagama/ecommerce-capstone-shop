<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
<h1 align="center">🛒 React E-Commerce Capstone Application</h1>

<p align="center"> 
  <img src="https://img.shields.io/badge/Frontend-React%20JS-blue?style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Routing-React%20Router-red?style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/State-Context%20API-yellow?style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/API-FakeStoreAPI-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Storage-LocalStorage-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Capstone-Internship%20Project-green?style=for-the-badge" /> 
</p> 

<p align="center">
  A production-style <b>React E-Commerce Web Application</b> built as a 
  <b>Capstone Internship Project</b>.  
  The app simulates a complete online shopping experience including 
  <b>product catalog, authentication, cart persistence, checkout flow</b>, 
  and <b>CI/CD deployment</b>.  
  Designed following real-world frontend development practices.
</p>

---

## 🚀 Live Demo  
🔗 **View Project:**  [🛒 React E-Commerce Capstone](https://ecommerce-capstone-shop.vercel.app/)

📸 **Preview:**  
<p align="center">
  <img src="Screenshot.png" width="700" alt="E-Commerce App Preview"/>
</p>

---

## 🎯 Features

- 🛍️ Product listing using FakeStoreAPI  
- 🔍 Product details page  
- 🧭 Client-side routing with React Router  
- 🔐 User authentication (simulated)  
- 🛒 Add / remove items from cart  
- 🔢 Quantity management  
- 💾 Persistent cart & auth using LocalStorage  
- 🔒 Protected routes (Cart & Checkout)  
- 🧾 Checkout form with validation  
- ✅ Order summary & confirmation screen  
- ⚡ Lazy loading & skeleton loaders  
- 📱 Fully responsive (mobile & desktop)

---

## 🛠️ Technologies Used

- **React JS**  
  *(Component-based architecture, hooks)*  
- **React Router DOM**  
  *(Modern routing & protected routes)*  
- **Context API**  
  *(Global state management)*  
- **FakeStoreAPI**  
  *(External e-commerce API)*  
- **LocalStorage API**  
  *(Persistent state)*  
- **Vercel**  
  *(Deployment with CI/CD)*  

---

## 🧠 How the App Works

1. Products are fetched from FakeStoreAPI
2. Users browse products & view details
3. Authentication state is managed via Context API
4. Cart state persists using LocalStorage
5. Protected routes restrict checkout access
6. Checkout form validates user input
7. Order confirmation displayed on success
8. App auto-deploys via GitHub → Vercel

---

## 🔐 Authentication & Authorization

- Simulated Login & Register flow  
- Auth state stored in LocalStorage  
- Global auth management using Context API  
- Protected routes restrict unauthenticated access  

---

## 🛒 Cart & Checkout Flow

- Add products to cart
- Update quantities or remove items
- Cart persists after refresh
- Checkout form validates user input
- Order summary displayed
- Confirmation shown after successful order

---

## ⚡ Performance & Optimization

- Lazy loading of pages
- Skeleton loaders during API calls
- Conditional rendering
- Optimized component structure
- Clean separation of concerns

---

## 📂 Project Structure

ecommerce-capstone-shop/<br>
│── public/<br>
│── src/<br>
│   ├── components/ # Reusable UI components<br>
│   ├── pages/ # Page-level components<br>
│   ├── contexts/ # Auth, Cart, Order contexts<br>
│   ├── hooks/ # Custom hooks<br>
│   ├── services/ # API services<br>
│   ├── styles/ # Global styles<br>
│   ├── App.js<br>
│   ├── index.js<br>
│   └── vercel.json # React Router rewrite config<br>
│── README.md

---

## 📅 7-Day Development Plan

| Day | Task |
|----|------|
| Day 1 | Project setup & architecture planning |
| Day 2 | Product catalog & filtering |
| Day 3 | Product details & cart functionality |
| Day 4 | Authentication & protected routes |
| Day 5 | Checkout process & validation |
| Day 6 | Performance optimization & UI polish |
| Day 7 | Deployment, testing & documentation |

---

## 🚀 How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/saicharanjanagama/ecommerce-capstone-shop.git
cd ecommerce-capstone-shop
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start
```

---

## 📈 What This Project Demonstrates

- Real-world React application architecture
- Routing & protected routes
- State management for scalable apps
- API integration & async handling
- Persistent storage logic
- Production deployment with CI/CD

---

## 👨‍💻 Author

It’s me — **Sai Charan Janagama** 😄<br>
🎓 Computer Science Graduate | 🌐 Aspiring Full Stack Developer<br>
📧 [Email Me](saic89738@gmail.com) ↗<br>
🔗 [LinkedIn](https://www.linkedin.com/in/saicharanjanagama/) ↗<br>
💻 [GitHub](https://github.com/SaiCharanJanagama) ↗

---

## 💬 Feedback

If you have any feedback or suggestions, feel free to reach out!  
Your input helps me improve 🚀
>>>>>>> 8a0ffeca3b3cf2ee9c5d1b9bd462f430ba6a8f4f
