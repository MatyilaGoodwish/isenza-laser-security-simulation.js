/**
 * Laser Simulation for Security 
 * @author Goodwish
 * @param {} targetElement 
 * @param {*} area 
 */
const isenza = (targetElement,area) =>{
let i = 0;
let j = 0;
let d = document;
const box = d.getElementById(targetElement);
const rect = Object.seal({PX: 'px',AREA: area});
    const PMR =() =>{
        if(i < rect.AREA){
            box.style.marginLeft =  i + rect.PX;
            requestAnimationFrame(PMR);
            i++;
            return i;
        }else if(i ===  area){
            requestAnimationFrame(PMD);
        }
    }
    const PMD =() =>{
        if(j < rect.AREA){
            box.style.marginTop =  j + rect.PX;
            requestAnimationFrame(PMR); j++;
            return j;
        }else{
            requestAnimationFrame(PML);
        }
    }
    const PML =() =>{
        if(i <= j && i > -0) {
            box.style.marginLeft =  i + rect.PX;
            requestAnimationFrame(PML); --i;
            return i;
        }else{
            requestAnimationFrame(PMU);
        }
    }
    const PMU =() =>{
        j > i ?  box.style.marginTop =  j + rect.PX : null;
        --j;
        requestAnimationFrame(PMU);
        return i;
    }
    requestAnimationFrame(PMR)
}
setInterval(()=>{
    let t = new Date().getSeconds();
    isenza('box', t * 99);
},5000)
 
 
    

   
   
    

