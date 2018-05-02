var descriptions = ["This bookshelf is made of recyclable code. Environmentally friendly!","Hey look at me!","Third Wave"];
var intObjs = 3	;
var num = 0;
var targetEl;
AFRAME.registerComponent('texty', {
  init: function () {
    targetEl = this.el;  

  }
});
// 'This bookshelf is made of recyclable code. Environmentally friendly!'
for (var i = 0; i < intObjs; i++) {
	AFRAME.registerComponent('modely'+i, {
	  init: function () {
	    var els = this.el;  
	    var ind = num;
	    var sceneEl = document.querySelector('a-scene');
		els.addEventListener('mouseenter', function () {
			console.log(num);
			sceneEl.querySelector('#texty').setAttribute('value', descriptions[ind]);
		});
		num++;

	  }
	});
			// 	console.log(num);

			// num++;

}
function setup() {

	
}