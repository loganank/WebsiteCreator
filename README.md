# WebsiteCreator
Node.js app to dynamically create websites.

Created by Kyle Hanson, Jack Cunningham, Logan Ankarberg, Patrick Santana

The first step to setting up the environment is download Node.js and visual studio code.
After this, clone our repository to your local storage on your computer. Open the direc-
tory in vscode, and navigate to the folder of the project: cd .\cs354app\ in the vscode
terminal. After this, you will be in the project folder and now is when you install all
of the dependencies needed. The first step is to install express.js: npm install express.
You also need a dependency to encrypt the passwords: npm install bcrypt. After that,
install mysql, and create a database with the password ”mysqldatabase”. After this, open
up generate tables.sql in db scripts in our project, copy into mysql workbench (or any db
manager), and run the script. Now we can start the server in vscode: npm start local-
host:7777. Now go to any browswer and type localhost:7777 into the search bar to use our
website.
