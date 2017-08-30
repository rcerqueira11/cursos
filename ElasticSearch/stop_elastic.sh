echo "Stoping elastic sevice"
sudo systemctl stop elasticsearch.service

sleep 3

echo "Checking it stop"
curl -XGET 'localhost:9200/?pretty'
