pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        git 'https://github.com/niklasdiehm/whatamiwatching.git'
        sh './mvnw clean compile'
      }
    }

    stage('Test') {
      post {
        always {
          junit '**/target/surefire-reports/TEST-*.xml'
        }

      }
      steps {
        sh './mvnw test'
      }
    }

  }
}