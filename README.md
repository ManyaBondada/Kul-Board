# KulBoard

CodePath WEB103 Final Project

Designed and developed by: Manya Bondada and Arpit Singh

🔗 Link to deployed app: https://kulboard-production-7813.up.railway.app/

## About

### Description and Purpose

The Family Task Management App is a comprehensive web platform designed to facilitate seamless communication and coordination within families. It provides a user-friendly interface for family members to collaboratively plan, assign, and track tasks. Users can create and manage tasks, assign them to themselves or others, and receive notifications for upcoming responsibilities. The app features a shared task calendar, enabling users to view daily, weekly, or monthly schedules. It also includes a messaging system for family members to discuss tasks and updates. The app's primary goal is to simplify task management and improve the organization of household chores and responsibilities, ultimately enhancing the overall quality of family life.

### Inspiration

Our team's inspiration for this project arises from a shared understanding of the complex dynamics within modern families. We've collectively recognized the challenges faced by working family members, who often struggle to balance their professional commitments with household chores and responsibilities. Witnessing instances where miscommunication led to significant disruptions in daily routines reinforced our determination to develop a solution that promotes transparent and efficient communication. By collaborating on the creation of a comprehensive web app, our aim is to provide a platform that enables seamless task management and facilitates effective coordination among family members. Our collective vision is to foster a more organized and harmonious family environment, where every member can thrive and contribute to a smoother daily life experience.

## Tech Stack

Frontend: React.js, HTML/CSS, Tailwind CSS, Material UI, Full Calendar

Backend: Express.js, Node.js, PostgreSQL, JSON web token, Railway, REST APIs

## Features

### ✅ Login/Sign Up 

Users can sign up for the first time or log in to a personalized page if an account already exists.

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/sign%20up%20feature.gif' title='New User Sign Up' width='' alt='Video Walkthrough' />

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/login%20feature.gif' title='Existing User Login' width='' alt='Video Walkthrough' />


### ✅ Family Board Creation

Owners have the ability to create and customize family boards, setting the foundation for family-wide task management.

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/create%20board%20feature.gif' title='Board Creation' width='' alt='Video Walkthrough' />


### ✅ Family Member Management

Board Owners can add family members with a Kulboard account to their board. Together, members can add, edit, and delete, and assign tasks to other members with shared boards.

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/board%20management%20feature.gif' title='Member Management' width='' alt='Video Walkthrough' />


### ✅ Monthly/Daily Task Views

Users can view tasks in different calendar formats. The daily task view displays all tasks associated with that day.

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/monthly%20daily%20views%20feature.gif' title='Task Views' width='' alt='Video Walkthrough' />


### ✅ Task Creation/Deletion

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/task%20creation%20feature.gif' title='Task Creation' width='' alt='Video Walkthrough' />

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/task%20delete%20feature.gif' title='Task Deletion' width='' alt='Video Walkthrough' />


### ✅ Task Updates

Users can update a task's details and specify its current status, informing other board members of task progress.

<img src='https://github.com/ManyaBondada/web103_finalproject/blob/main/feature%20GIFS/task%20update%20feature.gif' title='Task Updates' width='' alt='Video Walkthrough' />


## Installation Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ManyaBondada/web103_finalproject.git
2. **Install server dependencies**
   ```bash
   cd server
   npm install
3. **Install client dependencies**
   ```bash
   cd client
   npm install
4. **Create Postgres database in Railway**
5. **Create .env file with the following variables from Railway**

   Make sure the .env file is in the server directory
   ```bash
    PGUSER=your_pg_user
    PGPASSWORD=your_pg_password
    PGHOST=your_pg_host
    PGPORT=your_pg_port
    PGDATABASE=your_pg_database
7. **Add JWT Secret Key to .env**

   Generate the secret key using the following command in terminal
    ```bash
     openssl rand -hex 32
8. **Reset the database and run server**
    ```bash
    cd server
    npm run reset
    npm start
9. **Run the client**
   ```bash
   cd client
   npm run dev
