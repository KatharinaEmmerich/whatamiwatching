pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker compose up --force-recreate --build -d'
      }
    }

  }
}