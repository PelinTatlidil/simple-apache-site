# Create a VM

# Open firewall for ports 80/443  

az vm create \
  --resource-group myResourceGroup \
  --name myVM \
  --image UbuntuLTS \
  --admin-username azureuser \
  --generate-ssh-keys


# Open firewall for ports 80/443  
az vm open-port \
  --resource-group myResourceGroup \
  --name myVM \
  --port 80

az vm open-port \
  --resource-group myResourceGroup \
  --name myVM \
  --port 443

