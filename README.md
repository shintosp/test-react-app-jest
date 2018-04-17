# rumble-react
A react client for the rumble server

## Deployment on PythonAnywhere
###First Time Prerequisites
Run the following commands in a [PythonAnywhere console](
https://www.pythonanywhere.com/user/saarsayfan/consoles):
```
pip install --user sh
git clone https://github.com/Bloblblobl/rumble-react.git
```

Install Node locally:
```
git clone https://github.com/creationix/nvm.git
source ~/nvm/nvm.sh
nvm install v9.6.1
nvm alias default v9.6.1
cd rumble-react
npm install
```

### General Deployment
Simply run `rumble-react/pythonanywhere_deploy.py`
`