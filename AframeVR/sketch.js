var descriptions = ["This bookshelf is made of recyclable code. Environmentally friendly!","This fridge consumes less electricity!","This chair is made of a special post consumer wood composite!","This sofa's cover is made from recycled plastic bottles!"];
var num = 0;
var targetEl;
AFRAME.registerComponent('texty', {
  init: function () {
    targetEl = this.el;  

  }
});
for (var i = 0; i < descriptions.length; i++) {
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