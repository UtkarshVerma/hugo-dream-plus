var SemanticUIColors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown"]

$(document).ready(function () {
	$('.dimmer').css('background-color','rgba(0,0,0,.6)')
	if(!enabledPost) {
		$('.ui.cards .image').dimmer({ on: 'hover'})
 		$('.ui.cards .image').dimmer('show') 
	}
	else {
		if(enabledDimmer){		
			$('.ui.cards .image').dimmer({ on: 'hover'})
  		$('.ui.cards .image').dimmer('show') 
		}
		else {
			$('.ui.cards .image')
			.dimmer({ opacity: .6, closable: false })
	 		$('.ui.cards .image').dimmer('show')
		}
	}
	$('.ui.accordion').accordion()
	
	setSemanticUIColor()
})

function connect(arr) {
	var str = ''
	for (var i = 0; i < arr.length; i++) {
		if (i !== arr.length - 1)
			str += arr[i] + ', '
		else
			str += arr[i]
	}
	return str
}

function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	var random
	while (true) {
		random = Math.floor(Math.random() * (max - min)) + min
		if (random !== dreamPrevBgIndex) {
			dreamPrevBgIndex = random
     	break
     }
   }
   return random
}

function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  random = Math.floor(Math.random() * (max - min)) + min
  return random
}

function setSemanticUIColor() {
  var tagsParent = [$('.dream-tags'), $('.sidebar-dream-tags')]
  for (var i = 0; i < tagsParent.length; i++)
  	tagsParent[i].children().map(function() {
		$(this).addClass(SemanticUIColors[randomInt(0, SemanticUIColors.length)])
	})
}

function setBackground(target, gradient) {
	target.css({ background: gradient[0]})
	target.css({ background: 'linear-gradient(to right, ' + connect(gradient) + ')'})
}
