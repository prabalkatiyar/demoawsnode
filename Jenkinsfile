pipeline {
    agent any
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'chmod 777 deployNode.sh'
                sh './deployeeNode.sh -w demoAwsNode -p /home/ec2-user/homeFolder'                
            }
        }   
}
