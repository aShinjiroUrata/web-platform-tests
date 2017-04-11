# W3C Vehicle API test case README
last update: March 22, 2017

#### Install W3C web platform test from a specific fork

Install procedure is standard one as written in web-platform-tests/README.md.

1. Clone W3C web platform test from below forked repository and branch.
```
$ git clone -b dev-urata-vsss-test https://github.com/aShinjiroUrata/web-platform-tests
$ git submodule update --init --recursive
```

2. Set up web platform test by following README.md instruction.<br>(edit /etc/hosts file as writtein in README.md as well)
```
web-platform-tests/README.md
```

3. Start W3C web platform test
```
$ ./serve
```

4. Verify web platfrom test is working<br>
Open web platform test WebUI by visiting below URL via browser.<br>
(need to wait for a few minutes until test runner finish enumeration of test cases.)
```
http://web-platform.test:8000/tools/runner/index.html
```

#### Install ACCESS' VISS prototype as a trial environment

1. Clone sources from the repository
```
$ git clone https://github.com/aShinjiroUrata/vehicle-information-service-spec
$ git branch master
```
2. Set up by VISS prototype by following README.md instruction
```
vehicle-information-service-spec/README.md
```
3. Verify VISS prototype is working by following README.md instruction

#### Try Vehicle API test

1. Configure VISS server information in Vehicle API test's configuration file.
```
$ vi web-platform-tests/vehicle/viss/vehicle-test-helper.js
```
Update 'VISS_HOST','VISS_PORT' according to VISS prototype's setting.<br>
(set the same value with `vehicle-signal-server-spec/svr_config.js` )<br>
Edit 'VISS_PROTOCOL' to appropriate value.<br>
In case of ACCESS' VISS prototype, use 'ws://' so far. (To be changed later)<br>

2. Restart W3C test suites' serve command

3. Open web platform test WebUI again.

4. Select vehicle api test by entering 'vehicle/viss' in 'Run tests under path' text box on WebUI.<br>
   Then push 'Start' button and the test cases should run.

#### Test different VISS server implementation

1. Update 'VISS_HOST','VISS_PORT' and 'VISS_PROTOCOL' in `vehicle-test-helper.js` according to the target VISS server

2. Restart W3C test suite and try the Vehicle API test with above process

