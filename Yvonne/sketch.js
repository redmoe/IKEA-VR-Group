var targetEl;
// AFRAME.registerComponent('texty', {
//   init: function () {
//     targetEl = this.el;  

//   }
// });
AFRAME.registerComponent('modely', {
  init: function () {
    var els = this.el;
    var sceneEl = document.querySelector('a-scene');  
	els.addEventListener('mouseenter', function () {			
		sceneEl.querySelector('#texty').setAttribute('color', 'blue');
		//console.log(sceneEl.querySelector('#texty'));  
	});
	els.addEventListener('mouseleave', function () {
		sceneEl.querySelector('#texty').setAttribute('color', 'white');
		console.log('leeeaaaave');  
	});
  }
});
function setup() {

	
}