/*
** Vehicle API Test helper/utility functions
*/

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

function isMetadataSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (
      _inJson.action === "getMetadata" &&
      _inJson.requestId &&
      _inJson.metadata &&                //'TTL' exists
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
function isMetadataErrorResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (
      _inJson.action === "getMetadata" &&
      _inJson.requestId &&
      _inJson.metadata === undefined &&  //'vss' not exists
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

function isSubscriptionNotificationResponse( _subId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "subscription" &&
      _inJson.subscriptionId &&     //'subscriptionId' just exists
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
function isSubscriptionNotificationErrorResponse( _subId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "subscription" &&
      _inJson.subscriptionId &&       //'subscriptionId' just exists
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

function isUnsubscribeAllSuccessResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "unsubscribeAll" &&
      _inJson.requestId &&
      _inJson.subscriptionId === undefined &&
      _inJson.timestamp &&     //'timestamp' exists
      _inJson.error === undefined)
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
function isUnsubscribeAllErrorResponse( _reqId, _inJson) {
  // TODO: better to check with Json schema
  if (_inJson.action === "unsubscribeAll" &&
      _inJson.requestId &&
      _inJson.subscriptionId === undefined &&
      _inJson.timestamp &&      //'timestamp' exists
      _inJson.error)          //'error' exists
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
  msg = document.getElementById('result').innerHTML;
  // show message with green background
  msg = msg + "<br>"
        + '<div style="font-size:30px; background-color:#00CC00;">'
        + "SUCCESS : " + _msg
        + '</div>';
  document.getElementById('result').innerHTML = msg;
}
function addLogFailure(_msg) {
  msg = document.getElementById('result').innerHTML;
  // show message with red background
  msg = msg + "<br>"
        + '<div style="font-size:30px; background-color:red;">'
        + "FAILURE : " + _msg
        + '</div>';
  document.getElementById('result').innerHTML = msg;
}

function getUniqueReqId() { 
  // create semi-uniquID (for implementation easyness) as timestamp(milli sec)+random string
  // uniqueness is not 100% guaranteed.
  var strength = 1000;
  var uniq = new Date().getTime().toString(16) + Math.floor(strength*Math.random()).toString(16);
  return "reqid-"+uniq;
}

function createRequestJson(_action, _path, _val, _filter ) {
  var reqJson = null;   
  var reqId = getUniqueReqId();
  if (_action === 'get') {
    reqJson = '{"action":"get","path":"'+_path+'","requestId":"'+reqId+'"}';   
  } else if (_action === 'set') {
    reqJson = '{"action":"set","path":"'+_path+'","value":"'+_val+'","requestId":"'+reqId+'"}';  
  } else if (_action === 'subscribe') {
    var str_filter = JSON.stringify(_filter);
    reqJson = '{"action":"subscribe","path":"'+_path+'","filters":"'+ str_filter +'","requestId":"'+reqId+'"}';   
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

    //close websocket connection
    if (_wsconn1 == undefined && _wsconn2 == undefined && typeof(vehicle) != "undefined")
      vehicle.close();
    t.done();
  }, TIME_FINISH_WAIT); // wait time to let human read the result.
}
function helper_terminate_success( _msg, _wsconn1, _wsconn2 ) {
  addLogSuccess( _msg );
  t.step_timeout(function() {
    assert_true(true, _msg);
    if (_wsconn1)
      _wsconn1.close();
    if (_wsconn2)
      _wsconn2.close();

    //close websocket connection
    if (_wsconn1 == undefined && _wsconn2 == undefined && typeof(vehicle) != "undefined")
      vehicle.close();
    t.done();
  }, TIME_FINISH_WAIT); // wait time to let human read the result.
}
function helper_terminate_failure( _msg, _wsconn1, _wsconn2 ) {
  addLogFailure( _msg );
  t.step_timeout(function() {
    assert_throws(null, function(){}, _msg);
    if (_wsconn1)
      _wsconn1.close();
    if (_wsconn2)
      _wsconn2.close();

    //close websocket connection
    if (_wsconn1 == undefined && _wsconn2 == undefined && typeof(vehicle) != "undefined")
      vehicle.close();
    t.done();
  }, TIME_FINISH_WAIT); // wait time to let human read the result.
}

