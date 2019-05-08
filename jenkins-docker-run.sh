docker run --rm -u root --name jenkins -p 8081:8080 -v /Users/simonebonetti/pv/jenkins:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v "$HOME":/home jenkinsci/blueocean
