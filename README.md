## devTinder FrontEnd

- Created a vite + React Project
- Removed unnecessary Code
- Created Hello world App
- installed DaisyUI
- added NavBar Component using DaisyUi
- created routing using browser Router
- created an outlet of body Component
- created a footer
- installed cors in backend and added necessary configuration - origin , credentials :true
- whenever you are trying to fetch data from it , we should pass withCredentials: true
- installed redux and configured the app with redux-tool-kit
- installed @redux-toolkit react-redux
- created userSlice
- implemented a login page
- if user try to access other routes then we will redirect you too login page
- implemedted edit feature
- added toast for profile update indication
- implemented component to show all connection
- implemeted feed page

- Body
  - NavBar
  - Route =/ => feed
  - Route =/login
  - route =/connections= connections
  - Router =/profile =Profile
- created a login page

## deployment

## ui

1 login and create an instance in aws console
1.a EC2 we need to create an instance
2 follow this steps to connect instance frmo local
Open an SSH client.

          a Locate your private key file. The key used to launch this instance is devtinderweb.pem

          b Run this command, if necessary, to ensure your key is not publicly viewable.
          c chmod 400 "devtinderweb.pem"

          d Connect to your instance using its Public DNS:

          e. ssh -i ""

3 after executing this commands you an able to connect it from local to ubuntu aws instance
4 once loggin in install npm into our machine
5 installed node using - nvm install -version
6 then checked node veriosn by node -v
7 clone the code form git hub both UI and backend
8 cd ui - > change the working directory to UI
9 then install node modules and build the ui
10 - sudo api update - for updating machine
11 sudo apt install nginx
12 sudo systemctl start nginx
13 sudo systemctl enable nginx
14 copy code from dist(all files to ) /var/www/html/
15 sudo scp -r dist/\* /var/www/html
16 enable port 80 of your instance

- backend deployment
  - go to backend devependentes folder
  - install required deps
  - allow access to our IP in MongoDB
  - npm run start for running backend server
  - allow ip for connecting mongo
  - npm install pm2 -g
  - pm2 start npm -- start (for running instance)
  - pm2 logs
  - pm2 flush npm
  - pm2 delete
  - pm2 stop <name>
  - pm2 delete
  - pm2 start npm --name "devtinderbackend" -- start
  - sudo nano /etc/nginx/sites-available/
  - nginx config
  - server name : server_name 13.51.198.160
  - location /api/ {
    proxy_pass http://localhost:3000/; # Forward to Node.js app
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    }
  - restart nginx
  - restart nginx - sudo systemctl restart nginx
  - modify the base url in ui

try_files $uri $uri/ =404;
root /var/www/html;
index index.html;
try_files $uri /index.html;
