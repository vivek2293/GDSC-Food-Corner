# Devheat_Beta_AbsoluteZero
---
Problem Statement: Kamrej Calling\
Team Name:AbsoluteZero\
Authors: Vivek Kumar, Shrey Shah, Nachiket Dodia
***
## Project Title: GDSC FOOD CORNER
---
## Brief Idea
---
Our project consists of two sides namely, client and admin side. The client side is for
the people who visit the restaurant and place orders whereas the admin side is for the
management to generate the gst invoice and manage orders.
***
## Tech Stack Used
---
Front-end : HTML,CSS,Bootstrap,JavaScript and EJS.\
Back-end : NodeJs, ExpressJs and Node Packages.\
Database: MongoDB.
***
## How Are Project Solves the Problem Statement
---
People can scan a qr code provided by the restaurant on their table to directly reach the homepage of the website and place an order accordingly with our website. In a group everyone can even place a seperate order as we have made it very easy for them to do so and in that way no one has to calculate the bill split by themselves and instead they just have to pay for themselves and receive a seperate invoice for each member of the group. Even if the user doesn't have a device, the admin can place an order from their behalf using the client side. The admin also has the choice to either print the invoice or just send the invoice to customer's email id. Overall the restaurant management do not need any kind of other software or hardware for their billing system.
***
## Future Scopes of Addition
---
A machine learning model can be generated based on the frequency of the food orders as well as the menu positioning and various kinds of data points can be extracted from it from admin's perspective.\
Blockchain and UPI can be integrated in the webapp itself for the user, so as to reduce any further interactions and make it convinient for the user.
***
## Working of the Website
---
As the user places an order, the details of the orders are scanned and converted in object by our JavaScript code. This object is then posted using fetch to **localhost:3000/order** as a JSON file and the **server.js** file receives it and creates an object as per our specified schema by using the data that it received and saves the object in our database using the functions **mongoose** package. On the admin side we parse the id to **server.js** of the order that is to be deleted when the admin wishes to do so. From there we use **pdfkit** and **mongoose** to generate the invoice and delete the order from the database respectively.