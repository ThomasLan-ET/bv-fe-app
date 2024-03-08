pipeline {
  environment {
    imagename = "helloworld"
    registryCredential = 'key-repo-helloworld-fe'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/ThomasLan-ET/bv-fe-app.git', branch: 'dev', credentialsId: 'key-repo-helloworld-fe'])
 
      }
    }
    stage('Building image') {
      steps{
        script {
           sh ''
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
             dockerImage.push('latest')
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $imagename:$BUILD_NUMBER"
         sh "docker rmi $imagename:latest"
      }
    }
  }
}
