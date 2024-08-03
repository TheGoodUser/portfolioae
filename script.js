let seconds = 0;
let timer = document.getElementById('timer'); 

let intervalId = setInterval(() => {
    let hindi_no = ""; 

    seconds += 20; 
    if (seconds >= 100) { 
        load_hmScrn();
        autoScroll();
        clearInterval(intervalId);
    }

    let temp = seconds.toString();
    for (let i = 0; i < temp.length; i++) {
        hindi_no += convertToHindi(parseInt(temp[i])); 
    }
    timer.innerHTML = `पूर्णम् ${hindi_no}%`;

    }, 500);
    

    
function convertToHindi(number) {
    const hindiNumbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return hindiNumbers[number];
}


function load_hmScrn() {
    document.body.style.overflow = 'visible';
    document.documentElement.style.overflow = 'visible';

    // if(document.body.)
    let sy = 0;
    const background_script = document.querySelectorAll("#background-texts p");
    
    
    window.addEventListener("scroll", ()=> {
        console.log(0.5-scrollY/1560)
        background_script.forEach((e)=>{
            e.style.color = `rgba(197, 114, 7, ${0.2-scrollY/1560})`;
        });    
    });
}

function autoScroll() {
    setTimeout(()=>{
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    document.body.style.backgroundColor = "black";
    // document.body.style.backgroundImage = "universe.jpg";
    }, 2000);
    setTimeout(()=> {
        document.getElementById("container").style.display = "none";
    }, 3000);
}





















