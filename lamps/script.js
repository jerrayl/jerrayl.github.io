(function() {
	// DOM
	//var button = document.querySelector('button'); 
	var channel = 'lights';
	var p = PUBNUB.init({
		subscribe_key: 'sub-c-7a9eb724-e8f4-11e5-baae-0619f8945a4f',
		publish_key:   'pub-c-75f0a823-194a-4f1f-8653-e0781497cfe1'
	});
	// Sending data
	function btnClick(btn) {
	if(document.getElementById(btn).value=="OFF"){
		document.getElementById(btn).value="ON";
		document.getElementById(btn+"icon").className="glyphicon glyphicon-star";
		p.publish({
		channel : channel, 
		message : {led: [btn,1]}
		});
	}
	else if(document.getElementById(btn).value=="ON"){
	document.getElementById(btn).value="OFF";
	document.getElementById(btn+"icon").className="glyphicon glyphicon-star-empty";
	p.publish({
		channel : channel, 
		message : {led: [btn,0]}
		});
	}
	}
	

  document.getElementById("red").addEventListener('click', function(){btnClick("red");});
  document.getElementById("blue").addEventListener('click', function(){btnClick("blue");});
  document.getElementById("green").addEventListener('click', function(){btnClick("green");});
  document.getElementById("yellow").addEventListener('click', function(){btnClick("yellow");});
  })();
