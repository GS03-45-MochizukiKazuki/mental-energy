// var Console = function(){
// 	this.text = '\n  ■ ■ ■ ■      ■ ■          \n■         ■      ■     ■ ■  \n■              ■     ■     ■\n■     ■ ■ ■            ■    \n■         ■              ■  \n■         ■          ■     ■\n  ■ ■ ■ ■              ■ ■  \n';
// };

// Console.prototype.start = function() {

// 	var color = '#0093E8';
// 	function colorGen(){ 
// 	    return '#'+Math.floor(Math.random()*16777215).toString(16); 
// 	}

// 	setInterval(function(){
// 		console.clear();
// 		console.log('%c'+this.text, 'color:' + colorGen() + '; font-weight: bold; font-size: large;');
// 	}, 1000);

// };


export default class Console {

	start(){
		var text = '\n  ■ ■ ■ ■      ■ ■          \n■         ■      ■     ■ ■  \n■              ■     ■     ■\n■     ■ ■ ■            ■    \n■         ■              ■  \n■         ■          ■     ■\n  ■ ■ ■ ■              ■ ■  \n';
		var color = '#0093E8';
		function colorGen(){ 
		    return '#'+Math.floor(Math.random()*16777215).toString(16); 
		}

		setInterval(function(){
			console.clear();
			console.log('%c'+text, 'color:' + colorGen() + '; font-weight: bold; font-size: large;');
		}, 1000);
	}
	
}


