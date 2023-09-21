
# ImageFolio

ImageFolio is a user-friendly and elegant image gallery application that allows you to effortlessly organize and showcase with your favorite images. 
ImageFolio provides a seamless and intuitive experience for image enthusiasts of all levels. Enjoy a visually pleasing way of organizing your images with ImageFolio

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Requirements](#requirements)
- [Technologies Used](#tech-stack)
- [Screenshots](#screenshots)

## Features

- **User-Friendly Sign-In**: Easily access your account with simple authentication. Use the following credentials to log in:
    - Email: <user@example.com>
    - Password: 1Password (case-sensitive)
     **Guided Validation**: The system provides clear and helpful validation to ensure a smooth login experience.

- **Image Display**: The gallery presents a grid layout with visually appealing images, each accompanied by tags.

- **Loading State**: A loading state is displayed when images are not yet ready for presentation. This may include a skeleton loader or a loading spinner when loading is in progress.

- **Search Functionality**: Users can filter the image list based on tags associated with each image.

- **Drag-and-Drop**: Users (Logged in users) can drag and drop images within the gallery to rearrange them.

- **User-friendly Feedback**: Smooth animations and visual cues provide feedback during drag and drop interactions.

- **Responsive Design**: The gallery is responsive, ensuring seamless functionality on various devices, including mobile phones, tablets, and desktops.

- **Design Flexibility**: While adhering to the above requirements, the project allows for creative freedom to design a unique and appealing gallery.

## Getting started

To get started with this project locally, follow these steps:

- Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Jonnie-Dev/ImageFolio.git

- Navigate to the project directory:
    ```bash 
    cd ImageFolio

- Install the necessary dependencies:
    ```bash 
    npm install

- Create a .env file with the follwing environment variables setup for firebase
    ```
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID
    ```

- Start the development server: 
    ```bash
    npm run dev

- Open your web browser and access the application at ```http://localhost:5173```
## Requirements

To run the project, ensure you have the following requirements met:

- Node.js installed
- NPM or Yarn package manager
- Authentication backend (Firebase) for user login

## Tech Stack

**Client:** React, React-Router, React-DND, TailwindCSS

**Server:** Node

**Auth**: Firebase


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

