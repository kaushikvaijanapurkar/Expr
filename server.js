var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

// https://your-heroku-app-name.herokuapp.com/api-endpoint
app.get('/BankWizard', function(request, response) {
    
      var jsonContent = {
    "responseHeader": {
        "requestType": "Bankwizard",
        "clientReferenceId": "DM_RB-2",
        "expRequestId": "RB000097410794",
        "messageTime": "2022-05-18T14:39:43Z",
        "overallResponse": {
            "decision": "CONTINUE",
            "decisionText": "Continue",
            "decisionReasons": [
                "exact match on person, highly probable match on address, bank account matched"
            ],
            "recommendedNextActions": [],
            "spareObjects": []
        },
        "responseCode": "R0201",
        "responseType": "INFO",
        "responseMessage": "Workflow Complete.",
        "tenantID": "X241B4TY"
    },
    "clientResponsePayload": {
        "orchestrationDecisions": [
            {
                "sequenceId": "1",
                "decisionSource": "BankWizard",
                "decision": "ACCEPT",
                "decisionReasons": [
                    "exact match on person, highly probable match on address, bank account matched"
                ],
                "score": 0,
                "decisionText": "Continue",
                "nextAction": "Continue",
                "decisionTime": "2022-05-18T14:04:08Z"
            }
        ],
        "decisionElements": [
            {
                "serviceName": "Bankwizard",
                "applicantId": "APPLICANT_1",
                "decision": "Match",
                "decisionText": "",
                "warningsErrors": [],
                "matches": [
                    {
                        "name": "Account owner",
                        "value": "Match"
                    }
                ],
                "scores": [
                    {
                        "name": "Personal details",
                        "score": 9,
                        "type": "SCORE"
                    },
                    {
                        "name": "Address",
                        "score": 9,
                        "type": "SCORE"
                    }
                ]
            }
        ]
    },
    "originalRequestData": {
        "application": {
            "applicants": [
                {
                    "applicantType": "APPLICANT",
                    "consent": true,
                    "contactId": "MAINCONTACT_1",
                    "id": "APPLICANT_1",
                    "knownCustomer": true,
                    "type": "INDIVIDUAL"
                }
            ]
        },
        "contacts": [
            {
                "addresses": [
                    {
                        "addressType": "Current",
                        "buildingNumber": "1",
                        "countryCode": "GBR",
                        "id": "MainAppAddress_1",
                        "postal": "PA756PB",
                        "street": "ARnYLL TERRACE"
                    }
                ],
                "bankAccount": {
                    "clearAccountNumber": "00136076",
                    "id": "MainBankAccount_1",
                    "sortCode": "070116",
                    "type": "Single"
                },
                "id": "MainContact_1",
                "person": {
                    "names": [
                        {
                            "firstName": "MARK",
                            "id": "MainPersonName_1",
                            "surName": "ADOLFSON",
                            "type": "Current"
                        }
                    ],
                    "personDetails": {
                        "dateOfBirth": "1984-10-28"
                    },
                    "typeOfPerson": "Applicant"
                }
            }
        ],
        "control": [
            {
                "option": "MODEL_CODE",
                "value": "MODELA"
            }
        ],
        "source": "WEB"
    }
};
    
    response.send(JSON.parse(JSON.stringify(jsonContent)));
});

