var name;
var rollno;
var email;
var store;
var myselect;


// var sscvalue;
var sscmarks;
var sscmarks1;
var sscradio;
var sscyop;
var sscper;

var intervalue;
var intermarks;
var intermarks1;
var interradio;
var interyop;
var interper;

var btechvalue;
var btechmarks;
var btechmarks1;
var btechradio;
var btechyop;
var btechper;
function getdetails(){
  name=document.getElementById("name").value;
  rollno=document.getElementById('rollno').value;
  email=document.getElementById('email').value;

  myselect=document.getElementById('myselect').value;
  console.log(name+" "+rollno+" "+email+" "+myselect+"");

  if (!window.indexedDB) {
    console.log("indexed db is not working...!");
  }
  var request=window.indexedDB.open("svitDB",1)
  request.onerror=(e)=>{
    console.log(e);
  }
  request.onupgradeneeded=(e)=>{
  var dbname=e.target.result;
  dbname.createObjectStore("cse",{keyPath:"name"});

    console.log("upgrade....");

  }

  request.onsuccess=(e)=>{
    var dbname=e.target.result;
    store=dbname.transaction("cse","readwrite").objectStore("cse");
    store.put(
  {
    "name":name,
    "rollno":rollno,
    "email":email,
    // "skillset":skillset,
    "myselect":myselect,
    "edudetails":[
      {
        "ssctype":sscmarks,
        "pertype":sscradio,
        "yearofpass":sscyop

    },
    {
      "ssctype":intervalue,
      "pertype":interradio,
      "yearofpass":interyop
    },
    {
      "ssctype":btechvalue,
      "pertype":btechradio,
      "yearofpass":btechyop
    }

    ]

  }
    );
  console.log("success....!");
  }

  // sscvalue=document.getElementById('sscvalue').value;
    sscmarks=document.getElementById('marks1').value;
    sscmarks1=document.getElementById('sscmarks1');
      sscmaks=document.getElementById('sscmarks');
    sscper=document.getElementById('sscper').value;
    sscyop=document.getElementById('sscyop').value;

    intervalue=document.getElementById('intervalue').value;
      intermarks=document.getElementById('intermarks').value;
      intermarks1=document.getElementById('intermarks1');
        intermarks=document.getElementById('intermarks');
    interper=document.getElementById('interper').value;
        interyop=document.getElementById('interyop').value;

        btechvalue=document.getElementById('btechvalue').value;
        btechmarks=document.getElementById('btechmarks').value;
            btechmarks1=document.getElementById('btechmarks1');
            btechmarks=document.getElementById('btechmarks');
        btechper=document.getElementById('btechper').value;
            btechyop=document.getElementById('btechyop').value;





  if(sscmarks1.checked){
 sscradio=sscmarks1.value;

  }
    else {
 sscradio=sscmaks.value;

    }




    if(intermarks1.checked){
  interradio=intermarks1.value;

    }
      else {
   interradio=intermarks.value;

      }

      if(btechmarks1.checked){
    btechradio=btechmarks1.value;

      }
        else {
     btechradio=btechmarks.value;

        }
        console.log(sscmarks+" "+sscmarks1+" "+sscradio+" "+sscper+" "+sscyop+" ");
        console.log(intervalue+" "+intermarks+" "+intermarks1+" "+interradio+" "+interper+" "+interyop+" ");
        console.log(btechvalue+" "+btechmarks+" "+btechmarks1+" "+btechradio+" "+btechper+" "+btechyop+" ");



}
