#!/bin/bash

# Install Node and MongoDB
sudo apt-get update
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update

sudo apt-get install -y mongodb-org

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh > install_nvm.sh

less install_nvm.sh

bash install_nvm.sh

echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Isso carrega o NVM' >> ~/.bashrc
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Isso ativa o autocompletar do NVM' >> ~/.bashrc

source ~/.bashrc

. ~/.nvm/nvm.sh
nvm install node

# Start MongoDB service
sudo systemctl start mongod

# Enable MongoDB service to start on boot
sudo systemctl enable mongod

# Start Node

cd /vagrant

npm install -g @nestjs/cli

npm ci

sudo -u vagrant -i <<'EOF'
bash install_nvm.sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
sudo -u vagrant bash -c 'echo '\''export NVM_DIR="$HOME/.nvm"'\'' >> ~/.bash_profile'
sudo -u vagrant bash -c 'echo '\''[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"'\'' >> ~/.bash_profile'
sudo -u vagrant bash -c 'echo '\''[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"'\'' >> ~/.bash_profile'


sudo -u vagrant bash -c 'source ~/.bash_profile'

sudo -u vagrant bash -c '. ~/.nvm/nvm.sh && nvm install node'

EOF