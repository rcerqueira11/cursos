
# curl -XDELETE "http://localhost:9200/loga-*"

sudo rm output.json
sudo cp logstash-logs.conf /usr/share/logstash
cd /usr/share/logstash
sudo bin/logstash -f logstash-logs.conf 
