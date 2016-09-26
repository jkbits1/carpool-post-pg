

function sendForm() {

  var formData = new FormData();

  formData.append("IPAddress", "0.0.0.1");
  formData.append("DriverCollectionZIP", 60004); 
  formData.append("DriverCollectionRadius", 21); 
  formData.append("AvailableDriveTimesJSON", "after 11 am"); 

  formData.append("DriverCanLoadRiderWithWheelchair", false); 
  formData.append("SeatCount", 3);
  formData.append("DriverHasInsurance", true); 
  formData.append("DriverInsuranceProviderName", "ill. ins"); 
  formData.append("DriverInsurancePolicyNumber", 1234);

  formData.append("DriverLicenseState", 'MO');
  formData.append("DriverLicenseNumber", '5678');
  formData.append("DriverFirstName", 'jim');
  formData.append("DriverLastName", 'nilsen');
  formData.append("PermissionCanRunBackgroundCheck", true);

  formData.append("DriverEmail", 'jn@t.com');
  formData.append("DriverPhone", '246');
  formData.append("DriverAreaCode", 123);
  formData.append("DriverEmailValidated", false);              
  formData.append("DriverPhoneValidated", true);

  formData.append("DrivingOnBehalfOfOrganization", false); 
  formData.append("DrivingOBOOrganizationName", 'none');
  formData.append("RidersCanSeeDriverDetails", false);
  formData.append("DriverWillNotTalkPolitics", true);
  formData.append("ReadyToMatch", false);

  formData.append("PleaseStayInTouch", true);


  // HTML file input, chosen by user
  // formData.append("userfile", fileInputElement.files[0]);

  // JavaScript file-like object
  // var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
  // var blob = new Blob([content], { type: "text/xml"});

  // formData.append("webmasterfile", blob);

  var request = new XMLHttpRequest();
  request.open("POST", "http://localhost:8000/driver");
  request.send(formData);
}