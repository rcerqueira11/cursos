echo "Stoping elastic sevice"
sudo systemctl stop elasticsearch.service


echo "Checking it stop"
curl -XGET 'localhost:9200/?pretty'
