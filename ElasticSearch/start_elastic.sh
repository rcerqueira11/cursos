echo "Starting elastich service"
sudo -i service elasticsearch start

echo "Checking Service"
sleep 6

curl -XGET 'localhost:9200/?pretty'
