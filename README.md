Local Dish Corner

This is a webapp that brings together vendors and buyers on the same platform. It serves as a marketplace that allows users to find what they are looking for; vendors, to sell their local cuisines and customers to find vendors near them that provide authentic meals.

Problem Statement: 

The lack of visibility and accessibility of local culinary offerings within the community. Despite the rich diversity and uniqueness of local cuisines, many residents and visitors are unaware of the delicious options available nearby. This lack of awareness leads to the underutilization of local eateries, missed opportunities for businesses to thrive, and a diminished sense of community pride. Additionally, traditional marketing channels may not effectively reach potential customers, further exacerbating the issue.

Problem Solution: 
To create a platform that showcases local restaurants, food vendors, and culinary experiences, making it easier for people to discover, support, and enjoy the vibrant food culture of their community.

Product Features:
User authentication:
- Allow users to register, log in, and securely authenticate their identity.
- We used bcrypt for password hashing.
Search and discovery:
- Search bar with powerful search options
Restaurant profiles:
- Detailed information on each restaurant's profiles
Admin dashboard
- A dashboard for all vendors to track their sales

Frontend
We used React library to optimize on usability of the components. 
We used Bootstrap for their encapsulated components to create easy and visually appealing webapp. 

Technologies Used
- Html, CSS: The basic structure of the app and an external stylesheet for styling the components. 
- Bootstrap: A CSS framework for developing responsive. It provides a set of pre-designed UI components, such as buttons, forms, navigation bars, and more, which can be easily customized to fit the design requirements of the application.
- React: A JavaScript library for building user interfaces. It follows a component-based architecture, which promotes   reusability and modularity, making it ideal for building large-scale applications.
- Vite: A fast build tool for frontend development. It offers instant server start, making the development process faster and more efficient as it loads faster.

Dependencies:

React: A JavaScript library for building user interfaces.
Bootstrap: A popular CSS framework for developing responsive and mobile-first websites.
Vite: A fast build tool for modern web development.


Backend
We leverage Node.js and Express.js to build a robust backend infrastructure. Our database management system of choice is MongoDB, and we employ Mongoose for optimized modeling.

Technologies Used
- Node.js: A powerful JavaScript runtime environment that allows us to execute server-side code.
- Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- MongoDB: A leading NoSQL database program, known for its flexibility, scalability, and performance.
- Mongoose: An elegant MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straightforward schema-based solution to model application data.

Security Measures
- bcrypt: We utilize bcrypt for password hashing, ensuring secure storage of sensitive user credentials. By employing bcrypt, we mitigate the risk of password-related vulnerabilities such as brute-force attacks and rainbow table attacks.

Project Structure
- Our backend follows a structured architecture, with separate modules for different functionalities:

Methodologies:

Agile Development: The project follows the agile development methodology, allowing for continuous feedback and iterative development.
Component-Based Architecture: [Your Project Name] is built using a component-based architecture, promoting reusability and maintainability.

Challenges We encountered 
- A stiff learning curve
This project felt like we were thrown in the deep-end and forced to either sink or swim. We learned alot of things on the job and it was both exciting and challneging. 

Next Iteration and Future Plans While we're proud of the progress we've made with Local Dish Corner Application, we envision several improvements and additional features for future iterations, including:

Geo-location: Which will enhance search features and delivery needs in the future this will help users/vendors optimize the search feature already existing in the application.

Mobile App: Developing a mobile application for Local Dish Corner to ensure accessibility and convenience for users who maybe using it on their smartphones or tablets and for overal convenience. 

Collaboration with social media platforms for vendors: Introducing collaboration features to improve visibility for vendors.



To get started for collaboration:
1. Make sure you have Node in your system.
2. clone the repository at: https://github.com/R-Wangui/Local-Dish-Connect.git
3. install all the dependencies 
    use: npm install
4. Start the server
    npm run dev
5. open your browser, and your project will be on 
  Frontend:  http://localhost:5173/
  Backend:  http://localhost:5001/
