//input.style.opacity = 0;

// 1. get the  file name of first uploaded file--model file
const inputModelFile = document.querySelector("#modelfile");
const modelmessage = document.querySelector("#modelmessage");
const inputBlastFile = document.querySelector("#blastfile");
const blastmessage = document.querySelector("#blastmessage");

inputModelFile.addEventListener("change", updateModelFile);
// inputModelFile.addEventListener("click", modelAlert);
inputBlastFile.addEventListener("change", updateBlastFile)



function updateModelFile() {
  // clear the previous file name
  while (modelmessage.firstChild) {
    modelmessage.removeChild(modelmessage.firstChild);
  }

  const curFile = inputModelFile.files;
  console.log(curFile[0]);
  const nameArray = curFile[0].name.split('.')
  console.log(nameArray)
  const fileType= curFile[0].name.split('.').pop()

  const para = document.createElement("p");

  if (curFile.length === 0) {
    para.textContent = "No files currently selected for upload";
  } else if (fileType !== "csv"){
      para.textContent = "File type is noc correct, please upload a csv file!";
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'File type is wrong!',
      })
  }else if(nameArray[0]!== "block_model"){
    para.textContent = `File name ${curFile[0].name} .   Please upload the correct file!`;
    Swal.fire({
      icon: 'error',
      title: 'File name is not right',
      text: 'Please upload the correct file!',
      
    })
  }
  else {
    para.textContent = `File name ${curFile[0].name} successfully uploaded !`;
    Swal.fire({
      icon: 'success',
      title: 'Great!',
      text: 'File uploaded successfully!',
      
    })
  }
  modelmessage.appendChild(para);
  
}

// 2. check the file name is correct, if not, send a message
// 3. get the file name of the second file uploaded--blast flie
// 4. check the file name  is correct, if not, send a message
// 5. check the extension is csv

function updateBlastFile() {
    // clear the previous file name
    while (blastmessage.firstChild) {
      blastmessage.removeChild(blastmessage.firstChild);
    }
  
    const curFile = inputBlastFile.files;
    console.log(curFile[0]);
    const nameArray = curFile[0].name.split('.')
    console.log(nameArray)
    const fileType= curFile[0].name.split('.').pop()
  
    const para = document.createElement("p");
  
    if (curFile.length === 0) {
      para.textContent = "No files currently selected for upload";
    } else if (fileType !== "csv"){
        para.textContent = "File type is noc correct, please upload a csv file!";
    }else if(nameArray[0]!== "Blast_design"){
      para.textContent = "Please upload the correct file!";
    }
    else {
      para.textContent = `File name ${curFile[0].name} successfully uploaded !`;
    }
    blastmessage.appendChild(para);
  }

// run terminal after clicking "run program" button
// if the files are not correct, the program cannot run