//https://your-heroku-app-name.herokuapp.com/api-endpoint-parameter?tite=ABCDE
app.get('/Authenticate', function(request, response) {
    var titleRequest = request.query.title; // Change .title / .name or any text based on your parameter name
    
      var jsonContent = {
    "responseHeader": {
        "requestType": "Authenticateplus-Standalone",
        "clientReferenceId": "Experian",
        "expRequestId": "RB000669123164",
        "messageTime": "2022-05-18T13:51:43Z",
        "overallResponse": {
            "decision": "CONTINUE",
            "decisionText": "Continue",
            "decisionReasons": [
                "Authenticated - Level 1 or Level 2"
            ],
            "recommendedNextActions": [],
            "spareObjects": []
        },
        "responseCode": "R0201",
        "responseType": "INFO",
        "responseMessage": "Workflow Complete.",
        "tenantID": "X241B4TY"
    },
    "clientResponsePayload": {
        "orchestrationDecisions": [
            {
                "sequenceId": "1",
                "decisionSource": "Authenticateplus",
                "decision": "AUTH",
                "decisionReasons": [
                    "Authenticated - Level 1 or Level 2"
                ],
                "score": 0,
                "decisionText": "Authenticated",
                "nextAction": "Continue",
                "decisionTime": "2022-05-18T14:08:17Z"
            }
        ],
        "decisionElements": [
            {
                "serviceName": "Authenticateplus",
                "applicantId": "APPLICANT_1",
                "decision": "AU01",
                "score": 45,
                "decisionText": "",
                "decisionReason": "The Applicant has been Authenticated to your required 'Level 1'",
                "appReference": "6EQRC5R92B",
                "rules": [
                    {
                        "ruleId": "",
                        "ruleName": "AUTP_IDCONFLEVEL",
                        "ruleScore": 1,
                        "ruleText": "The identity supplied has been confirmed at the required 'Level 1'"
                    }
                ],
                "warningsErrors": [],
                "otherData": {
                    "response": "{\"authResults\":{\"error\":null,\"authPlusResults\":{\"authConsumer\":{\"authPlusRefNum\":null,\"locDataOnlyAtCLoc\":{\"numPrimDataItems\":\"0\",\"numPrimDataSources\":\"0\",\"startDateOldestPrim\":null,\"numSecDataItems\":\"0\",\"numSecDataSources\":\"0\",\"startDateOldestSec\":null},\"locDataOnlyAtPLoc\":{\"numPrimDataItems\":\"0\",\"numPrimDataSources\":\"0\",\"startDateOldestPrim\":null,\"numSecDataItems\":\"0\",\"numSecDataSources\":\"0\",\"startDateOldestSec\":null},\"dataMatchCounts\":{\"numAgeMatchesToPrim\":\"3\",\"numAgeMatchToSec\":\"0\",\"numTimeAtCLMtchPrim\":\"0\",\"numTimeAtCLMatchSec\":\"0\"},\"decisionData\":{\"authPlusDecision\":\"AU01\",\"authPlusDecText\":\"The Applicant has been Authenticated to your required 'Level 1'\",\"authenticationIndex\":\"45\",\"authIndexText\":null},\"idandLocDataAtCL\":{\"numPrimDataItems\":\"3\",\"numPrimDataSources\":\"3\",\"startDateOldestPrim\":{\"ccyy\":\"2018\",\"mm\":6},\"numSecDataItems\":\"0\",\"numSecDataSources\":\"0\",\"startDateOldestSec\":null},\"idandLocDataAtPL\":{\"numPrimDataItems\":\"0\",\"numPrimDataSources\":\"0\",\"startDateOldestPrim\":null,\"numSecDataItems\":\"0\",\"numSecDataSources\":\"0\",\"startDateOldestSec\":null},\"idconfirmedFlag\":{\"idconfirmedLevel\":\"1\",\"idconfirmLevelText\":\"The identity supplied has been confirmed at the required 'Level 1'\",\"cifasreference\":null}},\"highRiskPolRuleCnt\":\"0\",\"highRiskPolicyRules\":[],\"locationDetails\":[{\"locationIdentifier\":null,\"locationFormat\":\"UK\",\"overseasLocation\":null,\"formattedLocation\":null,\"uklocation\":{\"inputLocation\":null,\"agreedLocation\":{\"location\":{\"flat\":null,\"houseName\":null,\"houseNumber\":\"140\",\"street\":\"MALVERN WAY\",\"street2\":null,\"district\":null,\"district2\":null,\"postTown\":\"BELFAST\",\"county\":null,\"postcode\":\"BT131JA\",\"country\":null,\"pobox\":null},\"clientLocationID\":null,\"rmc\":\"4517000\",\"regionNumber\":\"9\",\"phoneNumber\":null,\"cvplocationID\":null},\"formattedLocation\":null},\"bfpolocation\":null}],\"autg\":{\"versionNumberSpecified\":false,\"oldAuthScorecard\":\"N\",\"newAuthScorecard\":\"Y\",\"granularDetails\":\"Y\",\"displayTelephone\":\"N\",\"multipleCIFASURN\":\"N\",\"newAgeVerificationScorecard\":\"N\",\"displayPEPSanctionSource\":\"N\",\"velocityRules\":\"N\",\"numberPrimaryCategoryIACurrentAddress\":3,\"numberSecondaryCategoryIACurrentAddress\":0,\"numberPrimaryCategoryIAPreviousAddress\":0,\"numberSecondaryCategoryIAPreviousAddress\":0,\"variableDataLength\":30,\"primaryCategoryIACurrentAddress\":[{\"textPrimaryCategoryIACurrentAddress\":\"Current Accounts                        \",\"numberPrimaryCategorySourceIACurrentAddress\":1,\"numberPrimaryCategoryDataIACurrentAddress\":1,\"iacurrentAddressPrimaryOldestDate\":\"201806\"},{\"textPrimaryCategoryIACurrentAddress\":\"Credit/Store Cards                      \",\"numberPrimaryCategorySourceIACurrentAddress\":1,\"numberPrimaryCategoryDataIACurrentAddress\":1,\"iacurrentAddressPrimaryOldestDate\":\"202009\"},{\"textPrimaryCategoryIACurrentAddress\":\"Media Services & Communications         \",\"numberPrimaryCategorySourceIACurrentAddress\":1,\"numberPrimaryCategoryDataIACurrentAddress\":1,\"iacurrentAddressPrimaryOldestDate\":\"201807\"}],\"secondaryCategoryIACurrentAddress\":[],\"primaryCategoryIAPreviousAddress\":[],\"secondaryCategoryIAPreviousAddress\":[],\"homeTelephoneNumber\":null,\"newAuthIndex\":\"045\",\"validationScore\":\"+0100\",\"verificationScore\":\"+0969\",\"experianAgeDOBMatch\":null,\"ageRange\":null,\"ownCompanyVelocityTime\":null,\"ownCompanyVelocityTolerance\":null,\"ownCompanyPreviousSearchCount\":null,\"ownGroupVelocityTime\":null,\"ownGroupVelocityTolerance\":null,\"ownGroupPreviousSearchCount\":null,\"cifascount\":0,\"pepsanctionCount\":0,\"cifasdetails\":[],\"pepsanctionsList\":[],\"pepsancText1\":null,\"pepsancText2\":null,\"pepsancText3\":null,\"pepsancText4\":null,\"pepsancText5\":null},\"autc\":{\"nameanddobcounts\":{\"nameAndDOBPrimaryItemCountAll\":0,\"nameAndDOBPrimarySourceCountAll\":0,\"nameAndDOBPrimarySourceOldestDateAll\":null,\"nameAndDOBSecondaryItemCountAll\":0,\"nameAndDOBSecondarySourceCountAll\":0,\"nameAndDOBSecondarySourceOldestDateAll\":null},\"numberOfPrimaryNameAndDOBText\":0,\"numberOfSecondaryNameAndDOBText\":0,\"nameanddobgranulardetailsprimarysources\":[],\"nameanddobgranulardetailssecondarysources\":[]}},\"authPSv2Results\":null,\"caseReference\":\"6EQRC5R92B\"}}"
                },
                "matches": [
                    {
                        "name": "OldAuthScorecard",
                        "value": "N"
                    },
                    {
                        "name": "NewAuthScorecard",
                        "value": "Y"
                    },
                    {
                        "name": "GranularDetails",
                        "value": "Y"
                    },
                    {
                        "name": "DisplayTelephone",
                        "value": "N"
                    },
                    {
                        "name": "MultipleCIFASURN",
                        "value": "N"
                    },
                    {
                        "name": "NewAgeVerificationScorecard",
                        "value": "N"
                    },
                    {
                        "name": "DisplayPEPSanctionSource",
                        "value": "N"
                    },
                    {
                        "name": "VelocityRules",
                        "value": "N"
                    }
                ],
                "dataCounts": [
                    {
                        "name": "IDandLocDataAtCL_NumPrimDataItems",
                        "value": 3
                    },
                    {
                        "name": "IDandLocDataAtCL_NumPrimDataSources",
                        "value": 3
                    },
                    {
                        "name": "IDandLocDataAtCL_StartDateOldestPrim",
                        "value": 201806
                    },
                    {
                        "name": "IDandLocDataAtCL_NumSecDataItems",
                        "value": 0
                    },
                    {
                        "name": "IDandLocDataAtCL_NumSecDataSources",
                        "value": 0
                    },
                    {
                        "name": "LocDataOnlyAtCLoc_NumPrimDataItems",
                        "value": 0
                    },
                    {
                        "name": "LocDataOnlyAtCLoc_NumPrimDataSources",
                        "value": 0
                    },
                    {
                        "name": "LocDataOnlyAtCLoc_NumSecDataItems",
                        "value": 0
                    },
                    {
                        "name": "LocDataOnlyAtCLoc_NumSecDataSources",
                        "value": 0
                    },
                    {
                        "name": "IDandLocDataAtPL_NumPrimDataItems",
                        "value": 0
                    },
                    {
                        "name": "IDandLocDataAtPL_NumPrimDataSources",
                        "value": 0
                    },
                    {
                        "name": "IDandLocDataAtPL_NumSecDataItems",
                        "value": 0
                    },
                    {
                        "name": "IDandLocDataAtPL_NumSecDataSources",
                        "value": 0
                    },
                    {
                        "name": "LocDataOnlyAtPLoc_NumPrimDataItems",
                        "value": 0
                    },
                    {
                        "name": "LocDataOnlyAtPLoc_NumPrimDataSources",
                        "value": 0
                    },
                    {
                        "name": "LocDataOnlyAtPLoc_NumSecDataItems",
                        "value": 0
                    },
                    {
                        "name": "LocDataOnlyAtPLoc_NumSecDataSources",
                        "value": 0
                    },
                    {
                        "name": "NumAgeMatchesToPrim",
                        "value": 3
                    },
                    {
                        "name": "NumAgeMatchToSec",
                        "value": 0
                    },
                    {
                        "name": "NumTimeAtCLMtchPrim",
                        "value": 0
                    },
                    {
                        "name": "NumTimeAtCLMatchSec",
                        "value": 0
                    },
                    {
                        "name": "HighRiskPolRuleCnt",
                        "value": 0
                    },
                    {
                        "name": "NumberPrimaryCategoryIACurrentAddress",
                        "value": 3
                    },
                    {
                        "name": "NumberSecondaryCategoryIACurrentAddress",
                        "value": 0
                    },
                    {
                        "name": "NumberPrimaryCategoryIAPreviousAddress",
                        "value": 0
                    },
                    {
                        "name": "NumberSecondaryCategoryIAPreviousAddress",
                        "value": 0
                    },
                    {
                        "name": "CIFASCount",
                        "value": 0
                    },
                    {
                        "name": "PEPSanctionCount",
                        "value": 0
                    },
                    {
                        "name": "VariableDataLength",
                        "value": 30
                    },
                    {
                        "name": "NameAndDOBPrimaryItemCountAll",
                        "value": 0
                    },
                    {
                        "name": "NameAndDOBPrimarySourceCountAll",
                        "value": 0
                    },
                    {
                        "name": "NameAndDOBSecondaryItemCountAll",
                        "value": 0
                    },
                    {
                        "name": "NameAndDOBSecondarySourceCountAll",
                        "value": 0
                    },
                    {
                        "name": "NumberOfPrimaryNameAndDOBText",
                        "value": 0
                    },
                    {
                        "name": "NumberOfSecondaryNameAndDOBText",
                        "value": 0
                    }
                ],
                "scores": [
                    {
                        "name": "NewAuthIndex",
                        "score": 45,
                        "type": "SCORE"
                    },
                    {
                        "name": "ValidationScore",
                        "score": 100,
                        "type": "SCORE"
                    },
                    {
                        "name": "VerificationScore",
                        "score": 969,
                        "type": "SCORE"
                    }
                ]
            }
        ]
    },
    "originalRequestData": {
        "application": {
            "applicants": [
                {
                    "applicantType": "APPLICANT",
                    "consent": true,
                    "contactId": "MAINCONTACT_1",
                    "id": "APPLICANT_1",
                    "type": "INDIVIDUAL"
                }
            ]
        },
        "contacts": [
            {
                "addresses": [
                    {
                        "addressIdentifier": "ADDRESS_1",
                        "addressType": "CURRENT",
                        "buildingNumber": "140",
                        "countryCode": "GBR",
                        "id": "MAINAPPADDRESS_1",
                        "indicator": "RESIDENTIAL",
                        "postal": "BT13 1JA"
                    }
                ],
                "id": "MAINCONTACT_1",
                "person": {
                    "names": [
                        {
                            "firstName": "Steven",
                            "id": "MAINPERSONNAME_1",
                            "surName": "hillerby",
                            "title": "Mr",
                            "type": "CURRENT"
                        }
                    ],
                    "personDetails": {
                        "dateOfBirth": "1990-07-19"
                    },
                    "typeOfPerson": "APPLICANT"
                }
            }
        ]
    }
};

    response.send(JSON.parse(JSON.stringify(jsonContent)));
    
});

