let shortbtn=document.getElementById("shortenbtn");
let copybtn=document.getElementById("copybtn");
let url=document.getElementById("orgurl");
let shorturl=document.getElementById("shorturl");

shortbtn.addEventListener('click',()=>{
    let orgurl=url.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${orgurl}`)
    .then((resp)=> resp.json())
    .then((value)=> {
        shorturl.value=value.result.short_link;
    })
    .catch((error)=>{
        shorturl.value="Something went wrong";
    });
});

copybtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(shorturl.value);
    copybtn.innerHTML="Copied";

    setTimeout(()=>{
        copybtn.innerHTML="Copy";
    },1000);
});