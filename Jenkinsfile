pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''def mvnHome = tool name: \'Apache Maven 3.6.0\', type: \'maven\'
${mvnHome}/bin/mvn -B -DskipTests clean package'''
      }
    }

  }
}