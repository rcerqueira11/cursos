echo "Start kibana"
sudo systemctl start kibana.service

echo "Testing"
sleep 6s
curl -XGET 'localhost:5601/?pretty'