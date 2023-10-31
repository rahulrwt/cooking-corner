terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  backend "s3" {
      bucket                  = "cooking-corner-terraform-s3"
      key                     = "cooking-corner-state"
      region                  = "ap-south-1"
      shared_credentials_file = "~/.aws/credentials"
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "ap-south-1"
}

resource "aws_key_pair" "cooking-corner-key-pair" {
  key_name = "cooking-corner-key-pair"
  public_key = tls_private_key.rsa.public_key_openssh
}

resource "tls_private_key" "rsa" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "local_file" "cooking-corner-key-pair" {
  content  = tls_private_key.rsa.private_key_pem
  filename = "cooking-corner-key-pair"
}

resource "aws_instance" "cookingcorner_ec2" {
  ami           = "ami-0287a05f0ef0e9d9a"
  instance_type = "t2.micro"
  vpc_security_group_ids = [aws_security_group.cooking-corner-sg.id]
  key_name = "cooking-corner-key-pair"
  user_data = <<-EOF
              #!/bin/bash
              echo "This script is running from terraform" > /tmp/user_data_output.txt
              curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
              sudo apt install nodejs
              cd ~
              git clone https://github.com/rahulrwt/cooking-corner.git
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
