import { LightningElement } from 'lwc';
import LICENSE_ORDER_OBJECT from '@salesforce/schema/License_Order__c';
import APPLICATION_NAME_FIELD from '@salesforce/schema/License_Order__c.Application_Name__c';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/License_Order__c.Account_Name__c';
import CONTACT_NAME_FIELD from '@salesforce/schema/License_Order__c.Contact_Name__c';
import NOTES_FIELD from '@salesforce/schema/License_Order__c.Notes__c';

export default class CreateRequestRecord extends LightningElement {
    licenseOrderObject = LICENSE_ORDER_OBJECT;
    applicationNameField = APPLICATION_NAME_FIELD;
    accountNameField = ACCOUNT_NAME_FIELD;
    contactNameField = CONTACT_NAME_FIELD;
    notesField = NOTES_FIELD;

    handleAccountCreated(){
        // Run code when account is created.
    }
}