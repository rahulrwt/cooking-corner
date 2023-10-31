#!/bin/bash
aws s3 cp s3://cooking-corner-codepipeline/credentials/awsCred.txt . 
echo "AWS keys downloaded"
ls
echo "PWD"
pwd
source awsCred.txt
export AWS_ACCESS_KEY_ID=$aws_access_key_id
export AWS_SECRET_ACCESS_KEY=$aws_secret_access_key
echo "AWS keys has been set successfully"
