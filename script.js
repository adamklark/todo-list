
//Selection sur les quelles je vais agir
const list = document.querySelector('#list')
const form = document.querySelector('form')
const item = document.querySelector('#item')


//ajoute l'élément
form.addEventListener('submit',function(e){
    //Elimine le comportement par défaut
    e.preventDefault();
    //innerHTML += ajoute un li au valeur entrée a l'input(#item)
    list.innerHTML += `<li>${item.value}</li>`;
    //vide le texte taper dans le variable item
    item.value = ""; 
})

//efface l'élément
list.addEventListener('click', function(){
    //e.target correspond a l'élément cliquer
    //classList.contains verifie l'element possède ou pas la class checked
    //si mon élément possède la class checked j'efface l'élément cliqué
    if(e.target.classList.contains('checked')){
        e.target.remove();
    }else{
        //J'ajoute la class checked a mon élément cliqué
        e.target.classList.add('checked');
    }
})

