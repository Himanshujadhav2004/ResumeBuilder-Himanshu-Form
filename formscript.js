function addNewWork(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3)
    
    let weOb=document.getElementById("we");
    let weaddbuttonOb=document.getElementById("addbtn");
    weOb.insertBefore(newNode,weaddbuttonOb);
}


function addAcadmic(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3)
    
    let weOb=document.getElementById("aq");
    let weaddbuttonOb=document.getElementById("addbtn2");
    weOb.insertBefore(newNode,weaddbuttonOb);
}
function CVgenerator(){
  document.getElementById("cvggnbtn").style.display="block";
    //first name
   
    let Firstname=document.getElementById("First-Name-input").value;
    let FirstnameT=document.getElementById("FirstnameT");
    FirstnameT.innerHTML=Firstname;
 //Last name
    let Lastname=document.getElementById("Second-Name-input").value;
    let LastnameT=document.getElementById("LastnameT");
   LastnameT.innerHTML=Lastname;
 
  //Profession
  let ProfessionT=document.getElementById("ProfessionT");
  let Profession=document.getElementById("Profession-input").value;
  ProfessionT.innerHTML=Profession; 
  
   let  City=document.getElementById("City-input").value;
//    let CityT=document.getElementById("CityT");

 


  let    Country=document.getElementById("Country-input").value;
//   let CountryT=document.getElementById("CountryT");
  



     let PinCode2=document.getElementById("Pincode-input").value;
     
//   let pincodeT=document.getElementById("pincodeT");


  pincodeT.innerHTML=addres;
let address_Section=document.getElementById("addressT");
if(City==""&& Country==""&& PinCode2==""){
    address_Section.innerHTML=City;
    pincodeT.innerHTML=City;
}

else if(City!=""&&Country==""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+PinCode2;
    pincodeT.innerHTML=addres;
}
//for Country
else if(City==""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country;
    pincodeT.innerHTML=addres;
}
else if(City==""&&Country!=""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
//for Pincode
else if(City==""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=PinCode2;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+PinCode2;
    pincodeT.innerHTML=addres;
}
else if(City==""&&Country!=""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
else{
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
  

    // let addressT=document.getElementById("addressT");
    // let addressField=document.getElementById("addressField").value;
    // addressT.innerHTML=addressField;


    //facebook
  
    let PhoneT=document.getElementById("PhoneT");
let PhoneIN=document.getElementById("Phone-input").value;
let PhoneNumberT=document.getElementById("PhoneNumberT");
    
let EmailIN=document.getElementById("Email-input").value;
let EmailidT=document.getElementById("EmailidT");
let EmailT=document.getElementById("EmailT");
EmailT.innerHTML=EmailIN;
if(PhoneIN!=""){
    PhoneT.innerHTML="<b>Phone</b>";
    PhoneNumberT.innerHTML=PhoneIN;
    
        }
        else{
            PhoneT.innerHTML=PhoneIN;
    PhoneNumberT.innerHTML=PhoneIN;
        }

        if(EmailIN!=""){
            EmailT.innerHTML="<b>Email</b>";
            EmailidT.innerHTML=EmailIN;
            
                }
                else{
                    EmailT.innerHTML=EmailIN;
            EmailidT.innerHTML=EmailIN;
                }
                if(City==""&&EmailIN==""&&PhoneIN==""&&Country==""&&PinCode2==""){
                    let contactT=document.getElementById("contactT");
                    contactT.style.display="none";

                }
                let Jobtitleinput=document.getElementById("Jobtitle-input").value;
                let JobtitleT=document.getElementById("JobtitleT");
                JobtitleT.innerHTML=Jobtitleinput;
                let Employerinput=document.getElementById("Employer-input").value;

                let CityinputWorkexperience=document.getElementById("City-input-Workexperience").value;
                let CountryinputWorkexperience=document.getElementById("Country-input-Workexperience").value;
                let WorkExaddress=document.getElementById("Work-Ex-address");
                if(Employerinput=="")
                {
                    WorkExaddress.innerHTML="";
                }
                else if(Employerinput!=""){
                    WorkExaddress.innerHTML=Employerinput;
                }
                else if(Employerinput!=""&&CityinputWorkexperience!=""&&CountryinputWorkexperience=="")
                {
                    WorkExaddress.innerHTML=Employerinput+","+CityinputWorkexperience;
                }
                else if(Employerinput!=""&&CityinputWorkexperience==""&&CountryinputWorkexperience!=""){
                    WorkExaddress.innerHTML=Employerinput+","+CountryinputWorkexperience; 
                }
                WorkExaddress.innerHTML=Employerinput+","+CityinputWorkexperience+","+CountryinputWorkexperience;
                let EndDateWorkExinput=document.getElementById("EndDate-WorkEx-input").value
                let StartDateWorkExinput=document.getElementById("StartDate-WorkEx-input").value
                let WorkExdateT=document.getElementById("Work-Ex-date")
                WorkExdateT.innerHTML=StartDateWorkExinput+"<br>"+EndDateWorkExinput;
             

                // const WorkExperienceDiv=document.getElementById("Work-Experience-Div");
                // if(Jobtitleinput==""&&Employerinput==""&&CityinputWorkexperience==""&&CountryinputWorkexperience==""&&EndDateWorkExinput==""&&StartDateWorkExinput=="")
                // {
                //     WorkExperienceDiv.remove();
                // }
let SchoolNameinput=document.getElementById("School-Name-input").value;
let SchoolLocationinput=document.getElementById("School-Location-input").value;
let Degreeinput=document.getElementById("Degree-input").value;
let FieldofStudy=document.getElementById("Field-of-Study").value
let GraduationStartDate=document.getElementById("Graduation-Start-Date").value;
let GraduationEndDate=document.getElementById("Graduation-End-Date").value;

let SchoolExdate=document.getElementById("School-Ex-date");
let DegreeT=document.getElementById("DegreeT");
let SchoolNameAddrres=document.getElementById("School-Name-Addrres");
SchoolNameAddrres.innerHTML=SchoolNameinput+","+SchoolLocationinput;
DegreeT.innerHTML=Degreeinput+":"+FieldofStudy;
SchoolExdate.innerHTML=GraduationStartDate+"<br>"+GraduationEndDate;
    // let facebookField=document.getElementById("facebookField").value;
    // let fbt=document.getElementById("fbt");
    // fbt.innerHTML=facebookField;
    // let InstagramField=document.getElementById("InstagramField").value;
    // let inst=document.getElementById("inst");
    // inst.innerHTML=facebookField;
    // let LinkdenField=document.getElementById("LinkdenField").value;
    // let linkdt=document.getElementById("linkdt");
    // linkdt.innerHTML=facebookField;
    let objectiveT=document.getElementById("objectiveT");
    let ObjectiveField=document.getElementById("ObjectiveField").value;
    objectiveT.innerHTML=ObjectiveField ;
    let  weField=document.getElementsByClassName("weField");
    let str=''
    for(let e of weField){
        str=str+ ` <li> ${e.value} </li>`
    }
    let weT=document.getElementById("weT");
    weT.innerHTML=str;


    let eqField =document.getElementsByClassName("eqField ");
    let str2=''
    for(let e of eqField ){
        str2=str2+ ` <li> ${e.value} </li>`
    }
    let AcadmicT=document.getElementById("AcadmicT");
    AcadmicT.innerHTML=str;
}

window.onload = function () {
    document.getElementById("cvggnbtn")
    .addEventListener("click", () => {
            const invoice = this.document.getElementById("cv-template");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: -1,
              filename:'myfile.pdf',
                image: { type: 'pdf', quality: 1},
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set({
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
              });
            html2pdf().from(invoice).save();
        })
}


function fainalize()
{
    document.getElementById("formid").style.display="none";
   
}

//photo change

const imgDiv =document.querySelector('img-container');
const img =document.querySelector('#photo');
const file=document.querySelector('#uploadBtn');




file.addEventListener('change',function(){

const choosedFile=this.files[0];
if(choosedFile){

    const reader =new FileReader();
    reader.addEventListener('load',function(){

        img.setAttribute('src',reader.result)
    });
    reader.readAsDataURL(choosedFile);
}

});




