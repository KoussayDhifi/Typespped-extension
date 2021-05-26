
//These are the paragraphs

pars=[
"The cab arrived late. The inside was in as bad of shape as the outside which was concerning, and it didn't appear that it had been cleaned in months.",
"This is important to remember. Love isn't like pie. You don't need to divide it among all your friends",
"It was a scrape that he hardly noticed. Sure, there was a bit of blood but it was minor compared to most of the other cuts and bruises he acquired on his adventures.",
"The beauty of the sunset was obscured by the industrial cranes.",
"He liked to play with words in the bathtub.",
"As the rental car rolled to a stop on the dark road, her fear increased by the moment.",
"They're playing the piano while flying in the plane.",
"He felt that dining on the bridge brought romance to his relationship with his cat.",
"The delicious aroma from the kitchen was ruined by cigarette smoke.",
"It was at that moment that he learned there are certain parts of the body that you should never Nair.",
"There should have been a time and a place, but this wasn't it." ,
" It was at that moment that he learned there are certain parts of the body that you should never Nair.",
"There should have been a time and a place, but this wasn't it.",
"Two seats were vacant.",
"He was an introvert that extroverts seemed to love.",
"Everyone was busy, so I went to the movie alone.",
"David proudly graduated from high school top of his class at age 97",
"Dan ate the clouds like cotton candy",
"He wore the surgical mask in public not to keep from catching a virus, but to keep people away from him",
"The doll spun around in circles in hopes of coming alive",
"The best part of marriage is animal crackers with peanut butter",
"The tart lemonade quenched her thirst, but not her longing",
"He wondered if she would appreciate his toenail collection",
"She could hear him in the shower singing with a joy she hoped he'd retain after she delivered the news",
"She couldn't understand why nobody else could see that the sky is full of cotton candy",
"At that moment she realized she had a sixth sense",
"Her scream silenced the rowdy teenagers",
"We should play with legos at camp",
"Her hair was windswept as she rode in the black convertible",
"The paintbrush was angry at the color the artist chose to use",
"So long and thanks for the fish",
"Malls are great places to shop; I can find everything I need under one roof",
"He kept telling himself that one day it would all somehow make sense",
"Shakespeare was a famous 17th-century diesel mechanic",
"I am happy to take your donation; any amount will be greatly appreciated",
"The small white buoys marked the location of hundreds of crab pots",
"The tattered work gloves speak of the many hours of hard labor he endured throughout his life",
"He was willing to find the depths of the rabbit hole in order to be with her",
"Wisdom is easily acquired when hiding under the bed with a saucepan on your head",
"She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages",
"He excelled at firing people nicely",
"Traveling became almost extinct during the pandemic",
"The spa attendant applied the deep cleaning mask to the gentleman’s back",
"Cats are good pets, for they are clean and are not noisy",
"Buried deep in the snow, he hoped his batteries were fresh in his avalanche beacon",
"Chocolate covered crickets were his favorite snack",
"Art doesn't have to be intentional",
"My biggest joy is roasting almonds while stalking prey",
"He enjoys practicing his ballet in the bathroom",
"If you don't like toenails, you probably shouldn't look at your feet",
"They say that dogs are man's best friend, but this cat was setting out to sabotage that theory",
"The beauty of the African sunset disguised the danger lurking nearby",
"As he looked out the window, he saw a clown walk by",
"Don't step on the broken glass",
"Nancy was proud that she ran a tight shipwreck",
]




