/*
** Vehicle API Test configurations
*/

/*
//For Test Users
==
- Please modify the following variable settings so that they can work with
  your VISS server environment.
- The default values are configured to work with ACCESS's VISS prototype implementation.
  (https://github.com/aShinjiroUrata/vehicle-information-service-spec.git)
  and it doesn't mean to work well with any VISS server environment.
- Data availabilities are naturally different by each VISS server environment.
  That is reason why the following settings are expected to be configured
  by test users to work well with his/her VISS server environments.

- Preparation:
  - Please configure by instructions indicated by [TODO] as follows.
  - In most cases, you don't need to modify items indicated by [FIXED].
*/

// ==============================
// === VISS server setting
// ==============================
//[TODO] Please configure VISS_PROTOCOL, VISS_HOST, VISS_PORT to connect to your VISS server

// - select ws:// or wss:// according to your VISS server
var VISS_PROTOCOL = "ws://";  // or  "wss://";
var VISS_HOST = "127.0.0.1";
var VISS_PORT = "3000";
//[FIXED]
var VISS_SUBPROTO = "wvss1.0";

// - most tests uses this as URL to VISS server
//[FIXED]
var VISS_URL = VISS_PROTOCOL + VISS_HOST + ":" + VISS_PORT;

// ==============================
// === Time out setting
// ==============================
//[TODO] Basically, you may not need to change time out time.
// However, you can adjust these time out setting.

// - Wait time to let human see test result in test windows.
//   When a test is finished, wait for thit time before closing test window.
//   if you don't need to check each test result by eye, you can set as zero.
var TIME_FINISH_WAIT = 500; // msec

// - Time-out time for filter test
//   To evaluate filtered subscription behavior, collect subscriptionNotification for this time period.
var TIME_NOTIF_WAIT = 5000; // msec

// - Time-out time to forcefully terminate the tests.
//   If your VISS server tend to take time to respond, you can set this longer.
var TIME_OUT_TIME = TIME_NOTIF_WAIT + 2000; // msec

// ==============================
// === Token setting
// ==============================
// [TODO] Please replace with actual token strings those are valid (and invalid)
//  in your VISS server implementation.
var TOKEN_VALID   = "token_valid";
var TOKEN_INVALID = "token_invalid";

// ==============================
// === authorize setting
// ==============================
// [TODO] Please configure a set of 'data path', 'action' and 'value' which works
//  with your VISS server and it requires authorization by 'authorize' action to succeed.
//
//  A test will pass with the following scenario
//   - Execute this 'action' with 'data path' and result in failure.
//   - Execute 'authorize' action with TOKEN_VALID and successful. 
//     Then this 'action' with 'data_path' is authorized.
//   - Execute this 'action' with 'data paht' again and succeed this time.
var AUTH_ACCESS_PATH   = "Signal.Cabin.Door.Row1.Right.IsLocked";
var AUTH_ACCESS_ACTION = "set";
var AUTH_ACCESS_VALUE  = true;  // necessary when AUTH_ACCESS_ACTION == set

// ==============================
// === getMetadata setting
// ==============================
// == path for getMetadata method test ==
// [TODO] Please set data path strings those are valid(and invalid) with your VISS server environment.
var GETMETADATA_STANDARD_PATH= "Signal.Drivetrain.InternalCombustionEngine.RPM";
var GETMETADATA_WILDCARD_PATH= "Signal.Drivetrain.InternalCombustionEngine.*";
var GETMETADATA_INVALID_PATH = "Signal.Drivetrain.InternalCombustionEngine.WrongName";

// ==============================
// === get setting
// ==============================
// == path for get method test ==
// [TODO] Please configure data path strings those are valid(and invalid) with your VISS server environment.
var GET_STANDARD_PATH = "Signal.Drivetrain.Transmission.Speed";
var GET_WILDCARD_PATH = "Signal.Drivetrain.Transmission.*";
var GET_INVALID_PATH = "Signal.Drivetrain.Transmission.wrongname";

// ==============================
// === set setting
// ==============================
// == path for set method test ==
// [TODO] Please configure data path strings those are valid(and invalid) with your VISS server environment.
// - set of 'data path' and 'value' which is achievable without 'authorize' action.
var SET_NO_AUTH_PATH  = "Signal.Drivetrain.Transmission.Gear";
var SET_NO_AUTH_VALUE = 5; //Gear value: -1 to 15
// - set of 'data path' and 'value' which requires 'authorize' action to succeed.
var SET_NEED_AUTH_PATH  = "Signal.Drivetrain.Transmission.Gear";
var SET_NEED_AUTH_VALUE = 5; //Gear value: -1 to 15

var SET_INVALID_PATH  = "Signal.Drivetrain.Transmission.wrongName";

// ==============================
// === subscribe setting
// ==============================
// [TODO] Please configure data path strings those are valid(and invalid) with your VISS server environment.
var SUBSCRIBE_STANDARD_PATH = GET_STANDARD_PATH;
var SUBSCRIBE_INVALID_PATH  = GET_INVALID_PATH;

// - These three should be usable data path. Used for 'unsubscribeAll' test.
var SUBSCRIBE_PATH_1  = "Signal.Drivetrain.Transmission.Speed";
var SUBSCRIBE_PATH_2  = "Signal.Drivetrain.InternalCombustionEngine.RPM";
var SUBSCRIBE_PATH_3  = "Signal.Chassis.SteeringWheel.Angle";

// - Specify a data path which is a 'branch' not a 'leaf'. Subscribe for a 'branch' is expected to fail.
var SUBSCRIBE_BRANCH_PATH = "Signal.Drivetrain.Transmission";

// - Settings for filter test
var SUBSCRIBE_FILTER_TEST_PATH  = "Signal.Drivetrain.Transmission.Speed";
var INTERVAL_TIME   = 1000; //msec
var RANGE_BELOW     = 100;   //km/h (range for vehicle speed)
var RANGE_ABOVE     = 20;  //km/h (range for vehicle speed)
var MINCHANGE_VAL   = 5;    //km/h (minimum change for vehicle speed)

// - Margin for calculating interval time.
// (To verify filter's interval time setting, test case do subtraction of timestamps
//  of two consecutive 'SubscriptionNotification' and judge if the delta time matches to specified interval.
//  At this point, in most cases, the subtraction result doesn't exactly matches to interval time.
//  (e.g. When INTERVAL_TIME=1000[msec], timestamp delta could be: timestampB - timestampA => 1004[msec] )
//  To properly judge interval, INTERVAL_MARGIN is introduced to tolerate certain range of error.
//  (e.g. When INTERVAL_TIME=1000[msec] and INTERVAL_MARGIN=5[%], value range of 950msec to 1050msec is tolerated.)
var INTERVAL_MARGIN = 5;    //%

// END

