echo "Access to /usr/share/logstash"
cd /usr/share/logstash

echo "Running logstash config"
# bin/logstash -f logstash-simple.conf
bin/logstash -f logstash-jdbc.conf