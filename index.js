let a = document.getElementById("para")
let b = document.getElementById("image1")
let c = document.getElementById("image2")
let d = document.getElementById("image3")
let e = false
let f = document.getElementById("para1")
let u = document.getElementById("para2")
let r = false 
let t = false

function myFunction(){
    if(e===false){
        a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
        b.src="chevron-up.png"
        e=true
    }
    else{
        a.textContent=""
        b.src="chevron-down .png"
        e=false
    }
}

function myFunction1(){
    if(r===false){
        f.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
        c.src="chevron-up.png"
        r=true
    }
    else{
        f.textContent=""
        c.src="chevron-down .png"
        r=false
    }
}

function myFunction2(){
    if(t===false){
        u.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
        d.src="chevron-up.png"
        t=true
    }
    else{
        u.textContent=""
        d.src="chevron-down .png"
        t=false
    }
}