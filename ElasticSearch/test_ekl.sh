echo "Test Elasticsearch"
curl -XGET 'localhost:9200/?pretty'

echo "Test Logstash"
curl -XGET 'localhost:9600/?pretty'

echo "Test Kibana"
 curl -XGET 'localhost:5601/?pretty'