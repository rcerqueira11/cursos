echo "Test Elasticsearch"
curl -XGET 'localhost:9200/?pretty'

sleep 0.5
echo "\n"
echo "Test Logstash"
curl -XGET 'localhost:9600/?pretty'

sleep 0.5
echo "\n"
echo "Test Kibana"
 curl -XGET 'localhost:5601/?pretty'
echo "\n"