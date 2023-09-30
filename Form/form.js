function validSub(e) {
    let name = document.getElementById("nameId").value;
    let emailID = document.getElementById("emailID").value;
    let numberVal = document.getElementById("number").value;
    let countryVal = document.getElementById("Country").value;
    let genVal = document.getElementsByName("gender");
    let gender = "";
  
    for (let i = 0; i < genVal.length; i++) {
      if (genVal[i].checked === true) {
        gender = genVal[i].value;
      }
    }
  
    if (name === "") {
      document.getElementById("nameErr").innerHTML =
        "Error - Fill the above feild";
    }
  
    if (
      name === "" ||
      emailID === "" ||
      numberVal === "" ||
      countryVal === "Select" ||
      gender === ""
    ) {
      console.log("Error");
    } else {
      var atIndex = emailID.indexOf("@");
      var dotIndex = emailID.lastIndexOf(".");
  
      if (
        atIndex <= 0 ||
        dotIndex <= atIndex ||
        dotIndex === emailID.length - 1
      ) {
        console.log("Error");
      } else {
        if (numberVal.length === 10) {
          console.log("Name --> " + name);
          console.log("Email --> " + emailID);
          console.log("Number --> " + numberVal);
          console.log("Country --> " + countryVal);
          console.log("Gender --> " + gender);
  
          document.getElementById("nameErr").innerHTML = "";
  
          alert(`Name --> ${name}
  Email --> ${emailID}
  Number --> ${numberVal}
  Country --> ${countryVal}
  Gender --> ${gender}`);
        }
      }
    }
  }