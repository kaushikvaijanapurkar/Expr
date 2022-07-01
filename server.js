var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');

var app = express();
const router = express.Router();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/BankWizard', function(request, response) {
    
      var jsonContent = "{\"responseHeader\":{\"requestType\":\"Bankwizard\",\"clientReferenceId\":\"DM_RB-2\",\"expRequestId\":\"RB000097410794\",\"messageTime\":\"2022-05-18T14:39:43Z\",\"overallResponse\":{\"decision\":\"CONTINUE\",\"decisionText\":\"Continue\",\"decisionReasons\":[\"exactmatchonperson,highlyprobablematchonaddress,bankaccountmatched\"],\"recommendedNextActions\":[],\"spareObjects\":[]},\"responseCode\":\"R0201\",\"responseType\":\"INFO\",\"responseMessage\":\"WorkflowComplete.\",\"tenantID\":\"X241B4TY\"},\"clientResponsePayload\":{\"orchestrationDecisions\":[{\"sequenceId\":\"1\",\"decisionSource\":\"BankWizard\",\"decision\":\"ACCEPT\",\"decisionReasons\":[\"exactmatchonperson,highlyprobablematchonaddress,bankaccountmatched\"],\"score\":0,\"decisionText\":\"Continue\",\"nextAction\":\"Continue\",\"decisionTime\":\"2022-05-18T14:04:08Z\"}],\"decisionElements\":[{\"serviceName\":\"Bankwizard\",\"applicantId\":\"APPLICANT_1\",\"decision\":\"CLOSED\",\"decisionText\":\"\",\"warningsErrors\":[],\"matches\":[{\"name\":\"Accountowner\",\"value\":\"CLOSED\"}],\"scores\":[{\"name\":\"Personaldetails\",\"score\":6,\"type\":\"SCORE\"},{\"name\":\"Address\",\"score\":6,\"type\":\"SCORE\"}]}]},\"originalRequestData\":{\"application\":{\"applicants\":[{\"applicantType\":\"APPLICANT\",\"consent\":true,\"contactId\":\"MAINCONTACT_1\",\"id\":\"APPLICANT_1\",\"knownCustomer\":true,\"type\":\"INDIVIDUAL\"}]},\"contacts\":[{\"addresses\":[{\"addressType\":\"Current\",\"buildingNumber\":\"1\",\"countryCode\":\"GBR\",\"id\":\"MainAppAddress_1\",\"postal\":\"PA756PB\",\"street\":\"ARnYLLTERRACE\"}],\"bankAccount\":{\"clearAccountNumber\":\"00136076\",\"id\":\"MainBankAccount_1\",\"sortCode\":\"070116\",\"type\":\"Single\"},\"id\":\"MainContact_1\",\"person\":{\"names\":[{\"firstName\":\"MARK\",\"id\":\"MainPersonName_1\",\"surName\":\"ADOLFSON\",\"type\":\"Current\"}],\"personDetails\":{\"dateOfBirth\":\"1984-10-28\"},\"typeOfPerson\":\"Applicant\"}}],\"control\":[{\"option\":\"MODEL_CODE\",\"value\":\"MODELA\"}],\"source\":\"WEB\"}}";
    
    response.send(JSON.parse(jsonContent));
});

