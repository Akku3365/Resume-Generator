function expAdd() {
    // console.log("Expericence added")
    let newNode = document.createElement("input")
    newNode.classList.add("form-control")
    newNode.classList.add("myField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder", "Enter here")

    let areaa = document.getElementById("we")
    let addBtn = document.getElementById("exAddBtn")

    areaa.insertBefore(newNode, addBtn)

}

function sumAdd() {
    console.log("Summary called")
}

function generateCV() {

    let nameTag = document.getElementById("nameField").value;
    let emailTag = document.getElementById("emailField").value;
    let contactTag = document.getElementById("contactField").value;
    let addressTag = document.getElementById("addressField").value;
    let fbTag = document.getElementById("fbField").value;
    let linkedinTag = document.getElementById("linkedinField").value;
    let instaTag = document.getElementById("instaField").value;
    let highschoolTag = document.getElementById("highSchoolField").value;
    let intermediateTag = document.getElementById("intermediateField").value;
    let graduationTag = document.getElementById("graduationField").value;
    let languageTag1 = document.getElementById("languageField1").value;
    let languageTag2 = document.getElementById("languageField2").value;
    let skillTag1 = document.getElementById("skill1").value;
    let skillTag2 = document.getElementById("skill2").value;
    let skillTag3 = document.getElementById("skill3").value;
    let skillTag4 = document.getElementById("skill4").value;
    let skillTag5 = document.getElementById("skill5").value;
    let wExpTag1 = document.getElementById("wExp1").value;
    let wExpTag2 = document.getElementById("wExp2").value;
    let summaryTag = document.getElementById("summaryTextArea").value;

    //    let nameTempTag = document.getElementById("nameTemp");
    //    let emailTempTag = document.getElementById("emailTemp");
    //    let contactTempTag = document.getElementById("contactTemp");
    //    let addressTempTag = document.getElementById("addressTemp");
    //    let fbTempTag = document.getElementById("fbTemp");
    //    let linkedinTempTag = document.getElementById("linkedinTemp");
    //    let instaTempTag = document.getElementById("instaTemp");
    //    let highSchoolTempTag = document.getElementById("hightSchoolTemp");
    //    let intermediateTempTag = document.getElementById("intermediateTemp");
    //    let graduationTempTag = document.getElementById("graduationTemp");
    //    let languageTempTag1 = document.getElementById("languageTemp1");
    //    let languageTempTag2 = document.getElementById("languageTemp2");

    nameTemp.innerHTML = nameTag;
    emailTemp.innerHTML = emailTag;
    contactTemp.innerHTML = contactTag;
    addressTemp.innerHTML = addressTag;
    fbTemp.innerHTML = fbTag;
    linkedinTemp.innerHTML = linkedinTag;
    instaTemp.innerHTML = instaTag;
    highSchoolTemp.innerHTML = highschoolTag;
    intermediateTemp.innerHTML = intermediateTag;
    graduationTemp.innerHTML = graduationTag;
    languageTemp1.innerHTML = languageTag1;
    languageTemp2.innerHTML = languageTag2
    skillTemp1.innerHTML = skillTag1;
    skillTemp2.innerHTML = skillTag2;
    skillTemp3.innerHTML = skillTag3;
    skillTemp4.innerHTML = skillTag4;
    skillTemp5.innerHTML = skillTag5;
    wExpTemp1.innerHTML = wExpTag1;
    wExpTemp2.innerHTML = wExpTag2;
    summaryTemp.innerHTML = summaryTag;

   document.getElementById("cv-form").style.display = 'none';
   document.getElementById("cv-template").style.display = 'block';

}

function printCV(){
    window.print();
}