var cont=document.getElementById("par");
var paras;
var seconds=0;
var t;
var w;
let tens=0;
let minutes=0;
let correct_entries=0;
var options=false;
var correct1='green';
var error1='red';
var but=document.getElementById("but");
var WPM;
window.onload = function(){
    document.getElementById("but").onclick=function(){
    w=0;
    t=0;
    let border=document.getElementById('border');
    let text=document.getElementById('text');
    let wa=document.getElementById('wa');
    let but=document.getElementById('but');
    let chromo=document.getElementById('chromo');
    let counting=document.getElementById("counting");
    border.style.display="block";
    text.style.display="block";
    wa.style.display="none";
    but.style.display="none";
    seconds1=0;
    setTimeout(()=>{
        let text=document.getElementById('text');
        
        par=pars[Math.floor(Math.random()*55)];
        
        cont.innerHTML=par;
        cont.value=par;
        paras=cont.innerHTML;
        let settings=document.getElementById('settings');
        settings.style.display='none';
        text.readOnly=false;
        }, 6000);






    var myfunc = setInterval(()=> {
        seconds1++;
        counting.innerHTML=seconds1;
        text.style.display='none';
        wa.style.display='none';
        border.style.display='none';
        if (seconds1>5){
            text.style.display='block';
            wa.style.display='block';
            border.style.display='block';
            seconds++;
            chromo.style.display='block';   
            chromo.innerHTML=seconds;
            counting.style.display='none'

            text.focus();


        }else if (seconds1==5){
            counting.innerHTML="GO";
            
        }

        try {
            if(t==cont.value.length){
                clear();
                seconds=0;
                seconds1=0;

            }


        }
        catch(e){

        }
}, 1000)

    var clear=()=>{ 
        clearInterval(myfunc);
    }


myfunc();





}


document.getElementById("text").oninput=function(){
    let text=document.getElementById('text');
    let chromo=document.getElementById('chromo');
    let len=cont.value.length;
    let third="";
    if((text.value.charAt(t)==cont.value.charAt(w))&&(w-1!=cont.value.length)){
        /*if(text.value.charAt(t)==" "){
            text.value=""
        }*/
        if(w<cont.value.length){

            third+=paras.substr(0,w+1)+'<span style=background-color:'+ correct1 +'>'+cont.value[w+1]+'</span>'+paras.substr(w+2,paras.length)
            }

        w++;
        t++;
        correct_entries++;
        document.getElementById('text').style.backgroundColor="white";
        cont.innerHTML=third;
        }else if((text.value.charAt(t)!=cont.value.charAt(w)&&(w != cont.value.length))){
        document.getElementById('text').style.backgroundColor=error1;
        if (w<paras.length){
        third+=paras.substr(0,w)+'<span style=background-color:'+error1+'>'+cont.value[w]+'</span>'+paras.substr(w+1,paras.length)
        }


        cont.innerHTML=third

        correct_entries--;
    }if(w==cont.value.length){
        cont.innerHTML=paras.substr(0,w);
        WPM=Math.floor((len/5)/(seconds/60));
        console.log(len)
        console.log(seconds)
        text.value='';
        text.readOnly=true;
        chromo.style.display='none';
        cont.innerHTML="Your accuracy is "+Math.floor((correct_entries/len)*100) +"%"+"<br>"+"You type "+ WPM  + "WPM";       
        but.style.display='block';
        correct_entries=0;  
    }


}


document.getElementById("settings").onclick=function(){


    let wa=document.getElementById('wa');
    let but=document.getElementById('but');
    let support=document.getElementById('support')
    let types=document.getElementsByClassName('label');
    correct1=document.getElementById('correct').value;
    error1=document.getElementById('error').value;
    let correct=document.getElementById('correct');
    let error=document.getElementById('error');

    if (options==false){
    but.style.display='none';
    wa.style.display='none';
    support.style.display='block';
    correct.style.display='inline-block';
    error.style.display='inline-block';
        for (let i=0;i<2;i++){
            types[i].style.display='block'  
        }

   
    options=true;
}else if(options){
    but.style.display='block';
    wa.style.display='block';
    support.style.display='none';
    correct.style.display='none';
    error.style.display='none';
        for (let i=0;i<2;i++){
            types[i].style.display='none'  
        }

   
    options=false;
}

}
}
