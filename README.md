# SSWU Final Project - Organick Landing Page

Organick Landing Page is a ReactJS-based web application that provides a user-friendly interface for displaying organic products and allows users to order them. The page provides an easy-to-use and visually appealing layout with smooth animations and dynamic data fetching from a Firebase Store. It has been designed to be reusable, scalable and easily extendable with new features.

# Features

The landing page offers several features, including smooth buttons, section and modal animations, and a component-driven interface. It is built using ReactJS, which includes various hooks and packages, and Tailwind for styling. The dynamic data fetching from the Firebase Store provides a seamless user experience. Users can place an order using the order functionality implemented using Redux for state management, validation logic, and custom-built useInput hook.

# Technologies used

- ReactJS (incl. hooks, packages etc.)
- Tailwind for styling
- Firebase services for storing products data, images and user orders

# Usage

The landing page can be accessed either by visiting the [link](https://organickdb.web.app/) or downloading the repository from GitHub. The downloaded repository can be unzipped, and the project folder can be opened in a code editor/IDE. To run the page, open the terminal, type 'npm i' or 'npm install', and 'npm start'.

# Implementation details

The Organick Landing Page was built using ReactJS in a component-driven, functional style. Each section and page element is split into smaller, reusable components. The product section is the center of functionality, and product data, including images, are loaded dynamically from the Firebase Store. The user order functionality is implemented using state, Redux, CSSTransition component, and validation logic. The submission form has a list of the desired products with the ability to manipulate the state. The order confirmation process includes a success page or an error page. After submission, user data is stored on the firebase in a separate collection.

# Important note

Considering the deadline, hotfixes and new features implementations to the project will be commited to the new after-deadline branch. This may affect the display of the hosted page.

---

# Credits

This project was created by Alex Bihas.

# License

This project is licensed under the MIT License.
