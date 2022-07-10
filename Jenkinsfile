pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''cd ./backend
docker compose up --force-recreate --build -d'''
      }
    }

  }
}