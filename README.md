# Country Search Application

This is a responsive web application built with React that includes a custom search component to search for country names. The application uses Firebase authentication for user management and includes private routes to protect certain pages.

## Features

- Responsive design
- Custom search component to search countries by name
- Firebase authentication for user login and registration
- Private routes to protect certain pages

## Technologies Used

- React
- Tailwind CSS
- Firebase Authentication
- react-router-dom

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase project setup

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/country-search-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd country-search-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env.local` file in the root directory and add your Firebase configuration:

    ```env
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:5173`.

## Usage

- Use the search bar to search for country names.
- Register or log in using Firebase authentication to access private routes.

## Project Structure

```plaintext
src/
├── components/
│   ├── Auth/
│   ├── PrivateRoute.js
│   ├── Search.js
│   └── ...
├── contexts/
│   └── AuthContext.js
├── pages/
│   ├── Home.js
│   ├── Login.js
│   ├── Register.js
│   ├── Country.js
│   └── ...
├── App.js
└── index.js