https://your-heroku-app-name.herokuapp.com/api-endpoint-parameter?tite=ABCDE
app.post('/Authenticate', function(request, response) {
    
      var jsonContent = "{\"responseHeader\":{\"requestType\":\"Authenticateplus-Standalone\",\"clientReferenceId\":\"Experian\",\"expRequestId\":\"RB000669123164\",\"messageTime\":\"2022-05-18T13:51:43Z\",\"overallResponse\":{\"decision\":\"CONTINUE\",\"decisionText\":\"Continue\",\"decisionReasons\":[\"Authenticated-Level1orLevel2\"],\"recommendedNextActions\":[],\"spareObjects\":[]},\"responseCode\":\"R0201\",\"responseType\":\"INFO\",\"responseMessage\":\"WorkflowComplete.\",\"tenantID\":\"X241B4TY\"},\"clientResponsePayload\":{\"orchestrationDecisions\":[{\"sequenceId\":\"1\",\"decisionSource\":\"Authenticateplus\",\"decision\":\"AUTH\",\"decisionReasons\":[\"Authenticated-Level1orLevel2\"],\"score\":0,\"decisionText\":\"Authenticated\",\"nextAction\":\"Continue\",\"decisionTime\":\"2022-05-18T14:08:17Z\"}],\"decisionElements\":[{\"serviceName\":\"Authenticateplus\",\"applicantId\":\"APPLICANT_1\",\"decision\":\"AU01\",\"score\":45,\"decisionText\":\"\",\"decisionReason\":\"TheApplicanthasbeenAuthenticatedtoyourrequired'Level1'\",\"appReference\":\"6EQRC5R92B\",\"rules\":[{\"ruleId\":\"\",\"ruleName\":\"AUTP_IDCONFLEVEL\",\"ruleScore\":1,\"ruleText\":\"Theidentitysuppliedhasbeenconfirmedattherequired'Level1'\"}],\"warningsErrors\":[],\"otherData\":{},\"matches\":[{\"name\":\"OldAuthScorecard\",\"value\":\"N\"},{\"name\":\"NewAuthScorecard\",\"value\":\"Y\"},{\"name\":\"GranularDetails\",\"value\":\"Y\"},{\"name\":\"DisplayTelephone\",\"value\":\"N\"},{\"name\":\"MultipleCIFASURN\",\"value\":\"N\"},{\"name\":\"NewAgeVerificationScorecard\",\"value\":\"N\"},{\"name\":\"DisplayPEPSanctionSource\",\"value\":\"N\"},{\"name\":\"VelocityRules\",\"value\":\"N\"}],\"dataCounts\":[{\"name\":\"IDandLocDataAtCL_NumPrimDataItems\",\"value\":3},{\"name\":\"IDandLocDataAtCL_NumPrimDataSources\",\"value\":3},{\"name\":\"IDandLocDataAtCL_StartDateOldestPrim\",\"value\":201806},{\"name\":\"IDandLocDataAtCL_NumSecDataItems\",\"value\":0},{\"name\":\"IDandLocDataAtCL_NumSecDataSources\",\"value\":0},{\"name\":\"LocDataOnlyAtCLoc_NumPrimDataItems\",\"value\":0},{\"name\":\"LocDataOnlyAtCLoc_NumPrimDataSources\",\"value\":0},{\"name\":\"LocDataOnlyAtCLoc_NumSecDataItems\",\"value\":0},{\"name\":\"LocDataOnlyAtCLoc_NumSecDataSources\",\"value\":0},{\"name\":\"IDandLocDataAtPL_NumPrimDataItems\",\"value\":0},{\"name\":\"IDandLocDataAtPL_NumPrimDataSources\",\"value\":0},{\"name\":\"IDandLocDataAtPL_NumSecDataItems\",\"value\":0},{\"name\":\"IDandLocDataAtPL_NumSecDataSources\",\"value\":0},{\"name\":\"LocDataOnlyAtPLoc_NumPrimDataItems\",\"value\":0},{\"name\":\"LocDataOnlyAtPLoc_NumPrimDataSources\",\"value\":0},{\"name\":\"LocDataOnlyAtPLoc_NumSecDataItems\",\"value\":0},{\"name\":\"LocDataOnlyAtPLoc_NumSecDataSources\",\"value\":0},{\"name\":\"NumAgeMatchesToPrim\",\"value\":3},{\"name\":\"NumAgeMatchToSec\",\"value\":0},{\"name\":\"NumTimeAtCLMtchPrim\",\"value\":0},{\"name\":\"NumTimeAtCLMatchSec\",\"value\":0},{\"name\":\"HighRiskPolRuleCnt\",\"value\":0},{\"name\":\"NumberPrimaryCategoryIACurrentAddress\",\"value\":3},{\"name\":\"NumberSecondaryCategoryIACurrentAddress\",\"value\":0},{\"name\":\"NumberPrimaryCategoryIAPreviousAddress\",\"value\":0},{\"name\":\"NumberSecondaryCategoryIAPreviousAddress\",\"value\":0},{\"name\":\"CIFASCount\",\"value\":0},{\"name\":\"PEPSanctionCount\",\"value\":0},{\"name\":\"VariableDataLength\",\"value\":30},{\"name\":\"NameAndDOBPrimaryItemCountAll\",\"value\":0},{\"name\":\"NameAndDOBPrimarySourceCountAll\",\"value\":0},{\"name\":\"NameAndDOBSecondaryItemCountAll\",\"value\":0},{\"name\":\"NameAndDOBSecondarySourceCountAll\",\"value\":0},{\"name\":\"NumberOfPrimaryNameAndDOBText\",\"value\":0},{\"name\":\"NumberOfSecondaryNameAndDOBText\",\"value\":0}],\"scores\":[{\"name\":\"NewAuthIndex\",\"score\":45,\"type\":\"SCORE\"},{\"name\":\"ValidationScore\",\"score\":100,\"type\":\"SCORE\"},{\"name\":\"VerificationScore\",\"score\":969,\"type\":\"SCORE\"}]}]},\"originalRequestData\":{\"application\":{\"applicants\":[{\"applicantType\":\"APPLICANT\",\"consent\":true,\"contactId\":\"MAINCONTACT_1\",\"id\":\"APPLICANT_1\",\"type\":\"INDIVIDUAL\"}]},\"contacts\":[{\"addresses\":[{\"addressIdentifier\":\"ADDRESS_1\",\"addressType\":\"CURRENT\",\"buildingNumber\":\"140\",\"countryCode\":\"GBR\",\"id\":\"MAINAPPADDRESS_1\",\"indicator\":\"RESIDENTIAL\",\"postal\":\"BT131JA\"}],\"id\":\"MAINCONTACT_1\",\"person\":{\"names\":[{\"firstName\":\"Steven\",\"id\":\"MAINPERSONNAME_1\",\"surName\":\"hillerby\",\"title\":\"Mr\",\"type\":\"CURRENT\"}],\"personDetails\":{\"dateOfBirth\":\"1990-07-19\"},\"typeOfPerson\":\"APPLICANT\"}}]}}"; 

    response.send(JSON.parse(jsonContent));
    
}); 

