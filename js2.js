function search(){
    let searchbar= document.querySelector('.search-input').value.toUpperCase();
    let pdflist=document.querySelector('.pdf-list');
    let fils=document.querySelectorAll('.fils');
    let videoname =document.getElementsByTagName('h3');

for(let i =0; i<videoname.length; i++){
   if(videoname[i].innerHTML.toUpperCase().indexOf(searchbar) >= 0){
    fils[i].style.display= "";
   }else{
    fils[i].style.display= "none";
   }
}
}
