function realtimeClock() {
  document.realTime.realTimeInput.value = getTimeStamp();
  setTimeout("realtimeClock()", 1000);
}

function getTimeStamp() {
  // 24시간제
  var d = new Date();

  var s = leadingZeros(d.getHours(), 2) + ":" + leadingZeros(d.getMinutes(), 2);

  return s;
}

function leadingZeros(n, digits) {
  var zero = "";
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++) zero += "0";
  }
  return zero + n;
}
