React E-Commerce Application - AURA PERFUME
I.D. SENADHEERA
isharadasuni160@gmail.com
2024/DEC

********************************************************************************************

1. ABOUT 

This is a front-end React application implementing a simple e-commerce platform. 
It includes user authentication, product management, and a shopping cart feature, 
with Redux for state management and MUI for the UI. The application does not rely 
on a backend; instead, it uses Redux to store data temporarily.

********************************************************************************************

2. FEATURES

User Authentication 
	*Registration: Users can register with their name, email, and password.
	*Login: Users can log in with their email and password.
	*Authentication state is managed using Redux, ensuring persistence 	  	  
	  during navigation without requiring a page refresh.

Product Management
	*Display a list of products with attributes such as name, price, description,  
	  and image.
	*Products are hardcoded in the application.
	*Filter by category and Search by name, and price.

Shopping Cart

	*Add products to the cart.
	*Update the quantity of items in the cart.
	*Remove items from the cart.
	*Display the total cost of items in the cart.
	*Cart updates dynamically without page reloads.

Client-Side Routing
	*Routes for login/register, product list, and shopping cart pages are 	   
	   managed using React Router.

Persistence
	*Authentication state and cart data persist across sessions using local 	  
	  storage.

********************************************************************************************

3. INSTALLATION  AND  SETUP

Prerequisites
	*Node.js ( v18.17.1 or higher )
	*npm      
Steps

	1. Clone the repository 
	     (GitHub Link -> https://github.com/isharadasuni/E-CommerceWebAura)
			or 
	     unzip the provide ID_Senadheera_task.zip and use  'aura_perfume' folder

	2.Install dependencies (using 'npm install'  or 'yarn install' commands)

	3.Run the application(using 'npm start'  or 'yarn start'  commands)

	4.Open the application in your browser


********************************************************************************************

4. USAGE 

Registration
  *Navigate to the "Registration" page.
  *Fill in your name, email, and password, and submit.
	
Login
  *Use the registered credentials to log in.

Browse Products
  *View available products on the "Products" page.
  *Insert quantity.
  *Add items to the cart.
  *Notify product count on the Navbar.

Shopping Cart
  *Access your cart to view, , or remove items.
  *See the total cost dynamically update.


***NOTE THAT YOU CAN'T REFRESH THE PAGE AND FIRST NEED TO REGISTER BEFORE
LOGIN TO THE SYSTEM. ALL PATHS ARE PROTECTED THEN GO THROUGH THE PROVIDE 
USAGE.***

********************************************************************************************

5. DESIGN CHOICES

*Redux  
Centralized state management for authentication, products, and cart, ensuring smooth
 inter-component communication.

*SCSS 
For modular and reusable styling.

*MUI
Pre-built components for a polished and consistent UI.

********************************************************************************************

6. NOTES

This application is for demonstration purposes and does not include backend functionality. 
Authentication and cart data are stored temporarily in the browser using Redux and local storage.











