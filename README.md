# aws-scalable-app
Scalable AWS-based web application using EC2, S3, RDS, Lambda, IAM, Auto Scaling, EBS, and EFS.
# AWS Scalable App 🚀

## 📌 Overview
This project is a scalable cloud-based web application built using AWS services. It demonstrates real-world architecture by integrating compute, storage, database, and serverless components.

---

## ☁️ AWS Services Used

- EC2 – Backend server hosting
- S3 – File storage (images/uploads)
- RDS – Managed database (MySQL)
- Lambda – Background processing
- IAM – Access control & security
- Auto Scaling – High availability
- EBS – Instance storage
- EFS – Shared storage across instances

---

## ⚙️ Features

- REST API using Node.js
- File upload to S3
- Database integration with RDS
- Scalable infrastructure
- Secure access using IAM roles

---

## 🧱 Architecture

User → EC2 (Auto Scaling) → RDS  
Files → S3  
Shared Storage → EFS  
Background Tasks → Lambda  

---

## 🚀 How to Run

```bash
npm install
node server.js
