# Expenses Tracker Web App

## Overview
The **Expenses Tracker Web App** is a full-stack application that helps users track their expenses effectively. With an intuitive interface and robust functionality, users can log, categorize, and analyze their expenses, making budgeting and financial management simpler and more efficient.

## Features
- **User Authentication**: Secure login and registration using JWT.
- **Expense Management**:
  - Add, edit, and delete expenses.
  - Categorize expenses (e.g., food, travel, shopping, utilities).
- **Analytics Dashboard**:
  - View monthly spending summaries.
  - Visualize spending patterns with charts.
- **Export Data**: Download expense records in CSV format.
- **Responsive Design**: Fully optimized for both mobile and desktop devices.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL database for storing user data and expenses)
- **Authentication**: JWT for secure authentication
- **Charts**: Chart.js for visualizing expenses


## Installation and Setup
Follow these steps to run the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Anjali_211003/expenses-tracker.git
   cd expenses-tracker


2.Backend Setup

Navigate to the backend directory:
    cd backend

Install dependencies:
    npm install

Create a .env file in the backend directory and add:
    MONGO_URI=your-mongodb-uri
    PORT=5000

Start the backend server:
    npm start

3. Frontend Setup

 Navigate to the frontend directory:
     cd ../frontend

  Install dependencies:
     npm i
     npm i @tanstack/react-query
     npm i @reduxjs/toolkit
     npm i chart.js
     npm i react-chartjs-2
     npm create vite@latest
     npm install tailwindcss @tailwindcss/postcss postcss
     npm i react-icons
     npm i axios
     npm i formik
     npm i @headlessui/react
     npm i @heroicons/react/24/outline
     npm i react-router-dom
     npm run dev

4.Access the Application

Open your browser and visit: http://localhost:5173

Usage
Sign Up/Login: Create an account or log in with existing credentials.
Add Expenses: Log your daily expenses with a category and amount.
View Analytics: Check monthly and category-wise spending patterns.
Download Reports: Export your expense history for offline use.

Future Enhancements
Integration with bank APIs for automated expense logging.
Multi-currency support.
AI-based expense categorization suggestions.


License
This project is licensed under the MIT License.