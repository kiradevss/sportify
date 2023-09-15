labels = document.querySelectorAll('label')

 

for(var i=0;i<labels.length;i++){
    labels[i].addEventListener('click',function(){
         
        for(var j=0;j<labels.length;j++){
            labels[j].classList.remove('selected')
        }

        for(var k=0;k<labels.length;k++){
            labels[k].querySelector('.progress-bar').style.width='0%'
            labels[k].querySelector('.progress').style.display='none'
        }


       setTimeout(function(){
        for(var k=0;k<labels.length;k++){
           values = labels[k].querySelector('.progress-bar').style.getPropertyValue('--w');
           labels[k].querySelector('.progress-bar').style.width = values + "%"
 
       
            labels[k].querySelector('.progress').style.display='block'
         
        }
       },500)
        this.classList.add('selected')
    })
}



        const cloneButton = document.getElementById('button');
        const container = document.querySelector('.container');

        cloneButton.addEventListener('click', function() {
            // Clone the container div
            const clonedContainer = container.cloneNode(true);

            // Append the cloned div below the original div
            container.parentNode.appendChild(clonedContainer);
        });