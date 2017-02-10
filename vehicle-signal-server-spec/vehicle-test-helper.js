//var VSSS_HOST = "xx.xx.xx.xx";
//var VSSS_HOST = "127.0.0.1";
var VISS_HOST = "10.5.162.71";
var VISS_PORT = "3000";
var VISS_URL = "ws://"+VISS_HOST+":"+VISS_PORT

var TIME_FINISH_WAIT = 1000; // wait time to let human see result message

var TIME_OUT_TIME = 3000;    // time to forcefully terminate the test

// === get helper ===
function isGetSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  // getSuccessResponse has action?
  //if (_inJson.action === "get" &&
  if (
      _inJson.requestId === _reqId &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.value)            //'value' exists
  {
    return true;
  } else {
    return false;
  }
}
function isGetErrorResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "get" &&
      _inJson.requestId === _reqId &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.error &&          //'error' exists
      _inJson.error.number &&   //'error.number' exists
      _inJson.error.reason)     //'error.reason' exists
  {
    return true;
  } else {
    return false;
  }
}

// === subscribe helper ===
function isSubscribeSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  // getSuccessResponse has action?
  if (_inJson.action === "subscribe" &&
      _inJson.requestId === _reqId &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.subscriptionId)   //'subId' exists
  {
    return true;
  } else {
    return false;
  }
}
function isSubscribeErrorResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "subscribe" &&
      _inJson.requestId === _reqId &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.error &&          //'error' exists
      _inJson.error.number &&   //'error.number' exists
      _inJson.error.reason)     //'error.reason' exists
  {
    return true;
  } else {
    return false;
  }
}

// === unsubscribe helper ===
function isUnsubscribeSuccessResponse( _reqId, _subId, _inJson) {
  // TODO: better to check with Json schema
  // getSuccessResponse has action?
  if (_inJson.action === "unsubscribe" &&
      _inJson.requestId === _reqId &&
      _inJson.subscriptionId === _subId &&
      _inJson.timestamp)      //'timestamp' exists
  {
    return true;
  } else {
    return false;
  }
}
function isUnsubscribeErrorResponse( _reqId, _subId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "unsubscribe" &&
      _inJson.requestId === _reqId &&
      _inJson.subscriptionId === _subId &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.error &&          //'error' exists
      _inJson.error.number &&   //'error.number' exists
      _inJson.error.reason)     //'error.reason' exists
  {
    return true;
  } else {
    return false;
  }
}

// === set helper ===
function isSetSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "set" &&
      _inJson.requestId === _reqId &&
      _inJson.timestamp)        //'timestamp' exists
  {
    return true;
  } else {
    return false;
  }
}
function isSetErrorResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "set" &&
      _inJson.requestId === _reqId &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.error &&          //'error' exists
      _inJson.error.number &&   //'error.number' exists
      _inJson.error.reason)     //'error.reason' exists
  {
    return true;
  } else {
    return false;
  }
}

// === utility ===
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

