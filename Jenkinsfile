node {
    def dockerImage
    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
        }
        stage('build'){
            steps{
                customImage = docker.build("vannurvali/ps-hacker-news:${env.BUILD_ID}")
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
                customImage.push()
            }
        }
    }

    
}