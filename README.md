# Saturday Sips - Online Beer Catalogue

## Overview

Saturday Sips is an online catalogue where users can browse a variety of beers from different breweries, save their favorite beers for future reference, and search for specific beers. Users can easily navigate through the website without reloading the page, providing a seamless browsing experience.

## Project Structure

The project structure is organized as follows:

- `public/`: Contains files that will be publicly accessible, such as images or fonts.
- `src/`: Contains the source code of your application.
  - `assets/`: Contains assets like images, fonts, etc.
  - `components/`: Contains React components.
  - `styles/`: Contains CSS for styling.
  - `utils/`: Contains utility functions or helper files or own Hooks.
  - `redux/`: Contains Redux-related files such as store, reducers, etc.
  - `app.js`: Main entry point of your application.
  - `app.css`: Main CSS file for your application.
  - `index.js`: Entry point for ReactDOM rendering.
- `package.json`: File containing metadata and dependencies for your project.
- `readme.md`: File with project documentation and instructions.

## Key Implementation Details

#### Main Implementation Details

Saturday Sips is a modern web application built to provide a delightful user experience for beer enthusiasts. Here are the key implementation details:

- **Frontend**: The frontend of Saturday Sips is developed using React.js along with Redux Toolkit for state management. React Router is used for navigation. The application is designed to be responsive, ensuring a seamless experience across devices of all sizes.

- **Redux Toolkit**: Redux Toolkit is utilized for state management in Saturday Sips. It helps organize and simplify Redux code . The global state includes information such as saving favorite beers, and search results.

- **Search Functionality**: Saturday Sips features a robust search functionality that allows users to easily find their favorite beers. The search functionality is implemented using Redux and is powered by efficient search algorithms. When users enter a query in the search bar, the application triggers a request to the Punk API to retrieve beers that match the query. The search results are then displayed to the user, providing instant feedback.

- **Infinite Scrolling**: To enhance the browsing experience, Saturday Sips implements infinite scrolling. As users scroll through the list of beers, additional beers are loaded dynamically, ensuring a seamless and uninterrupted browsing experience. 

- **Favorite Beers**: Users can save their favorite beers for future reference. This feature is seamlessly integrated into Saturday Sips using Redux Toolkit. Users can easily add or remove beers from their list of favorites with just a single click. The list of favorite beers is persisted across sessions, providing a personalized experience for each user.

- **Error Handling**: Saturday Sips employs robust error handling mechanisms for API requests, including try-catch blocks, HTTP status code management, and user-friendly error messages, ensuring a seamless user experience.

- **Shimmer UI**: Shimmer UI provides a subtle animation effect, simulating content loading, enhancing user experience by indicating activity without actual data, commonly used in placeholders to give a sense of progress or activity in web and mobile applications.

These implementation details highlight the core functionalities and technologies powering Saturday Sips. The application is continually updated and refined to provide the best possible experience for beer enthusiasts.


## Instructions to Run Locally

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using node:

    ```
    npm install 
    ```

4. Run the application:

    ```
    npm run start
    ```

5. Open a web browser and navigate to `http://localhost:3000`.

## Deployed Application URL

The deployed application can be accessed at https://65c9f484e29cb7cbde86bd12--famous-buttercream-1fe10e.netlify.app/

