# KulBoard

CodePath WEB103 Final Project

Designed and developed by: Manya Bondada and Arpit Singh

🔗 Link to deployed app:

## About

### Description and Purpose

The Family Task Management App is a comprehensive web platform designed to facilitate seamless communication and coordination within families. It provides a user-friendly interface for family members to collaboratively plan, assign, and track tasks. Users can create and manage tasks, assign them to themselves or others, and receive notifications for upcoming responsibilities. The app features a shared task calendar, enabling users to view daily, weekly, or monthly schedules. It also includes a messaging system for family members to discuss tasks and updates. The app's primary goal is to simplify task management and improve the organization of household chores and responsibilities, ultimately enhancing the overall quality of family life.

### Inspiration

Our team's inspiration for this project arises from a shared understanding of the complex dynamics within modern families. We've collectively recognized the challenges faced by working family members, who often struggle to balance their professional commitments with household chores and responsibilities. Witnessing instances where miscommunication led to significant disruptions in daily routines reinforced our determination to develop a solution that promotes transparent and efficient communication. By collaborating on the creation of a comprehensive web app, our aim is to provide a platform that enables seamless task management and facilitates effective coordination among family members. Our collective vision is to foster a more organized and harmonious family environment, where every member can thrive and contribute to a smoother daily life experience.

## Tech Stack

Frontend: React.js, HTML/CSS, Tailwind CSS, Material UI, Full Calendar

Backend: Express.js, Node.js, PostgreSQL, JSON web token, Railway, REST APIs

## Features

### ✅ Task Updates

Users can update a task's details and specify its current status, informing other board members of task progress.

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/task%20update%20feature.gif' title='Task Updates' width='' alt='Video Walkthrough' />

### ✅ Task Creation/Deletion

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/task%20creation%20feature.gif' title='Task Creation' width='' alt='Video Walkthrough' />

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/task%20delete%20feature.gif' title='Task Deletion' width='' alt='Video Walkthrough' />

### ✅ Monthly/Daily Task Views

Users can view tasks in different calendar formats. The daily task view displays all tasks associated with that day.

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/monthly%20daily%20views%20feature.gif' title='Task Views' width='' alt='Video Walkthrough' />

### ✅ Family Board Creation

Owners have the ability to create and customize family boards, setting the foundation for family-wide task management.

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/create%20board%20feature.gif' title='Board Creation' width='' alt='Video Walkthrough' />

### ✅ Login/Sign Up 

Users can sign up for the first time or login to a personalized page if an account already exists.

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/login%20feature.gif' title='Existing User Login' width='' alt='Video Walkthrough' />

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/sign%20up%20feature.gif' title='New User Sign Up' width='' alt='Video Walkthrough' />

### ✅ Family Member Management

Board Owners can add family members with a Kulboard account to their board. Together, members can add, edit, and delete, and assign tasks to other members with shared boards.

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/board%20management%20feature.gif' title='Member Management' width='' alt='Video Walkthrough' />

## Installation Instructions

1. Clone repo: https://github.com/ManyaBondada/web103_finalproject.git
2. cd server --> npm install
3. cd client --> npm install
4. Create railway Postgres database
6. Create .env with the following variables from Railway: PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE
7. In the .env file, include the final variable, JWT_SECRET_KEY. Use the following command in terminal to generate the secret key: openssl rand -hex 32
8. Place the .env file inside the server directory
9. cd server --> npm run reset
10. cd server --> npm start
11. cd client --> npm run dev
