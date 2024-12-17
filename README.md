Test technique MM

this script is an end to end test repository used to create, update, and run the MM e2e/functional tests

## Install

Install node and npm.

Install additional requirements:

    sudo apt install pkg-config libcairo2-dev libjpeg-dev libgif-dev  libpng-dev

Install nightwatch.js and dependencies:

    # install npm dependencies defined in package.json
    npm install

Create log dir:

    mkdir node_modules/selenium-server/logs

If you have an error with canvas do:

    sudo apt install libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++

To be able to run test in local :

    #Geckodriver
    wget https://github.com/mozilla/geckodriver/releases/download/v0.33.0/geckodriver-v0.33.0-linux64.tar.gz
    sudo sh -c 'tar -x geckodriver -zf geckodriver-v0.33.0-linux64.tar.gz -O > /usr/bin/geckodriver'
    sudo chmod +x /usr/bin/geckodriver
    rm geckodriver-v0.33.0-linux64.tar.gz

If that doesn't work, go on http://127.0.0.1:4444/wd/hub/ and select a browser to have a more precise error


## Run the tests on the differents environments

You should have somme credentials in you env variable

- export MMLOGIN=email
- export MMPASSWORD=password


node_modules/nightwatch/bin/nightwatch tests/connect.js



### Run the tests on the dev environment (default)

This configuration will run tests on the following dev instances:

* https://entreprise.app.test-1.movinmotion.net/employees


### Run the tests with a local selenium


This configuration will run tests on the following local instances:

* http://localhost:5000

check nightwatch.conf.js to change it


Note:

Nightwatch Test Runner will start the selenium server before launching the tests.
But if you want to launch it manually you can set `start_process` to `false` in
`localQualifSettings.json` and launch selenium manually with:

    node_modules/selenium-server/bin/selenium


