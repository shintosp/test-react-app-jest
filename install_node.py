import sh

def main():
    sh.git('clone https://github.com/creationix/nvm.git')
    sh.source('~/nvm/nvm.sh')
    sh.nvm('install v9.6.1')
    sh.nvm('alias default v9.6.1')
    sh.cd('rumble-react')
    sh.npm('install')

if __name__ == '__main__':
    main()
