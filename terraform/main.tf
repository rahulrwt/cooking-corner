terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  backend "s3" {
      encrypt                 = true 
      dynamodb_table          = "terraform-state-lock-dynamo"
      bucket                  = "cooking-corner-terraform-s3"
      key                     = "terraform.tfstate"
      region                  = "ap-south-1"
      shared_credentials_file = "~/.aws/credentials"
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "ap-south-1"
}


resource "aws_instance" "cookingcorner_ec2" {
  ami           = "ami-0287a05f0ef0e9d9a"
  instance_type = "t2.micro"
  vpc_security_group_ids = [aws_security_group.cooking-corner-sg.id]
  key_name = "cooking-corner-key-pair"  // This file is created and already stored in S3 bucket

  user_data = <<-EOF
              #!/bin/bash
              echo "This script is running from Terraform" >> /tmp/user_data_output.txt 2>&1
              curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash - >> /tmp/user_data_output.txt 2>&1
              sudo apt install nodejs >> /tmp/user_data_output.txt 2>&1
              cd ~
              git clone https://github.com/rahulrwt/cooking-corner.git >> /tmp/user_data_output.txt 2>&1
              ls
              git clone https://github.com/rahulrwt/cooking-corner.git >> /tmp/user_data_output.txt 2>&1
              echo "This is after clone" >> /tmp/user_data_output.txt 2>&1
              ls
              EOF
  tags = {
    Name = "CookingCorner"
  }
}


resource "aws_security_group" "cooking-corner-sg" {
  name = "cooking-corner security group"
  description = "Allow HTTP,HTTPS and SSH traffic via Terraform"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
