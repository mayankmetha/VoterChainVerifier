$(() => {
  const CryptoJS = require('crypto-js');
  const path = require('path');
  const fs = require('fs');
  var uid = "";
  var ele = "";
  var mac = fs.readFileSync(path.join(__dirname,'/blockchain.key')).toString();
  $('#username').bind('input propertychange', function() {
    onUsernameInput(this.value);
  });
  $('#election').bind('input propertychange', function() {
    onElectionInput(this.value)
  });
  $('#username').focus();
  function onUsernameInput(text) {
    const tmpuid = CryptoJS.SHA512(text).toString();
    const uidhash = CryptoJS.HmacSHA512(tmpuid,mac).toString();
    uid = uidhash;
    $('#uid').text(uidhash);
    const blkhash = CryptoJS.SHA256(uid+ele).toString();
    $('#blk').text(blkhash);
  }
  function onElectionInput(text) {
    ele = text;
    const blkhash = CryptoJS.SHA256(uid+ele).toString();
    $('#blk').text(blkhash);
  }
});
