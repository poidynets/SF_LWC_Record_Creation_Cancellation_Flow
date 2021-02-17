import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LICENSE_ORDER_OBJECT from '@salesforce/schema/License_Order__c';
import APPLICATION_NAME_FIELD from '@salesforce/schema/License_Order__c.Application_Name__c';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/License_Order__c.Account_Name__c';
import CONTACT_NAME_FIELD from '@salesforce/schema/License_Order__c.Contact_Name__c';
import NOTES_FIELD from '@salesforce/schema/License_Order__c.Notes__c';

export default class CreateRequestRecord extends LightningElement {
        licenseOrderId;
        showFields = true;
        licenseOrderObject = LICENSE_ORDER_OBJECT;
        applicationNameField = APPLICATION_NAME_FIELD;
        accountNameField = ACCOUNT_NAME_FIELD;
        contactNameField = CONTACT_NAME_FIELD;
        notesField = NOTES_FIELD;

    handleApplictionNameChange(event) {
        this.licenseOrderId = undefined;
        this.applicationNameField = event.target.value;
    }
    handleAccountNameChange(event) {
        this.licenseOrderId = undefined;
        this.accountNameField = event.target.value;
    }
    handleContactNameChange(event) {
        this.licenseOrderId = undefined;
        this.contactNameField = event.target.value;
    }
    handleNotesChange(event) {
        this.licenseOrderId = undefined;
        this.notesField = event.target.value;
    }

    toggleFields() {
        this.showFields = !this.showFields;
      }

    createRequestRecord() {    
        const fields ={};        
        fields[APPLICATION_NAME_FIELD.fieldApiName]= this.applicationNameField;
        fields[ACCOUNT_NAME_FIELD.fieldApiName]= this.accountNameField;
        fields[CONTACT_NAME_FIELD.fieldApiName]= this.contactNameField;
        fields[NOTES_FIELD.fieldApiName]= this.notesField;        
        const recordInput = { apiName: LICENSE_ORDER_OBJECT.objectApiName, fields };
        
        createRecord(recordInput)
            .then(licenseOrder => {
                this.licenseOrderId = licenseOrder.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'License Order created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
            this.toggleFields();
    }
}
