

function sendForm() {
  var formData  = new FormData();
  var remoteUrl = "http://localhost:8000/driver";

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

  var request = new XMLHttpRequest();

  request.open("POST", remoteUrl);
  request.send(formData);
}
