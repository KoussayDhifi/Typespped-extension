var par1={name:"par1",
    content:"The Moon is a barren,rocky world without air and water. It has dark lava plain on its surface. The Moon is filled wit craters. It has no light of its own. It gets its light from the Sun. The Moo keeps changing its shape as it moves round the Earth."};

var par2={name:"par2",content:"The sun is a huge ball of gases. It has a diameter of 1,392,000 km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas. The surface of the Sun is known as the photosphere. The photosphere is surrounded by a thin layer of gas known as the chromospheres."};







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
    seconds=0;
    var myfunc = setInterval(()=> {
        seconds++;
        chromo.innerHTML=seconds;
        if (seconds>5){
            clear();
            chromo.innerHTML="";
            text.select();
        }if (seconds==5){
            chromo.innerHTML="GO";
        }

        }, 1000)

    var clear=()=>{ 
        clearInterval(myfunc);
    }


setTimeout(()=>{
    pars=[par1,par2];
    
    par=pars[Math.floor(Math.random()*2)];
    
    cont=document.getElementById("par");
    cont.innerHTML=par.content;
    cont.value=par.content;
    globalThis 
    
    }, 6000);





}

let t=0;
let w=0;
let tens=0;
let seconds=0;
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

    var counting= setInterval(()=>{
        seconds++;
        chromo.innerHTML=seconds+"s";   
        if(t==wa.length){
            clear();
        };

    }, 1000)

    var clear=()=>{ 
        clearInterval(counting);
    }

}



