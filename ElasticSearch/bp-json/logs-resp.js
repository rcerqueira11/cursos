component-config.json

{ 
    "loopback-component-explorer": { 
      "mountPath": "/explorer" 
    }, 
    "loopback-component-log": { 
      "enabled": true, 
      "name": "logger", 
      "http": true, 
      "level": "info", 
      "useStdOut": true, 
      "useLogFile": true, 
      "path": "./logs", 
      "maxResponseTime": 30000, 
      "excludes": ["body","user-agent"] 
    } 
  } 