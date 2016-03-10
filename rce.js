onload = function() {
  var element = document.createElement('webview');
  att = document.createAttribute('src');
  att.value='http://www.google.com';
  element.setAttributeNode(att);
  document.getElementById('rce-container').appendChild(element);
}