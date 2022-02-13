function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// add handler by get id
const blueButton = document.getElementById('make-blue');
       blueButton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }
//  add handler by anonymous function
const greenButton = document.getElementById('make-green');
greenButton.onclick = function(){
    document.body.style.backgroundColor = 'green';
};

  //  add handler by addEventListener
  const goldenrodButton = document.getElementById('make-gold');
  goldenrodButton.addEventListener('click',makeGold)

  function makeGold(){
      document.body.style.backgroundColor = 'goldenrod';
  }
  
  //  add handler by addEventListener with anonymous function
  const hotpinkButton = document.getElementById('make-hotpink');
  hotpinkButton.addEventListener('click',function(){
      document.body.style.backgroundColor = 'hotpink';
  })

    //  add handler by direct shortcut
    document.getElementById('make-lightblue').addEventListener('click',function(){
        document.body.style.backgroundColor = 'lightblue';
    })