pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'chmod 777 deployeeNode.sh'
                sh './deployeeNode.sh -w demoAwsNode -p /home/ec2-user/homeFolder'
            }
        }
    } 
}
