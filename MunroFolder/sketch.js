var targetEl;
AFRAME.registerComponent('texty', {
  init: function () {
    targetEl = this.el;  

  }
});
AFRAME.registerComponent('modely', {
  init: function () {
    var els = this.el;  
    var sceneEl = document.querySelector('a-scene');
	els.addEventListener('mouseenter', function () {
		sceneEl.querySelector('#texty').setAttribute('value', 'This bookshelf is made of recyclable code. Environmentally friendly!');
		sceneEl.querySelector('#texty').setAttribute('fook', 'fooky');
		console.log(sceneEl.querySelector('#texty').getAttribute("fook"));  

		console.log(sceneEl.querySelector('#texty').getAttribute("value"));  
	});
  }
});
function setup() {

	
}