pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh './mvnw -Dmaven.test.failure.ignore=true install'
      }
    }

  }
}