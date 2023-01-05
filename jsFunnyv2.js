////////////////////////////////////////////////////////////////  
// Javascript made by Rasmus - http://www.peters1.dk //  
////////////////////////////////////////////////////////////////  

////////////////////////////////////////////////////////////////  
// Javascript made by Rasmus - http://www.peters1.dk //  
////////////////////////////////////////////////////////////////  
  


var SNOW_Picture = "https://github.com/Astellou/jsFunny/raw/main/snow.gif" ; 

var SNOW_no = 15;  
  
var SNOW_browser_IE_NS  ; 
var SNOW_browser_MOZ ;  
var SNOW_browser_IE7 ;  
  
var SNOW_Time;  
var SNOW_Timer = 20;
var SNOW_dx, SNOW_xp, SNOW_yp;  
var SNOW_am, SNOW_stx, SNOW_sty;   
var i, SNOW_Browser_Width, SNOW_Browser_Height;  
  

function start() {  
        updateImage() 
	
	SNOW_browser_IE_NS = (document.body.clientHeight) ? 1 : 0;  
	SNOW_browser_MOZ = (self.innerWidth) ? 1 : 0;  
	SNOW_browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;  

	if (SNOW_browser_IE_NS)  
	{  
		SNOW_Browser_Width = document.body.clientWidth;  
		SNOW_Browser_Height = document.body.clientHeight;  
	}  
	else if (SNOW_browser_MOZ)  
	{  
		SNOW_Browser_Width = self.innerWidth - 20;  
		SNOW_Browser_Height = self.innerHeight;  
	}  
	else if (SNOW_browser_IE7)  
	{  
		SNOW_Browser_Width = document.documentElement.clientWidth;  
		SNOW_Browser_Height = document.documentElement.clientHeight;  
	}  

	SNOW_dx = new Array();  
	SNOW_xp = new Array();  
	SNOW_yp = new Array();  
	SNOW_am = new Array();  
	SNOW_stx = new Array();  
	SNOW_sty = new Array();  

	for (i = 0; i < SNOW_no; ++ i)   
	{   
		SNOW_dx[i] = 0;   
		SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-50);  
		SNOW_yp[i] = Math.random()*SNOW_Browser_Height;  
		SNOW_am[i] = Math.random()*20;   
		SNOW_stx[i] = 0.02 + Math.random()/10;  
		SNOW_sty[i] = 0.7 + Math.random();  
		if (i == 0) $('body').append("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><a href=\"http://www.peters1.dk\" target=\"_blank\"><\img src=\""+SNOW_Picture+"\" border=\"0\"></a><\/div>");  
		else $('body').append("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><\img src=\""+SNOW_Picture+"\" border=\"0\"><\/div>");  
	}  

}
  
function SNOW_Weather()   
{     

	for (i = 0; i < SNOW_no; ++ i)   
	{   
	    SNOW_yp[i] += SNOW_sty[i];  

	    if (SNOW_yp[i] > SNOW_Browser_Height-50)   
	    {  
		SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-SNOW_am[i]-30);  
		SNOW_yp[i] = 0;  
		SNOW_stx[i] = 0.02 + Math.random()/10;  
		SNOW_sty[i] = 0.7 + Math.random();  
	    }  

	    SNOW_dx[i] += SNOW_stx[i];  

	    document.getElementById("SNOW_flake"+i).style.top=SNOW_yp[i]+"px";  
	    document.getElementById("SNOW_flake"+i).style.left=SNOW_xp[i] + SNOW_am[i]*Math.sin(SNOW_dx[i])+"px";  
	}  

	SNOW_Time = setTimeout("SNOW_Weather()", SNOW_Timer);  

}  
  
function updateImage()   
{ 
	today = new Date();
	hours = today.getHours();
	if(hours >= 12 && hours < 14){
		SNOW_Picture = "https://github.com/Astellou/jsFunny/raw/main/burger.png" ; 
	}
	else{
		SNOW_Picture = "https://github.com/Astellou/jsFunny/raw/main/snow.gif" ; 
	}
	
	setTimeout("updateImage()", 60000);  
}

