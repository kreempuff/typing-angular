(function () {
  $jQ = angular.element;
  $jQ(document).ready(function () {

$jQ(".link").mouseover(function () {
  $jQ(this).children('i').addClass('scale');
});

$jQ(".link").mouseleave(function () { 
  $jQ(this).children('i').removeClass('scale');
})


  });

})();