//https://your-heroku-app-name.herokuapp.com/api-endpoint-parameter?tite=ABCDE
app.post('/Peps', function(request, response) {
    
      var jsonContent = "{\"responseHeader\":{\"requestType\":\"PepSanctions01\",\"clientReferenceId\":\"PEPS_SANCTIONS1\",\"expRequestId\":\"RB000668920683\",\"messageTime\":\"2022-05-18T11:25:01Z\",\"overallResponse\":{\"decision\":\"CONTINUE\",\"decisionText\":\"Continue\",\"decisionReasons\":[\"NorelevantHuntermatchespresent\"],\"recommendedNextActions\":[],\"spareObjects\":[]},\"responseCode\":\"R0201\",\"responseType\":\"INFO\",\"responseMessage\":\"WorkflowComplete.\",\"tenantID\":\"X241B4TY\"},\"clientResponsePayload\":{\"orchestrationDecisions\":[{\"sequenceId\":\"1\",\"decisionSource\":\"Hunter\",\"decision\":\"NO\",\"decisionReasons\":[\"NorelevantHuntermatchespresent\"],\"score\":0,\"decisionText\":\"NorelevantMatches\",\"nextAction\":\"Continue\",\"decisionTime\":\"2022-05-18T11:25:03Z\"}],\"decisionElements\":[{\"serviceName\":\"Hunter\",\"score\":0,\"appReference\":\"PEPS_SANCTIONS1\",\"warningsErrors\":[{\"responseType\":\"WARNING\",\"responseCode\":\"104001\",\"responseMessage\":\"Oneormoreversionsoftherequestedsubmissiondonothaveascore.\"}],\"otherData\":{\"response\":{\"matchSummary\":{\"totalMatchScore\":\"0\",\"matches\":0},\"errorWarnings\":{\"errors\":{\"error\":[],\"errorCount\":0},\"warnings\":{\"warning\":[{\"number\":\"104001\",\"message\":\"Oneormoreversionsoftherequestedsubmissiondonothaveascore.\",\"values\":{\"value\":[]}}],\"warningCount\":1}}}}}]},\"originalRequestData\":{\"application\":{\"applicantEntities\":[{\"contactId\":\"PEP_ORG_1\",\"entityType\":\"PEP_ORG\"}],\"applicants\":[{\"applicantType\":\"MAIN_APPLICANT\",\"contactId\":\"MA_1\",\"id\":\"MA_APPLICANT1\",\"type\":\"INDIVIDUAL\"}],\"originalRequestTime\":\"2022-05-18T11:25:01Z\",\"productDetails\":{\"productCode\":\"MS_CON\"},\"status\":\"ACCPT\"},\"contacts\":[{\"addresses\":[{\"addressType\":\"CURRENT\",\"id\":\"MA_CADDRESS1\",\"postal\":\"BT16HH\"}],\"id\":\"MA_1\",\"person\":{\"names\":[{\"firstName\":\"DaY\",\"id\":\"MA_NAME1\",\"surName\":\"34017\",\"title\":\"MR\",\"type\":\"CURRENT\"}],\"personDetails\":{\"dateOfBirth\":\"2000-01-01\",\"pepsSanctionsFlag\":\"Y\",\"yearOfBirth\":\"2000\"},\"personIdentifier\":\"\",\"typeOfPerson\":\"APPLICANT\"}}],\"source\":\"\"}}";

    response.send(JSON.parse(jsonContent));
    
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
