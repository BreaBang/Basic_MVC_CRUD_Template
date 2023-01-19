<img src="preview.mov">

# Basic_MVC_CRUD_Template
This is a template that was created to review the basics of building a Full-Stack CRUD app. It's based on a tutorial by <a href="https://github.com/Mayanwolfe/Basic_MVC_CRUD_Template" target="_blank">Mayanwolfe</a>. The two part videos walking you through how to create this code from scratch can be found on her youtube or twtich page. 

## What is a full-stack web application?
A full-stack web application has a front-end, what the user sees and a back-end, the part that processes the CRUD requests. 

## What does CRUD mean?
CRUD stands for create, read, update and delete. This app includes the ability to create something, read it, update it and delete it. 

## Dependencies
Make sure to install the following:
<li>dotenv</li>
<li>ejs</li>
<li>express</li>
<li>mongoose</li>
<li>nodemon</li>

## Instructions
1. Open the terminal and run "npm install -y"
2. In the config" folder, create a file called ".env"
3. In .env, type 
    DB_CONNECTION = (your database connection string goes here)
    Replace <password> in the string with your password
    If you want a custom database name (recommended), add the database name between mongodb.net/ and the ? in the string. Example: mongodb.net/BasicFullStackMVC?
4. Save!
5. In the terminal, type "npm start"
6. Open the browser to http://localhost:yournumber/ and you should see the homepage!