//https://your-heroku-app-name.herokuapp.com/api-endpoint-parameter?tite=ABCDE
app.get('/Peps', function(request, response) {
    var titleRequest = request.query.title; // Change .title / .name or any text based on your parameter name
    
      var jsonContent = {
    "responseHeader": {
        "requestType": "PepSanctions01",
        "clientReferenceId": "PEPS_SANCTIONS1",
        "expRequestId": "RB000668920683",
        "messageTime": "2022-05-18T11:25:01Z",
        "overallResponse": {
            "decision": "CONTINUE",
            "decisionText": "Continue",
            "decisionReasons": [
                "No relevant Hunter matches present"
            ],
            "recommendedNextActions": [],
            "spareObjects": []
        },
        "responseCode": "R0201",
        "responseType": "INFO",
        "responseMessage": "Workflow Complete.",
        "tenantID": "X241B4TY"
    },
    "clientResponsePayload": {
        "orchestrationDecisions": [
            {
                "sequenceId": "1",
                "decisionSource": "Hunter",
                "decision": "NO",
                "decisionReasons": [
                    "No relevant Hunter matches present"
                ],
                "score": 0,
                "decisionText": "No relevant Matches",
                "nextAction": "Continue",
                "decisionTime": "2022-05-18T11:25:03Z"
            }
        ],
        "decisionElements": [
            {
                "serviceName": "Hunter",
                "score": 0,
                "appReference": "PEPS_SANCTIONS1",
                "warningsErrors": [
                    {
                        "responseType": "WARNING",
                        "responseCode": "104001",
                        "responseMessage": "One or more versions of the requested submission do not have a score."
                    }
                ],
                "otherData": {
                    "response": {
                        "matchSummary": {
                            "totalMatchScore": "0",
                            "matches": 0
                        },
                        "errorWarnings": {
                            "errors": {
                                "error": [],
                                "errorCount": 0
                            },
                            "warnings": {
                                "warning": [
                                    {
                                        "number": "104001",
                                        "message": "One or more versions of the requested submission do not have a score.",
                                        "values": {
                                            "value": []
                                        }
                                    }
                                ],
                                "warningCount": 1
                            }
                        }
                    }
                }
            }
        ]
    },
    "originalRequestData": {
        "application": {
            "applicantEntities": [
                {
                    "contactId": "PEP_ORG_1",
                    "entityType": "PEP_ORG"
                }
            ],
            "applicants": [
                {
                    "applicantType": "MAIN_APPLICANT",
                    "contactId": "MA_1",
                    "id": "MA_APPLICANT1",
                    "type": "INDIVIDUAL"
                }
            ],
            "originalRequestTime": "2022-05-18T11:25:01Z",
            "productDetails": {
                "productCode": "MS_CON"
            },
            "status": "ACCPT"
        },
        "contacts": [
            {
                "addresses": [
                    {
                        "addressType": "CURRENT",
                        "id": "MA_CADDRESS1",
                        "postal": "BT1 6HH"
                    }
                ],
                "id": "MA_1",
                "person": {
                    "names": [
                        {
                            "firstName": "DaY",
                            "id": "MA_NAME1",
                            "surName": "34017",
                            "title": "MR",
                            "type": "CURRENT"
                        }
                    ],
                    "personDetails": {
                        "dateOfBirth": "2000-01-01",
                        "pepsSanctionsFlag": "Y",
                        "yearOfBirth": "2000"
                    },
                    "personIdentifier": "",
                    "typeOfPerson": "APPLICANT"
                }
            }
        ],
        "source": ""
    };
}

    response.send(JSON.parse(JSON.stringify(jsonContent)));
    
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
