#!/bin/bash

Date1=`date +%Y%m-%b`
Date2=`date +%Y%m%d-%T`
parent_directory="/nfs-vol1/deployement/node"
#path="/var/lib/jenkins/workspace/demoAwsPipelineNode"
#warfile="demoAwsNode"
deploymentpath="/var/www/html"
while getopts p:w: flag
do
        case "${flag}" in
                p) path=${OPTARG};;
                w) projectName=${OPTARG};;
        esac
done

if [ -d $path -a -d $path/$projectName ]
then

#mkdir -p "$parent_directory"/"$Date1"/"$Date2"/{backup,deployee}
sudo mkdir -p $parent_directory/$projectName/$Date1/$Date2/backup/$projectName
sudo mkdir -p $parent_directory/$projectName/$Date1/$Date2/deployee/$projectName

sudo cp -r $deploymentpath/$projectName/* $parent_directory/$projectName/$Date1/$Date2/backup/$projectName
sleep 5

sudo cp -r $path/* $parent_directory/$projectName/$Date1/$Date2/deployee/$projectName
sleep 5

sudo rm -rf $deploymentpath/$projectName
sleep 5

sudo cp -r $parent_directory/$projectName/$Date1/$Date2/deployee/$projectName $deploymentpath
sleep 5

else
        echo "Directory or file does not exist"
fi
