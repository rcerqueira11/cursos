echo "Start kibana"
sudo systemctl stop kibana.service

echo "Testing"
curl -XGET 'localhost:5601/?pretty'
