# Developer's Blog
### Description
Developer's Blog is a comprehensive blogging platform designed specifically for developers to share their knowledge, experiences, and insights. The application features two distinct panels: one for users and another for administrators.

### User Panel:
  * Read Posts: Users can browse and read a wide range of blog posts.
  * Comment: Users can leave comments on posts to engage in discussions.
  * Like Comments: Users have the ability to like comments to show appreciation for valuable insights.
  * Edit and Delete Comments: Users can edit or delete their own comments if needed.
  * Update Profile: Users can update their profile pictures to personalize their accounts.
  * Account Management: Users can delete their own accounts if they choose to leave the platform.
### Admin Panel:
  * Create Posts: Admins can create new blog posts to share valuable content with the community.
  * Edit and Delete Posts: Admins can edit or delete any post to ensure the quality and relevance of content.
  * Comment Management: Admins can manage comments by editing or deleting any comment to maintain a positive and constructive discussion environment.

To access these features, both users and admins need to log in to the platform, ensuring a secure and personalized experience for each type of user.

### Installation Instructions

  * Step 1: Clone the Repository: `git clone https://github.com/LepharamRamchiary/Developer-Hub-Blog`
    
  * Step 2:  Navigate to the Project Directory:
    
    ```
        bash
        cd developers-blog
    ```
    
  * Step 3: Install Node Modules for Client and Server:
    
    1. Navigate to the client directory and install the required packages:
       
    ```
      bash
      cd client
      npm install
    ```
    
    2. Navigate to the server directory and install the required packages:
       
    ```
      bash
      cd ../server
      npm install
      ```
    
  * Step 4: Set Up Environment Variables:
    
    1. Create a `.env` file in the `client` directory and add the necessary environment variables (e.g., firebase).
       
       ```
        VITE_FIREBASE_API_KEY = "Your_firebase_key"
       ```
       
    2. Create a `.env` file in the `server` directory and add the necessary environment variables (e.g., database connection string, authentication secret, etc.).
       
       ```         
        MONGODB_URI = "Your_mongoDB_URL"
        JWT_SECRET = "Your_Reandom_Secret"
       ```
       
  * Step 5: Start the Development Server:

    1. In the `server` directory, start the server:
       
      ```
        bash
        npm run dev
      ```

    2. In the `client` directory, start the client:
      ```
        bash
        npm run dev
      ```

### Usage Instructions

  * Navigate to http://localhost:3000 to access the blog.
  * Sign Up for an account if you are a new user.
  * Log In to your account to access the features.
  * Create, Retrieve, Update, and Delete Posts (Admin).
  * Read Posts,Retrieve, Comment, Like, Edit, and Delete Comments (User).
  * Update Profile and Manage Account (User and admin).

### Features

  * User authentication and authorization
  * Create,Retrieve, Update, and delete blog posts (Admin)
  * Comment on posts,Retrieve, Read, like, edit, and delete comments (User)
  * User and Admin profile management
  * Secure login for both users and admins

### Technologies Used

  * Frontend: React with Vite, Flowbite for UI, and Tailwind css.
  * Backend: Node.js with Express.
  * Database: MongoDB

### Contributing Guidelines

##### I welcome contributions to Developer's Blog! To contribute:

  * Fork the Repository on GitHub.
  * Create a New Branch for your feature or bug fix.
  * Commit Your Changes.
  * Push to the Branch.
  * Open a Pull Request on GitHub with a detailed description of your changes.

#### Postman Docs
  https://documenter.getpostman.com/view/26300273/2sA3XQh2fA
