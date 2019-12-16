# W3C Vehicle API test case README
last update: Dec 16, 2019

#### Install W3C web platform test from a specific fork

Install procedure is standard one as written in web-platform-tests/README.md.<br>
However, Vehicle API test cases are required to download from this folk<br>
since not yet marged to main branch as of now(2019/12/16).

1. Clone W3C web platform test from below forked repository and branch.
```
$ git clone -b dev-urata-vsss-test https://github.com/aShinjiroUrata/web-platform-tests
$ cd web-platfrom-tests
```

2. Set up web platform test by following standard procedure in README.md instruction.<br>
(edit /etc/hosts file etc.)
```
web-platform-tests/README.md
```

3. Run W3C web platform test
```
$ ./wpt serve
```

4. Verify web platfrom test is working
Open web platform test WebUI by visiting below URL via browser.<br>
(need to wait for a few minutes until test runner finish enumeration of test cases.)
```
http://web-platform-test:8000/tools/runner/index.html
```

#### Run the test cases with  ACCESS's VISS prototype as a trial target

To verify this Vehicle API test cases are successfully installed,<br>
 you can run the test cases with ACCESS's VISS prototype environment.<br>
(Install VISS prototype in the same host which W3C platform test is installed.)

1. Clone sources from the repository
```
$ git clone https://github.com/aShinjiroUrata/vehicle-information-service-spec
$ cd vehicle-information-service-spec
$ git branch master
```
2. Set up VISS prototype by following README.md instruction
```
vehicle-information-service-spec/README.md
```
3. Run VISS prototype and verify it works by following vehicle-information-service-spec/README.md instruction

4. Restart W3C web platform test and execute Vehicle API tests.<br>
VISS server configuration (host, protocol, port) are already defined in the configuration file.<br>
(If VISS prototype and web platform test are installed in the same host, default setting in configuration file should work.)
```
./web-platform-tests/vehicle/viss/vehicle-test-config.js
```

5. Select vehicle api test by entering 'vehicle/viss' in 'Run tests under path' text box on WPT's WebUI.<br>
   Then push 'Start' button and the test cases should run.

#### Run the test cases with different VISS server implementation

1. Update 'VISS_HOST','VISS_PORT' and 'VISS_PROTOCOL' in `vehicle-test-config.js` according to the target VISS server
```
./web-platform-tests/vehicle/viss/vehicle-test-config.js
```

2. Modify vehicle-test-config.js setting to work with the VISS server by following instruction in the file.

3. Restart W3C test suite and try the Vehicle API test with above process

