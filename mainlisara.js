console.log('gg')
function esmk(){
    let p=prompt('give your name : ');


while(p.length===0){
    p=prompt('give your name(required) : ');
    console.log(p);
}

document.querySelector('#esm').innerText=p;

}
/*************************************************************************************** */
function positions(){
   
    test=true
    let btnyes=document.querySelector('.btnyes')
    let btnno=document.getElementById('btnno')
    let klem=document.getElementById('klem')
    if(btnno.innerHTML==='NO'){
       
        btnno.innerText='sure!'  
        btnno.classList.add(`position1`)
        btnyes.classList.add('tagerba')
       
        
        
       
        
        
        
    }else if(btnno.innerHTML==='sure!' && test===true){
        btnno.innerHTML='sure!!!' 
        
        btnno.classList.remove(`position1`)
        btnno.classList.add(`position2`)
        btnyes.classList.remove(`tagerba`)
        btnyes.classList.add('tagerba1')



    }else if(btnno.innerHTML==='sure!!!' && test===true ){
        btnno.innerHTML='amann lee' 
        btnno.classList.remove(`position2`)
        btnno.classList.add(`position3`)

        btnyes.classList.remove(`tagerba1`)
        btnyes.classList.add('tagerba2')
   
    }else if(btnno.innerText==='amann lee' && test===true){
        btnno.innerHTML='bh zid 5ammem' 
        btnno.classList.remove(`position3`)
        btnno.classList.add(`position4`)

        btnyes.classList.remove(`tagerba2`)
        btnyes.classList.add('tagerba3')
     
    }else if(btnno.innerText==='bh zid 5ammem' && test===true){
        btnno.innerHTML='OOOHHH' 
        btnno.classList.remove(`position4`)
        btnno.classList.add(`position5`)

        btnyes.classList.remove(`tagerba4`)
        btnyes.classList.add('tagerba5')
        
        klem.classList.add('klem1')
        klem.innerText+='AY KAHAW TAW                           OGHZOR TA7TI :)'
       
    }
    
    
    
    else if(btnno.innerHTML==='OOOHHH' && test===true){
        btnno.innerHTML='NO' 
        btnno.classList.remove(`position5`)
        btnno.classList.add(`position0`)
       
       

    }
    
}
function fin(){
    test1=true
    gify=document.querySelector('.gif')
    lablebi=document.querySelector('.lablebi')
    dd=document.querySelector('.fin')
    if(test1===true){
        dd.classList.add('fin1')
        lablebi.classList.add('lablebi1')
        gify.classList.add('gif1')
    }
}
