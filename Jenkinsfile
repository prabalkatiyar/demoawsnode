pipeline {
    agent any
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'chmod 777 deploy.sh'
                sh './deploy.sh -w demoaws -p /var/lib/jenkins/workspace/demoAwsPipeline2/target'                
            }
        }   
}
