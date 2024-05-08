# Contact and COVID-19 Visualization App

This project provides an interface for managing contact information and visualizing COVID-19 data across the globe. It combines a CRUD interface for contacts with interactive charts and maps to display historical COVID-19 data.

## Live Demo

You can view a live version of the app at: [Contact and COVID-19 Visualization App](https://manvir-kaur-contact-and-covid19-vis.netlify.app/)

## Features

- **Contact Management:** Add, view, and update personal contact information.
- **COVID-19 Charts and Maps:** Visualize historical data on COVID-19 using interactive charts and geographical maps.

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **TypeScript:** An open-source language that builds on JavaScript by adding static type definitions, which helps in catching errors early through a more robust syntax before code is run or during compile time.
- **React Router:** Manages routing for the application, enabling navigation among different components and synchronizing the UI with the URL.
- **React Query:** Used for fetching, caching, and updating data in the app, simplifying state management related to asynchronous data operations.
- **Tailwind CSS:** A utility-first CSS framework used for rapidly building custom user interfaces directly in your markup.
- **Recharts:** A Redefined chart library built with React and D3, used for rendering custom charts.
- **Leaflet:** An open-source JavaScript library for mobile-friendly interactive maps.

## API Integration

- **COVID-19 data:** The app fetches historical data and current statistics about COVID-19 cases from the [Disease.sh API](https://disease.sh/docs/).

## Router Endpoints

This application uses React Router for navigation between components. Here are the main routes:

- `/` - **ContactsPage:** The main page for contact management where users can view and edit their contacts.
- `/create-contact` - **CreateContactPage:** Allows users to add new contacts.
- `/charts-and-maps` - **ChartsAndMapsPage:** Displays interactive charts and maps with COVID-19 data.

## Installation and Setup

Clone the repository, install dependencies, and start the local server:

```bash
git clone https://github.com/ManvirKaur19/Contact-and-Covid-19-data-Visualization-React-App.git
cd Contact-and-Covid-19-data-Visualization-React-App
npm install
npm start
```
This will run the app in the development mode. Open http://localhost:3000 to view it in your browser.
