{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "loopback/server/mixins",
      "../common/mixins",
      "./mixins"
    ]
  },
  "Developer": {
    "dataSource": "psql",
    "public": true,
    "options": {
      "remoting": {
        "sharedMethods": {
          "*": false,                                  
          "create": true,                          
          "upsert": true,
          "findById": true,                        
          "find": true                            
        }
      }
    }
  },
  "DeveloperStatus": {
    "public": false,
    "dataSource": "psql"
  },
  "App": {
    "public": true,
    "dataSource": "psql",
    "options": {
      "remoting": {
        "sharedMethods": {
          "*": false,                                  
          "create": true
        }
      }
    }
  },
  "ApplicationStatus": {
    "public": false,
    "dataSource": "psql"    
  },
  "Owner": {
    "public": true,
    "dataSource": "psql",
    "options": {
      "remoting": {
        "sharedMethods": {
          "*": false,                                  
          "create": true,
          "findById": true,                        
          "find": true 
        }
      }
    }
  },
  "OwnerStatus": {
    "public": false,
    "dataSource": "psql"
  },
  "Wallet": {
    "public": false,
    "dataSource": "psql"
  },
  "PaymentMethod": {
    "public": true,
    "dataSource": "psql",
    "options": {
      "remoting": {
        "sharedMethods": {
          "*": false,                                  
          "create": true,
          "findById": true,                        
          "find": true 
        }
      }
    }
  },
  "PaymentMethodStatus": {
    "public": false,
    "dataSource": "psql"
    },
  "PaymentMethodType": {
    "public": false,
    "dataSource": "psql"
  },
  "Transaction": {
    "public": true,
    "dataSource": "psql",
    "options": {
      "remoting": {
        "sharedMethods": {
          "*": false,                                  
          "create": true,                          
          "upsert": true,                          
          "deleteById": true,                      
          "prototype.updateAttributes": true,      
          "findById": true,                        
          "find": true 
        }
      }
    }
  },
  "TransactionStatus": {
    "public": false,
    "dataSource": "psql"
  },
  "InstapagoAPI": {
    "public": false,
    "dataSource": "instapago"
  },
  "Payment": {
    "public": true,
    "dataSource": "mem"
  }
}
