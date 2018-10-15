function setCarousel() {
  var i = document.getElementsByClassName('carousel_field'),
      o = document.getElementsByClassName('carousel_items_field'),
      e = document.getElementsByClassName('carousel_items');
      t = document.getElementsByClassName('carousel_items_name'),
      u = document.getElementsByClassName('carousel_items_pic'),
      console.log(i);
 i[0].style.position = 'relative';
 i[0].style.overflow = 'hidden';
 var ee = e[0].clientWidth,
     eee = e[0].clientHeight;
 o[0].style.height = eee + 'px';
 for(j = 0, len = e.length; j < len; j++) {
   e[j].style.position = 'absolute';
   e[j].style.top = '0';
   e[j].style.left = ee * j + 'px';
   e[j].style.transition = '0.4s';
   e[j].style.width = '100%';
 }

 function createBtn() {
   o[0].insertAdjacentHTML('afterend', '<p class="pre"></p>'); 
   o[0].insertAdjacentHTML('afterend', '<p class="next"></p>');
 }
 createBtn();

 function next() {
      var pre = document.getElementsByClassName('pre'),
          next = document.getElementsByClassName('next');
      function nextPhase() {
        for(i = 0, len = e.length; i < len; i++) {
          var tmp = e[i].style.left;
          var tmp = parseInt(tmp) - ee;
          e[i].style.left = tmp + 'px';
        }
      }
      function prePhase() {
        for(i = 0, len = e.length; i < len; i++) {
          var tmp = e[i].style.left;
          var tmp = parseInt(tmp) + ee;
          e[i].style.left = tmp + 'px';
        }
      }
      pre[0].addEventListener('click', nextPhase, false);
      next[0].addEventListener('click', prePhase, false);
 }
 next();


}
window.addEventListener('load', setCarousel, false);



