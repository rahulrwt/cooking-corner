#!/bin/bash

# Check if IP argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <public_ip>"
    exit 1
fi

PUBLIC_IP=$1
PORT=3000

# Wait for 4 minutes
echo "Waiting for 5 minutes..."
sleep 300

# Make a request to the specified IP address and port
echo "Connecting to $PUBLIC_IP on port $PORT..."
response=$(curl -s -o /dev/null -w "%{http_code}" http://$PUBLIC_IP:$PORT)

if [ $response -eq 200 ]; then
    echo "Request successful! Response code: $response"
else
    echo "Request failed with response code: $response"
fi
