function hideElementById(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('hidden');
}

function  showElementById(elementid) {
    const element = document.getElementById(elementid);
    element.classList.remove('hidden');

}

function addbackgroundcolorbyid(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('bg-orange-400');
}

function removebackgroundcolorbyid(elementid){
    const element = document.getElementById(elementid);
    element.classList.remove('bg-orange-400');
}


function getarandomalphabet(){
    const alphabetstring = 'amiakashpathabotomarmonerakashejekhanegaibetumiunmone';
    const alphabets = alphabetstring.split('');
    //console.log(alphabets);

    const randomnum = Math.random()*53;
    const index = Math.round(randomnum);


    const alphabet = alphabets[index];
    
    return alphabet;
}

function getelementtextbyid(elementid){
    const elementtext = document.getElementById(elementid).innerText;
    return elementtext;
}


function setelementvaluebyid(elementid,value){
    const element = document.getElementById(elementid);
    element.innerText = value;
}