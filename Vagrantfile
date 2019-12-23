Vagrant.configure("2") do |config|
 config.vm.box = "ubuntu/bionic64"

  config.vm.network "forwarded_port", guest: 4200, host: 4200 # run app locally
  config.vm.network "forwarded_port", guest: 9877, host: 9876 # test app locally

  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    # vb.gui = true
 
    # Customize the amount of memory on the VM:
    vb.memory = "2048"
  end

  config.vm.provision "shell", inline: <<-SHELL
    curl -sL https://deb.nodesource.com/setup_12.x | bash -
    apt-get install -y software-properties-common
    apt-add-repository -y ppa:ubuntu-elisp

    apt-get update

    apt-get install -y \
            build-essential \
            emacs-snapshot \
            git \
            htop \
            libcurl4-openssl-dev
            silversearcher-ag \
            tmux 

    apt-get install -y nodejs
    npm install npm --global

    npm install --unsafe-perm -g @angular/cli

    # install chrome
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
    echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list
    apt-get update
    apt-get install -y google-chrome-stable
  SHELL
end
