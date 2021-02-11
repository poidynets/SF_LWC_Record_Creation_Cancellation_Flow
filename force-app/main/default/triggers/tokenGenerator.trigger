trigger tokenGenerator on Licence__c(before insert) {
    List<Licence__c> object1 = new List<Licence__c>();
    object1 = [SELECT Id, MAC_address__c  FROM Licence__c];

    Set<String> usedTokens = new Set<String>();
    for (Licence__c x : object1) {
        usedTokens.add(x.MAC_address__c );
    }

    for (Licence__c x : Trigger.NEW) {
        String tokenToCheck = token.createToken();

        while (usedTokens.contains(tokenToCheck)) {
            tokenToCheck = token.createToken();
        }
        x.MAC_address__c  = 'WSO2'+tokenToCheck;
        usedTokens.add(x.MAC_address__c ); 
    }
}