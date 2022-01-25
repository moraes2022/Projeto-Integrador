
window.onload = function() {
  let element = document.getElementById("estado");
  element.selectedIndex = 0;
}

function selecionarCidades(c){
   document.getElementById("seleCidades").innerHTML = '';
   var cidSelect = document.getElementById("seleCidades");
   var num_est = est_cids.estados.length;
   var index = -1;

   for(var i=0; i < num_est; i++){
      if(est_cids.estados[i].sigla == c){
         index = i;
      }
   }

   if(index != -1){
      est_cids.estados[index].cidades.forEach(function(cidade){
         var optionCid = document.createElement('option');
         optionCid.setAttribute('value',cidade);
         optionCid.innerHTML = cidade;
         cidSelect.appendChild(optionCid);
      });
   }
   else{
      document.getElementById("seleCidades").innerHTML = '';
   }

}
