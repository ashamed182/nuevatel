(function() {
  var proto  = 'https:';
  var node   = document.createElement('script');
  node.type  = 'text/javascript';
  node.async = true;
  node.src   =  'https://webchat-nuevatel.i6.inconcertcc.com/v3/click_to_chat?token=2AD03E30195D6240943B84B2EBFD3B25';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(node, s);
  console.log('snippet from external js soporte')
})();
