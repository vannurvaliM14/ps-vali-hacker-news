pipeline {
    
    agent {
        dockerfile true
    }
    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
        }
        stage('build'){
            steps{
               docker.build("vannurvali/ps-hacker-news:${env.BUILD_ID}")
            }
        }
        stage('test'){
            steps{
                customImage.inside{
                    sh 'npm test'
                }
            }
        }
        stage('push'){
            steps{
                docker.push()
            }
        }
    }

    
}