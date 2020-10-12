//input.style.opacity = 0;

// 1. get the  file name of first uploaded file--model file

const inputModelFile = document.querySelector("#modelfile");
const modelmessage = document.querySelector("#modelmessage");
const inputBlastFile = document.querySelector("#blastfile");
const blastmessage = document.querySelector("#blastmessage");
inputModelFile.addEventListener("change", updateModelFile);
// inputModelFile.addEventListener("click", modelAlert);
inputBlastFile.addEventListener("change", updateBlastFile);



// function to get the uploaded file name:

function getFirstFileName() {
  const file = inputModelFile.files;
  //console.log(file[0]);
  const nameArray = file[0].name.split(".");
  //console.log(nameArray);
  const firstFileName = nameArray[0];
  return firstFileName;
}


function getSecondFileName() {
  const file = inputBlastFile.files;
  //console.log(file[0]);
  const nameArray = file[0].name.split(".");
  //console.log(nameArray);
  const secondFileName = nameArray[0];
  return secondFileName;
}


// function to get the uploaded file type

function getFileType() {
  const file = inputModelFile.files;
  const fileType = file[0].name.split(".").pop();
  return fileType;
}



// Function to upload the model file

function updateModelFile() {
  // clear the previous file name
  while (modelmessage.firstChild) {
    modelmessage.removeChild(modelmessage.firstChild);
  }

  const fileName = getFirstFileName();
  //console.log(fileName);

  const fileType = getFileType();
  //console.log(fileType);

  // const curFile1 = inputModelFile.files;
  // console.log(curFile1[0]);
  // const nameArray = curFile1[0].name.split('.')
  // console.log(nameArray)
  // const fileType= curFile1[0].name.split('.').pop()

  const para = document.createElement("p");

  // if filename is empty
  if (!fileName) {
    para.textContent = "No files currently selected for upload";
  } else if (fileType !== "csv") {
    // if file type is not csv, pop up message of incorrect file type
    para.textContent = "File type is not correct, please upload a csv file!";
    // message of sweet alert
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "File type is wrong!",
    });
  } else if (fileName === "block_model") {
    // if the file name matches block_model, showing the message of successful upload
    console.log(fileName);
    para.textContent = `File name ${fileName} successfully uploaded! `;

    //message of sweet alert
    Swal.fire({
      icon: "success",
      title: "Great!",
      text: "File uploaded successfully!",
    });
  } else {
    // if file name doesn't match, show the message of file name incorrect
    para.textContent = `File name ${fileName} . Please upload the correct file!`;
    // sweet alert message
    Swal.fire({
      icon: "error",
      title: "File name is not right",
      text: "Please upload the correct file!",
    });
  }
  // put the message into the text of message area
  modelmessage.appendChild(para);
}




function updateBlastFile() {
  // clear the previous file name
  while (blastmessage.firstChild) {
    blastmessage.removeChild(blastmessage.firstChild);
  }

  const fileName2 = getSecondFileName();
  //console.log(fileName);

  const fileType = getFileType();
  //console.log(fileType);

  // const curFile = inputBlastFile.files;
  // console.log(curFile[0]);
  // const nameArray = curFile[0].name.split(".");
  // console.log(nameArray);
  // const fileType = curFile[0].name.split(".").pop();

  const para = document.createElement("p");

  if (!fileName2) {
    para.textContent = "No files currently selected for upload";
  } else if (fileType !== "csv") {
    para.textContent = "File type is not correct, please upload a csv file!";
  } else if (nameArray[0] !== "Blast_design") {
    para.textContent = "Please upload the correct file!";
  } else {
    para.textContent = `File name ${curFile[0].name} successfully uploaded !`;
  }
  blastmessage.appendChild(para);
}

// run terminal after clicking "run program" button
// if the files are not correct, the program cannot run
function runProgram() {
  const file1 = getFirstFileName();
  console.log(file1);
 const file2 = getSecondFileName();
 console.log(file2);

 if (file1 == "block_model" && file2 == "Blast_design"){
   console.log("both files are correct!")

   Swal.fire({
    icon: "success",
    title: "Great!",
    text: "File executed successfully in terminal !",
  })


 }else {

  Swal.fire({
    icon: "error",
    title: "something is wrong",
    text: "Please make sure you upload the correct files !",
  });

 }
  
  
}
