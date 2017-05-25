/*
Preparation

configure VISS server's information
VISS_HOST : host name or IP address

TODO:...


Configure TOKEN_VALID and TOKEN_INVALID those are
 recognized as valid and invalid security tokens.

*/


// === General setting ===
var VISS_HOST = "127.0.0.1";

var VISS_PORT = "3000";
// select ws:// or wss:// according to your VISS server
var VISS_PROTOCOL = "ws://";
//var VISS_PROTOCOL = "wss://";
var VISS_SUBPROTO = "wvss1.0";

// most tests uses this as URL to VISS server
var VISS_URL = VISS_PROTOCOL + VISS_HOST + ":" + VISS_PORT

var TIME_FINISH_WAIT = 500; // wait time to let human see test result in test window
var TIME_OUT_TIME = 5000;    // time to forcefully terminate the test

// ==== for test 0080, 0090 (Authorize test) ====
// Please replace with token strings those are valid/invalid for your VISS server implementation.
var TOKEN_VALID   = "token_valid";
var TOKEN_INVALID = "token_invalid";

// == path for getVSS method test ==
var GETVSS_STANDARD_PATH= "Signal.Drivetrain.InternalCombustionEngine.RPM";
var GETVSS_WILDCARD_PATH= "Signal.Drivetrain.InternalCombustionEngine.*";
var GETVSS_INVALID_PATH = "Signal.Drivetrain.InternalCombustionEngine.WrongName";

// == path for get method test ==
var GET_STANDARD_PATH = "Signal.Drivetrain.Transmission.Speed";
var GET_WILDCARD_PATH = "Signal.Drivetrain.Transmission.*";
var GET_INVALID_PATH = "Signal.Drivetrain.Transmission.abcdef";

// == path for set method test ==
// 'path' and 'value'  which doesn't require authorization.
var SET_NO_AUTH_PATH  = "Signal.Drivetrain.Transmission.Gear";
var SET_INVALID_PATH  = "Signal.Drivetrain.Transmission.abcdef";
var SET_NO_AUTH_VALUE = 5; //Gear value: -1 to 15
// 'path' and 'value'  which requires authorization.
var SET_NEED_AUTH_PATH  = "Signal.Drivetrain.Transmission.Gear";
var SET_NEED_AUTH_VALUE = 5; //Gear value: -1 to 15

// == path for subscribe method test ==
var SUBSCRIBE_STANDARD_PATH = GET_STANDARD_PATH;
var SUBSCRIBE_INVALID_PATH  = GET_INVALID_PATH;

var SUBSCRIBE_PATH_1  = "Signal.Drivetrain.Transmission.Speed";
var SUBSCRIBE_PATH_2  = "Signal.Drivetrain.InternalCombustionEngine.RPM";
var SUBSCRIBE_PATH_3  = "Signal.Chassis.SteeringWheel.Angle";

var SUBSCRIBE_BRANCH_PATH = "Signal.Drivetrain.Transmission"; // path is branch. not a leaf.

// === for 0220 ===
var SUBSCRIBE_PATH = "Signal.Drivetrain.Transmission.Speed";


// == filter values for subscribe ==
var INTERVAL_TIME   = 1000; //msec
var RANGE_ABOVE     = 100;  //km/h (range for vehicle speed)
var RANGE_BELOW     = 20;   //km/h (range for vehicle speed)
var MINCHANGE_VAL   = 5;    //km/h (minimum change for vehicle speed)

// margin for calculating interval time.
// (When calcurate diff of time, it will not be precise '1000msec' but it will be '1004msec' etc.
//  So, error margin is needed to judge interval time behavior.
//  e.g. if 1% margin and interval=1000msec => 950msec to 1050msec would be acceptable range.)
var INTERVAL_MARGIN = 5;    //%


// === for test 0010, 0020, 0030, 0040 ===
// Need to configure a set of 'data path' and 'action' which requires
//  authorization by Authorize() method to successfully do this action for this data path.
// [PLEASE CONFIGURE THIS SECTION]
var AUTH_ACCESS_PATH   = "Signal.Cabin.Door.Row1.Right.IsLocked";
var AUTH_ACCESS_ACTION = "set"; // should be 'get' or 'set'
var AUTH_ACCESS_VALUE  = true;  // necessary when AUTH_ACCESS_ACTION == set

