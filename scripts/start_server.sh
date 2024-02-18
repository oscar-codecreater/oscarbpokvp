#!/bin/bash
echo starting server

# here we just use npm to run the build
cd /var/www/one/
echo building application...
sudo npm run build
# sudo cp -r /var/www/one/build/* /var/www/html/

# start the application with pm2
echo starting application...
sudo pm2 start npm -- run production
