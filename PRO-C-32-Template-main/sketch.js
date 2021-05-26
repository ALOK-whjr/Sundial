const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var backgroundImg;
var Time , Json;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
	getBg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
	if(backgroundImg){
		background(backgroundImg);
	}

    Engine.update(engine);

    // write code to display time in correct format here
	

}

async function getBg(){
	Time = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
	Json = await Time.json();
	var hr = Json.datetime.slice(11,13);
	if(hr >= 0 && hr<= 2){
		var background = "sunrise1.png";
	} else if(hr >= 2 && hr<= 4){
			  var background = "sunrise2.png";
	  } else if(hr >= 4 && hr<= 6){
				var background = "sunrise3.png";
		} else if(hr >= 6 && hr<= 8){
				  var background = "sunrise4.png";
		  } else if(hr >= 8 && hr<= 10){
				    var background = "sunrise5.png";
			} else if(hr >= 10 && hr<= 12){
					  var background = "sunrise6.png";
			  } else if(hr >= 12 && hr<= 14){
						var background = "sunset7.png";
				} else if(hr >= 14 && hr<= 16){
						  var background = "sunset8.png";
				  } else if(hr >= 16 && hr<= 18){
							var background = "sunset9.png";
					} else if(hr >= 18 && hr<= 20){
							  var background = "sunset10.png";
					  } else if(hr >= 20 && hr<= 22){
								var background = "sunset11.png";
						} else if(hr >= 22 && hr<= 24){
								  var background = "sunset12.png";
						  }
	backgroundImg = loadImage(background);
	
	//console.log(Json);
}

