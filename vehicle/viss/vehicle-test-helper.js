// === General setting ===
var VISS_HOST = "127.0.0.1";

var VISS_PORT = "3000";
var VISS_PROTOCOL = "ws://"; // select ws:// or wss:// according to your VISS server
var VISS_SUBPROTO = "wvss1.0";

// most tests uses this as URL to VISS server
var VISS_URL = VISS_PROTOCOL + VISS_HOST + ":" + VISS_PORT

var TIME_FINISH_WAIT = 500; // wait time to let human see test result in test window
var TIME_OUT_TIME = 5000;    // time to forcefully terminate the test

// ==== for test 0080, 0090 (Authorize test) ====
// Please replace with token strings those are valid/invalid for your VISS server implementation.
var TOKEN_VALID   = "token_valid";
var TOKEN_INVALID = "token_invalid";

// === for test 0010, 0020, 0030, 0040 ===
// Please configure a set of data path and action such that requires 'authorize' to do the action for the data path.
var AUTH_ACCESS_PATH   = "Signal.Cabin.Door.Row1.Right.IsLocked";
var AUTH_ACCESS_ACTION = "set"; // should be 'get' or 'set'
var AUTH_ACCESS_VALUE  = true;  // necessary when AUTH_ACCESS_ACTION == set

// === get helper ===
function isAuthorizeSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (
      _inJson.action === "authorize" &&
      _inJson.requestId  &&
      _inJson.TTL &&                //'TTL' exists
      _inJson.error === undefined)  //'error' not exists
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function isAuthorizeErrorResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (
      _inJson.action === "authorize" &&
      _inJson.requestId &&
      _inJson.TTL === undefined &&  //'TTL' not exists
      _inJson.error)                //'error' exists
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isVssSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (
      _inJson.action === "getVSS" &&
      _inJson.requestId &&
      _inJson.vss &&                //'TTL' exists
      _inJson.error === undefined)  //'error' not exists
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function isVssErrorResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (
      _inJson.action === "authorize" &&
      _inJson.requestId &&
      _inJson.vss === undefined &&  //'vss' not exists
      _inJson.error)                //'error' exists
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isGetSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  // getSuccessResponse has action?
  if (_inJson.action === "get" &&
      _inJson.requestId &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.value &&          //'value' exists
      _inJson.error === undefined )           //'error' exists
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function isGetErrorResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "get" &&
      _inJson.requestId &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.value === undefined &&          //'value' exists
      _inJson.error )           //'error' exists
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// === set helper ===
function isSetSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "set" &&
      _inJson.requestId &&
      _inJson.timestamp &&        //'timestamp' exists
      _inJson.error == undefined) //'error' exists
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function isSetErrorResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "set" &&
      _inJson.requestId &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.error)            //'error' exists
      //_inJson.error.number &&   //'error.number' exists
      //_inJson.error.reason)     //'error.reason' exists
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// === subscribe helper ===
function isSubscribeSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  // getSuccessResponse has action?
  if (_inJson.action === "subscribe" &&
      _inJson.requestId &&
      _inJson.subscriptionId &&   //'subId' exists
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.error === undefined )
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isSubscribeErrorResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "subscribe" &&
      _inJson.requestId &&
      _inJson.subscriptionId === undefined &&   //'subId' exists
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.error )
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isSubscriptionNotification( _subId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.subscriptionId &&     //'subscriptionId' just exists
      _inJson.timestamp &&          //'timestamp' exists
      _inJson.value &&              //'value' exists
      _inJson.error === undefined)  //'error' not exists
  {
    if (_subId === "" || _subId === _inJson.subscriptionId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function isSubscriptionNotificationError( _subId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.subscriptionId &&       //'subscriptionId' just exists
      _inJson.timestamp &&            //'timestamp' exists
      _inJson.value === undefined &&  //'value' not exist
      _inJson.error)                  //'error' exists
  {
    // if _subId is empty string, don't check subId matching
    if (_subId === "" || _subId === _inJson.subscriptionId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// === unsubscribe helper ===
function isUnsubscribeSuccessResponse( _reqId, _subId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "unsubscribe" &&
      _inJson.requestId  &&
      _inJson.subscriptionId &&
      _inJson.error === undefined &&
      _inJson.timestamp)      //'timestamp' exists
  {
    if (_subId === "" || _subId === _inJson.subscriptionId) {
      if (_reqId === "" || _reqId === _inJson.requestId) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function isUnsubscribeErrorResponse( _reqId, _subId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "unsubscribe" &&
      _inJson.requestId &&
      _inJson.subscriptionId &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.error)          //'error' exists
  {
    if (_subId === "" || _subId === _inJson.subscriptionId){
      if (_reqId === "" || _reqId === _inJson.requestId) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//TODO: Don't we need unsubscribeAll Error Response check function?

function isUnsubscribeAllSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "unsubscribeAll" &&
      _inJson.requestId &&
      _inJson.subscriptionId === undefined &&
      _inJson.error === undefined &&
      _inJson.timestamp)      //'timestamp' exists
  {
    if (_reqId === "" || _reqId === _inJson.requestId) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// === utility ===
function getTimestamp() {
  var date = new Date();
  var unixTimeMsec = date.getTime();
  var unixTimeSec = Math.floor(date.getTime()/1000);

  return unixTimeMsec;
}

function addLogMessage(_msg) {
  msg = document.getElementById('log').innerHTML;
  msg = msg + "<br>" + _msg;
  document.getElementById('log').innerHTML = msg;
}
function addLogSuccess(_msg) {
  msg = document.getElementById('log').innerHTML;
  // show message with green background
  msg = msg + "<br>"
        + '<div style="font-size:30px; background-color:#00CC00;">'
        + "SUCCESS : " + _msg
        + '</div>';
  document.getElementById('log').innerHTML = msg;
}
function addLogFailure(_msg) {
  msg = document.getElementById('log').innerHTML;
  // show message with red background
  msg = msg + "<br>"
        + '<div style="font-size:30px; background-color:red;">'
        + "FAILURE : " + _msg
        + '</div>';
  document.getElementById('log').innerHTML = msg;
}

function getUniqueReqId() { 
  // create semi-uniquID (for implementation easyness) as timestamp(milli sec)+random string
  // uniqueness is not 100% guaranteed.
  var strength = 1000;
  var uniq = new Date().getTime().toString(16) + Math.floor(strength*Math.random()).toString(16);
  return "reqid-"+uniq;
}

function createRequestJson(_action, _path, _val) {
  var reqJson = null;   
  var reqId = getUniqueReqId();
  if (_action == 'get') {
    reqJson = '{"action":"get","path":"'+_path+'","requestId":"'+reqId+'"}';   
  } else if (_action == 'set') {
    reqJson = '{"action":"set","path":"'+_path+'","value":"'+_val+'","requestId":"'+reqId+'"}';  
  }    
  return reqJson;  
}

// === test suite helper ===
function helper_terminate_normal( _msg, _wsconn1, _wsconn2 ) {
  addLogMessage( _msg );
  t.step_timeout(function() {
    if (_wsconn1)
      _wsconn1.close();
    if (_wsconn2)
      _wsconn2.close();
    if (_wsconn1 == undefined && _wsconn2 == undefined)
      vehicle.close();
    t.done();
  }, TIME_FINISH_WAIT);
}
function helper_terminate_success( _msg, _wsconn1, _wsconn2 ) {
  addLogSuccess( _msg );
  t.step_timeout(function() {
    assert_true(true, _msg);
    if (_wsconn1)
      _wsconn1.close();
    if (_wsconn2)
      _wsconn2.close();
    if (_wsconn1 == undefined && _wsconn2 == undefined)
      vehicle.close();
    t.done();
  }, TIME_FINISH_WAIT);
}
function helper_terminate_failure( _msg, _wsconn1, _wsconn2 ) {
  addLogFailure( _msg );
  t.step_timeout(function() {
    assert_throws(null, function(){}, _msg);
    if (_wsconn1)
      _wsconn1.close();
    if (_wsconn2)
      _wsconn2.close();
    if (_wsconn1 == undefined && _wsconn2 == undefined)
      vehicle.close();
    t.done();
  }, TIME_FINISH_WAIT);
}

