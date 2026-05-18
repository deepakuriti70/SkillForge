# Project Workflow

## Step 1: Open GitHub Repository

GitHub repository was used for source code management and version control.

Repository Link:

```bash
https://github.com/deepakuriti70/SkillForge
```

---

## Step 2: Open Docker Desktop

Docker Desktop was used to manage Docker images and containers for application deployment.

---

## Step 3: Open AWS Cloud

AWS EC2 service was used to host and deploy the SkillForge application.

---

## Step 4: Start EC2 Instance

Go to:

```bash
AWS Console → EC2 → Instances
```

Select the SkillForge instance and click:

```bash
Instance State → Start Instance
```

Wait until instance state becomes:

```bash
Running
```

---

## Step 5: Open PowerShell

Windows PowerShell was used to connect with AWS EC2 instance using SSH.

---

## Step 6: Connect to EC2 Instance

Run the following command in PowerShell:

```powershell
ssh -i D:\skillforge-key.pem ubuntu@13.206.219.166
```

---

## Step 7: Check Docker Containers

```bash
sudo docker ps -a
```

---

## Step 8: Start Docker Container

```bash
sudo docker start 9988f0b7f3f4
```

---

## Step 9: Verify Running Container

```bash
sudo docker ps
```

---

## Step 10: Remove Old Container

```bash
sudo docker rm -f 9988f0b7f3f4
```

---

## Step 11: Navigate to Project Folder

```bash
cd ~/SkillForge
```

---

## Step 12: Run Docker Container

```bash
sudo docker run -d \
--restart always \
--name skillforge-app \
-p 3000:3000 \
skillforge
```

---

## Step 13: Check Running Containers

```bash
sudo docker ps
```

---

## Step 14: Open Website in Browser

Open the following link in browser:

```bash
http://13.206.219.166
```
