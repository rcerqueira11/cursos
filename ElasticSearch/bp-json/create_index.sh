curl -XPUT "http://localhost:9200/api-logs-" -H 'Content-Type: application/json' -d'
{
  "mappings" : {
    "api-log":{
      "properties": {
        "method": {
            "type": "keyword"
        },
        "clientip": {
            "type": "keyword"
        },
        "response": {
            "type": "keyword"
        },
        "request": {
            "type": "keyword"
        },
        "hostname": {
            "type": "keyword"
        },
        "httpversion": {
            "type": "keyword"
        },
        "responsetime": {
            "type": "keyword"
        }
      }
    }
  }  
}'