
//These are the paragraphs

pars=[
"Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, when the sun does set.",
"On July 16, 1969, the Apollo 11 spacecraft launched from the Kennedy Space Center in Florida. Its mission was to go where no human being had gone before—the moon! The crew consisted of Neil Armstrong, Michael Collins, and Buzz Aldrin. The spacecraft landed on the moon in the Sea of Tranquility, a basaltic flood plain, on July 20, 1969. The moonwalk took place the following day. On July 21, 1969, at precisely 10:56 EDT, Commander Neil Armstrong emerged from the Lunar Module and took his famous first step onto the moon's surface. He declared, 'That's one small step for man, one giant leap for mankind.” It was a monumental moment in human history!",
"It was July 21, 1969, and Neil Armstrong awoke with a start. It was the day he would become the first human being to ever walk on the moon. The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space. On board with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew landed on the moon in the Sea of Tranquility a day before the actual walk. Upon Neil's first step onto the moon's surface, he declared, 'That's one small step for man, one giant leap for mankind. It sure was!",
"Here is the perfect system for cleaning your room. First, move all of the items that do not have a proper place to the center of the room. Get rid of at least five things that you have not used within the last year. Take out all of the trash, and place all of the dirty dishes in the kitchen sink. Now find a location for each of the items you had placed in the center of the room. For any remaining items, see if you can squeeze them in under your bed or stuff them into the back of your closet. See, that was easy!",
"Oceans and lakes have much in common, but they are also quite different. Both are bodies of water, but oceans are very large bodies of salt water, while lakes are much smaller bodies of fresh water. Lakes are usually surrounded by land, while oceans are what surround continents. Both have plants and animals living in them.",
"The Blue Whales just played their first baseball game of the new season; I believe there is much to be excited about. Although they lost, it was against an excellent team that had won the championship last year. The Blue Whales fell behind early but showed excellent teamwork and came back to tie the game. The team had 15 hits and scored 8 runs. That's excellent! Unfortunately, they had 5 fielding errors, which kept the other team in the lead the entire game.",
"The school fair is right around the corner, and tickets have just gone on sale. We are selling a limited number of tickets at a discount, so move fast and get yours while they are still available. This is going to be an event you will not want to miss! First off, the school fair is a great value when compared with other forms of entertainment. Also, your ticket purchase will help our school, and when you help the school, it helps the entire community. But that's not all! Every ticket you purchase enters you in a drawing to win fabulous prizes. And don't forget, you will have mountains of fun because there are acres and acres of great rides, fun games, and entertaining attractions! Spend time with your family and friends at our school fair. Buy your tickets now!",
"The school fair is right around the corner, and tickets have just gone on sale. Even though you may be busy, you will still want to reserve just one day out of an entire year to relax and have fun with us. Even if you don't have much money, you don't have to worry. A school fair is a community event, and therefore prices are kept low. Perhaps, you are still not convinced. Maybe you feel you are too old for fairs, or you just don't like them. Well, that's what my grandfather thought, but he came to last year's school fair and had this to say about it: 'I had the best time of my life!' While it's true that you may be able to think of a reason not to come, I'm also sure that you can think of several reasons why you must come.  We look forward to seeing you at the school fair!",
"Last week we installed a kitty door so that our cat could come and go as she pleases. Unfortunately, we ran into a problem. Our cat was afraid to use the kitty door. We tried pushing her through, and that caused her to be even more afraid. The kitty door was dark, and she couldn't see what was on the other side. The first step we took in solving this problem was taping the kitty door open. After a couple of days, she was confidently coming and going through the open door.",
"People often install a kitty door, only to discover that they have a problem. The problem is their cat will not use the kitty door. There are several common reasons why cats won't use kitty doors. First, they may not understand how a kitty door works. They may not understand that it is a little doorway just for them. Second, many kitty doors are dark, and cats cannot see to the other side. As such, they can't be sure of what is on the other side of the door, so they won't take the risk. One last reason cats won't use kitty doors is because some cats don't like the feeling of pushing through the door and having the door drag across their back. But don't worry—there is a solution for this kitty-door problem.",
"Last year was the first time I had ever been the new kid at school. For the first four days, I was completely alone. I don't think I even spoke to a single person. Finally, at lunch on the fifth day, Karen Watson walked past her usual table and sat down right next to me. Even though I was new, I had already figured out who Karen Watson was. She was popular. Pretty soon, all of Karen's friends were sitting there right next to me. I never became great friends with Karen, but after lunch that day, it seemed like all sorts of people were happy to be my friend."
]




var cont=document.getElementById("par");
var paras;
var seconds=0;
let t=0;
let w=0;
let tens=0;
let minutes=0;
let correct_entries=0;

window.onload = function(){
    document.getElementById("but").onclick=function(){


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
            seconds++
            chromo.innerHTML=seconds;

            text.focus();
        }if (seconds1==5){
            counting.innerHTML="GO";
            counting.style.display='none';
        }

        }, 1000)

    var clear=()=>{ 
        clearInterval(myfunc);
    }


setTimeout(()=>{
    
    
    par=pars[Math.floor(Math.random()*10)];
    
    cont.innerHTML=par;
    cont.value=par;
    paras=cont.innerHTML;
    
    }, 6000);





}



document.getElementById("text").oninput=function(){
    let text=document.getElementById('text');
    let chromo=document.getElementById('chromo');
    let len=cont.value.length;
    let third="";
    if(text.value.charAt(t)==cont.value.charAt(w)){

        third+=paras.substr(0,w+1)+'<span style=background-color:green>'+cont.value[w+1]+'</span>'+paras.substr(w+2,paras.length)
        console.log(third)

        w++;
        t++;
        correct_entries++;
        document.getElementById('text').style.backgroundColor="white";
        cont.innerHTML=third
    }else if(t==cont.value.length){
        text.style.display='none';
        chromo.style.display='none';
        cont.style.display='none';
        alert("Your accuracy is "+Math.floor((correct_entries/len)*100) +"%")
        let WPM=Math.floor((text.value.length/5)/(seconds/60));
        alert("You type "+ WPM  + "WPM")

    }else if(text.value.charAt(t)!=cont.value.charAt(w)){
        document.getElementById('text').style.backgroundColor="red";
        if (w<paras.length){
        third+=paras.substr(0,w)+'<span style=background-color:red>'+cont.value[w]+'</span>'+paras.substr(w+1,paras.length)
        }
        cont.innerHTML=third

        correct_entries--;
    }

}



}
