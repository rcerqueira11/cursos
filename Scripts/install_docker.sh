sudo apt-get -y remove docker docker-engine docker.io

sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates wget software-properties-common

wget https://download.docker.com/linux/debian/gpg 
sudo apt-key add gpg

echo "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee -a /etc/apt/sources.list.d/docker.list

sudo apt-get update

sudo apt-cache policy docker-ce

sudo apt-get -y install docker-ce

sudo systemctl enable docker

sudo usermod -aG docker rcerqueira