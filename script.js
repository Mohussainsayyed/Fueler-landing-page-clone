/*navigation bar fixed*/

const nav = document.querySelector(".header");
const navm= document.querySelector(".navbar")
let lastScrollY = window.scrollY;

window.addEventListener('scroll',() => {
	
if(lastScrollY < window.scrollY){
	nav.style.top = "-100%";
	nav.style.background = "none";
	nav.style.backdropFilter = "none";
}else{
	nav.style.position = "fixed";
	nav.style.top = "0";
	nav.style.background = "rgba(14,210,247,.2)";
	nav.style.backdropFilter = "blur(10px)";
}

if(window.scrollY == 0){
	nav.style.background = "none";
	nav.style.backdropFilter = "none";
}


lastScrollY = window.scrollY;
});


/*top banner auto slide*/

var counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 4){
counter = 1;
}
}, 5000);

/**/
/*image slide auto for prsn work*/
 gsap.to(".page5 .prsn-work",{
 x:"-900vw",
 scrollTrigger:{
 trigger:".page5",
/* markers:true,*/
 start:"center 35%",
 end:"bottom top",
 pin:".page5 ",
 scrub:5,
 }
 });

/*image slide auto for prsn work end*/
/*card section bg img animation start*/



gsap.from(".rapper .bgbx",{
x:"-100vw",
scrollTrigger:{
trigger:".bgbx",
	markers:true,
start:"center 70%",
end:"center center",
scrub:1,
duration:1,
}
});

gsap.from(".rapper .bgbx2",{
x:"100vw",
scrollTrigger:{
trigger:".bgbx2",
	markers:true,
start:"center 70%",
end:"center center",
scrub:1,
duration:1,
}
});

gsap.from(".community-bx .comm-bx",{
y:"50px",
stagger:2,
opacity:0,
scrollTrigger:{
trigger:".comm-bx",
	markers:true,
start:"top 70%",
end:"top 50%",
scrub:2,
}
});

/*for toggle */

let x = document.querySelectorAll(".why-div");
let iconOpen = document.querySelectorAll(".fi-xnluxl-plus");
let iconClos = document.querySelectorAll(".fi-xwluxl-minus-wide");

x[0].style.background = "rgba(223,255,254,255)";

function change(a,b){
	
	x.forEach((el,i)=>{
	
		if(i == b){
			x[b].style.background = a;
			x[b].classList.toggle("click");
		}else{
			el.classList.remove("click");
			x[i].style.background = 'none' ;
		};
		
	});
	
};

/*end toggle*/
let btn = document.querySelectorAll(".custom-p .head button");
let img = document.querySelector(".custom-p img");
let heading = document.querySelector(".custom-p h2");
let pera = document.querySelector(".custom-p p");
let list = document.querySelector(".custom-p ul");
btn[0].style.background="rgba(14,210,247,.8)";


function content(a){
	for(let i = 0; i < btn.length; i++){
		btn[i].style.background="white";
	}
	btn[a-1].style.background="rgba(14,210,247,.8)";
	if(a == 2){
		img.setAttribute("src","images/select-add_work.png");
		heading.textContent = "Select the Work";
		pera.textContent = "Pick all the works, around a particular need and get an instantly dynamic generated landing page for selected works.";
		list.innerHTML = "<li>Instant Dynamic Portfolio</li><li>Skills-based work portfolio</li><li>Hassle-free work portfolio</li>";
	}else if(a == 3){
		img.setAttribute("src","images/publish-share.png");
		heading.textContent = "Let’s see the magic";
		pera.textContent = "Time to see the magic happening, just hit the button and get a brand new need specific work portfolio";
		list.innerHTML = "<li>One-click work portfolio</li><li>Attract multiple opportunities</li><li>Need-based work portfolio</li>";
	}else{
		img.setAttribute("src","images/create-bucket.png");
		heading.textContent = "Create a Custom Portfolio";
		pera.textContent = "Custom Portfolio helps you create multiple landing pages for your work while applying for internships, freelancing, or jobs.";
		list.innerHTML = "<li>Custom Portfolio for multiple work type</li><li>Learn Multiple skills and create</li><li>Monetize your work portfolio</li>";
	};
};

/*steps btn end*/

let text = document.querySelector(".btm h2 span");
let texts= ["Content writer","Community Manager","Product Manager","Marketer","No Code Maker","Finance Analyst","Video Editor","Desiner","Copywriter","developer"];
let i = 0;

setInterval(()=>{
	text.textContent = texts[i];
	i++
	if(i == texts.length){
		i=0;
	}
	
},2000);

/**/
