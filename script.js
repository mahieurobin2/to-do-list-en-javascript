const input = document.querySelector("#add");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');

// cette fonction permet d'ajouter un élément lorsqu'on clique sur le bouton
btn.onclick = function(){

    var txt = input.value;
    if(txt ==''){
        alert('merci de bien vouloir y saisir du texte');
    }else{
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';    
    }

};

//cette fonction va permettre de cocher les differents éléments quand vous cliquez
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
};