
echo "Borrando index"
curl -XDELETE 'localhost:9200/loc_ecosystem?pretty'
echo "\n"

sleep 1

echo "Show actual index"
curl 'localhost:9200/_cat/indices?v'
echo "\n"

echo "Recreating index"
curl -XPUT "http://localhost:9200/loc_ecosystem" -H 'Content-Type: application/json' -d'
{
  "settings": {
    "analysis": {
      "analyzer": {
        "std_english": { 
          "type": "standard",
          "stopwords_path": "stopwords/stop_words.txt"
        }
      }
    }
  },
  "mappings" : {
    "company":{
        "properties": {
            "description": { 
            "type":     "text",
            "fielddata": true,
            "analyzer": "std_english", 
            "fields": {
            "english": {
                "type":     "text",
                "analyzer": "std_english" 
                }
                }
            },
            "key_features": { 
            "type":     "text",
            "fielddata": true,
            "analyzer": "std_english", 
            "fields": {
            "english": {
                "type":     "text",
                "analyzer": "std_english" 
                }
                }
            },
            "geo_loc": {
                "type": "geo_point"
            },
            "geo_loca": {
                "type": "geo_point"
            }
        }
    }
  }  
}'

echo "\n"
echo "Show index created"
curl 'localhost:9200/_cat/indices?v'

echo "\n"
echo "Loading logstash config file"
sudo /usr/share/logstash/bin/logstash -f logstash-filter-loc.conf

echo "\n"
echo "Show index after logstash config"
curl 'localhost:9200/_cat/indices?v'