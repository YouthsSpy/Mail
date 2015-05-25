function sendMail() {
$.ajax({
type: 'POST',
url: 'https://mandrillapp.com/api/1.0/messages/send.json',
data: {
'key': 'YNFDoAWm5FEa5d7kANAZsQ',
'message': {
'from_email': byName('mail').value,
'to': [
{
'email': byName('mailTo').value,
'name': 'RECIPIENT NAME (OPTIONAL)',
'type': 'to'
}
],
'autotext': 'true',
'subject': byName("subject").value,
'html': byName("body").value
}
}
}).done(function(response) {
console.log(response);
setCookie("mail", byName("mail").value);
setCookie("mailTo", byName("mailTo").value);
setCookie("subject", byName("subject").value);
setCookie("body", byName("body").value);
setCookie("cycleNum", byName("cycleNum").value);
});
}
var blnSendMailCycle = null;
function sendMailCycle(bln){
if(bln){
blnSendMailCycle = setInterval(function(){ sendMail(); }, byName("cycleNum").value);
byName("btnCycleStart").style.display = "none";
byName("btnCycleStop").style.display = "block";
}else{
if(blnSendMailCycle != null) clearInterval(blnSendMailCycle);
byName("btnCycleStart").style.display = "block";
byName("btnCycleStop").style.display = "none";
}
}
