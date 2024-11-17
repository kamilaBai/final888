This project is my submission for a portfolio management system built using Node.js, Express, and MongoDB. It includes a Game of Thrones-themed interface, news widgets, and a currency exchange graph for visualization. The goal of this project was to demonstrate my skills in backend and frontend development while integrating APIs.

Features
User Management:

Registration and login with username, password, role (admin/editor), and optional 2FA.
Admins can fully manage portfolio items, while editors have limited access.
Portfolio CRUD Operations:

Users can add, edit, delete, and view Game of Thrones-themed portfolio items with images and descriptions.
News Integration:

Displays live news fetched from a public API.
News articles are shown in dynamic, styled cards.
Currency Exchange Visualization:

Displays live currency exchange rates fetched from a currency API.
Includes a dropdown to select the base currency and displays data as a bar chart using Chart.js.
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB
Frontend: EJS (Embedded JavaScript)
Styling: CSS, Bootstrap
APIs:
News API: https://newsapi.org/
Currency API: https://open.er-api.com/
How to Set Up the Project
Clone the repository:

bash
Копировать код
git clone https://github.com/your-repo-name.git
cd your-repo-name
Install the required dependencies:

bash
Копировать код
npm install
Set up the .env file:

Create a .env file in the root directory.
Add your MongoDB connection string and API keys:
env
Копировать код
MONGO_URI=your-mongodb-connection-string
SESSION_SECRET=your-session-secret
NEWS_API_KEY=your-news-api-key
CURRENCY_API_KEY=your-currency-api-key
Run the application:

bash
Копировать код
npm start
Open your browser and visit:

arduino
Копировать код
http://localhost:3000
How the Application Works
User Registration and Login
Navigate to /register to create an account with your details.
After registration, you are redirected to the login page.
Login requires a username and password. If 2FA is enabled, you'll need to provide the 2FA code.
Portfolio Management
Admins can:
Add, edit, delete, and view portfolio items (with titles, descriptions, and images).
Editors can:
Add and edit portfolio items but cannot delete them.
News Widget
Navigate to /news to view the latest news headlines.
Live news articles are displayed dynamically in styled cards.
Currency Exchange
Navigate to /currency to view the currency exchange widget.
Select a base currency to update the exchange rates, displayed as a bar chart

