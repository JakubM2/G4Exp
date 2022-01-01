/*Email Alert - activated inside body index.php */
function EmailAlert(){
  let url = location.href;
  console.log(url);
  let info = url.split(`?`);
  //console.log(info[1]);
  if(info[1] === 'success#contact'){
    alert("Your e-mail has been successfully sent to us");
    //document.getElementById('statusMessage').innerText = "Success!";
  }else if(info[1] === 'fail#contact'){
    alert("Error.\nPlease write to us directly: contact@g4exp.com");
    //document.getElementById('statusMessage').innerText = "Error!";
  }else{
    //do nothing
  }
}
/*Read Position*/
function ReadPosition(){
  let url = location.href;
  console.log(url);
  let info = url.split(`?`);
  if(info[1] !== ''){
    //check words
    let words = url.split(`_`);
    console.log(words);
    let final_word = '';
    for(let n=1;n<words.length;n++){
      final_word += words[n] + ' ';
    }
    console.log(final_word);
    document.getElementById('positionH2').innerHTML = "Position: "+final_word;
    //set var inside input field
    document.getElementById('Position').value = final_word;
  }else{
    //do not insert any thing...
  }
}