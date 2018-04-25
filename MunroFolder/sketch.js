var targetEl;
AFRAME.registerComponent('texty', {
  init: function () {
    targetEl = this.el;  

  }
});
AFRAME.registerComponent('modely', {
  init: function () {
    var els = this.el;  
	els.addEventListener('mouseenter', function () {
			var sceneEl = document.querySelector('a-scene');
			sceneEl.querySelector('#texty').setAttribute('value', 'fucasds');

			 console.log(sceneEl.querySelector('#texty'));  
	});
  }
});
function setup() {

	
}