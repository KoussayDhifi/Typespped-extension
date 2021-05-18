var pars=["A paragraph contains a group of sentences intertwined with each other to discuss, or debate, or explain a central idea. It conventionally begins with an indented line. A beginner writer or a student usually starts writing a paragraph having seven sentences, while some professors of composition advise beginners to start with nine sentences, and some others ask them to start with eleven sentences.","Canadaisoneofthebestcountriesintheworldtolivein.First,Canadahasanexcellenthealthcaresystem.AllCanadianshaveaccesstomedicalservicesatareasonableprice.Second,Canadahasahighstandardofeducation.Studentsaretaughtbywell‐trainedteachersandareencouragedtocontinuestudyingatuniversity.Finally,Canada'scitiesarecleanandefficientlymanaged.Canadiancitieshavemanyparksandlotsofspaceforpeopletolive.Asaresult,Canadaisadesirableplacetolive.","AlexandertheGreatwasasuccessfulrulerbecausehisactionscreatedlonglastingeffectsonculturesthatcontinuetothepresentday.OneexampleofhislegacywasthecreationofaHellenisticsociety.HellenismwasthecombinationofGreek,Persian,andEgyptiancultures.Duringthisremarkabletimeperiod,peoplewereencouragedtopursueaformaleducationandproducemanydifferentkindsofart.","Examples#3‐4Magellan’scircumnavigation[oftheglobe]foreveralteredtheWesternworld’sideasaboutcosmology–thestudyoftheuniverseandourplaceinit–aswellasgeography.Itdemonstrated,amongotherthings,thattheearthwasround,thattheAmericaswerenotpartofIndiabutwereactuallyaseparatecontinent,andthatoceanscoveredmostoftheearth’ssurface.Thevoyageconclusivelydemonstratedthattheearthis,afterall,oneworld.Butitalsodemonstratedthatitwasaworldofunceasingconflict,bothnaturalandhuman.","DuringtheCivilWareramanyfactionssoughttochangeAmerica.Remarkablespeakersspreadtheirideasthroughoratory,thrillingtheiraudiencesthroughpowerfulspeechesthatappealedtobothemotionandlogic.FrederickDouglass,ablackAmerican,foughtforblackcivilrightsthroughcompellingspeecheslike“WhattotheslaveistheFourthofJuly?”whichdepictedtheterrorsofslaveryingraphicdetail.","Although all seasons have their good points, there are several aspects of summer that  make  it  my  favorite. First  of  all,  summer  allows  for  more  outdoor  activities. The warm  weather lets mespend  more  time  outsidedoing  the  things  I  love,  such  as  playing my favorite outdoor sports, meetingwith friends, or just walking around different parts of the  city. Additionally,  more  fun  events  are  held  during  the  summer,  such  as  outdoor concerts  and  various  festivals. "]





var seconds=0;


var speed=()=>{


    let border=document.getElementById('border');
    let text=document.getElementById('text');
    let wa=document.getElementById('wa');
    let but=document.getElementById('but');
    let chromo=document.getElementById('chromo');
    border.style.display="block";
    text.style.display="block";
    wa.style.display="none";
    but.style.display="none";
    seconds1=0;
    var myfunc = setInterval(()=> {
        seconds1++;
        chromo.innerHTML=seconds1;
        if (seconds1>5){
            seconds++
            chromo.innerHTML=seconds;
            text.focus();
        }if (seconds1==5){
            chromo.innerHTML="GO";
        }

        }, 1000)

    var clear=()=>{ 
        clearInterval(myfunc);
    }


setTimeout(()=>{
    
    
    par=pars[Math.floor(Math.random()*4)];
    
    cont=document.getElementById("par");
    cont.innerHTML=par;
    cont.value=par;
    globalThis 
    
    }, 6000);





}

let t=0;
let w=0;
let tens=0;
let minutes=0;
let correct_entries=0;
let game=()=>{


    let text=document.getElementById('text').value;
    let wa=document.getElementById('par').value;
    let chromo=document.getElementById('chromo');
    let len=wa.length
    if(text.charAt(t)==wa.charAt(w)){
        w++;
        t++;
        correct_entries++;
        document.getElementById('text').style.backgroundColor="white";
    }else if(t==wa.length){
        alert("Done");
        alert("Your accuracy is "+Math.floor((correct_entries/len)*100) +"%")
        let WPM=Math.floor((text.length/5)/(seconds/60));
        alert("You type "+ WPM  + "WPM")

    }else if(text.charAt(t)!=wa.charAt(w)){
        document.getElementById('text').style.backgroundColor="red";
        correct_entries--;
    }



}
