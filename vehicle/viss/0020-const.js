// Definitions commonly used from parent and child source

// === test phase value ===
var PH_0_START              = 0;
var PH_1_CONN_ESTABLISHED   = 10;

var PH_2_ACTION_SENT        = 20;
var PH_3_ACTION_RECEIVED_SUCCESS  = 31;
var PH_3_ACTION_RECEIVED_ERROR    = 32;

var PH_4_VALID_AUTH_SENT        = 41;
var PH_4_INVALID_AUTH_SENT      = 42;
var PH_5_AUTH_RECEIVED_SUCCESS  = 51;
var PH_5_AUTH_RECEIVED_ERROR    = 52;

var PH_6_ACTION_SENT    = 60;
var PH_7_ACTION_RECEIVED_SUCCESS  = 71;
var PH_7_ACTION_RECEIVED_ERROR    = 72;

var PH_9_FINISH = 9;
var PH_10_WAIT  = 10;

// === command from parent ===
var CMD_0_WAIT = 0;
var CMD_1_CONNECT_WEBSOCKET = 1;
var CMD_2_DO_ACTION = 2;
var CMD_3_DO_AUTHORIZE = 3;
var CMD_4_DO_ACTION = 4;

var CMD_9_STOP = 9;

