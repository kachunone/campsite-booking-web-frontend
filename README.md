# Campsite Booking App

This is a full-stack campsite booking application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to search for campsites, filter them using a search bar, book campsites, and cancel bookings. User authentication is implemented using JSON Web Tokens (JWT). The frontend is built with React and TypeScript, and Bootstrap is used for styling.

## Features

- Search campsites: Users can search for campsites using the search bar. The search results are dynamically filtered based on the input.

- Campsite filtering: Users can filter campsites based on their search query. The app provides a user-friendly interface to narrow down the search results.

- Campsite booking: Users can book campsites by selecting their desired dates and submitting a booking request. The booking information is sent to the backend for processing and storage.

- Booking cancellation: Users can cancel their bookings if needed. The app provides a straightforward process for canceling a booking, ensuring a seamless user experience.

- User authentication: User authentication is implemented using JSON Web Tokens (JWT). Users can register, log in, and securely access their bookings and account information.

## Technologies Used

- Frontend: React, TypeScript, Bootstrap
- Backend: Node.js, Express.js, MongoDB
- Authentication: JSON Web Tokens (JWT)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/campsite-booking-app.git
```

2. Install the dependencies:

```bash 
cd campsite-booking-app
npm install
```
3. Set up the backend server:

- Follow the instructions provided in the backend repository at https://github.com/kachunone/campsite-booking-web-backend.git to install and configure the backend server.
4. Configure environment variables:

- Create a .env file in the root directory of the frontend.
- Provide the necessary environment variables, such as API endpoints in the .env file.

5. Start the development server:

```bash
npm start
```

The app will be running at http://localhost:3000.


