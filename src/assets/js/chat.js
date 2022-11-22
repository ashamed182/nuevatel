(function() {
  var proto  = document.location.protocol || 'http:';
  var node   = document.createElement('script');
  node.type  = 'text/javascript';
  node.async = true;
  node.src   =  'https://webchat-nuevatel.i6.inconcertcc.com/v3/click_to_chat?token=2F9EB9E574A15EED9D1BCA755D898376';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(node, s);
  console.log('snippet from external js')
})();
