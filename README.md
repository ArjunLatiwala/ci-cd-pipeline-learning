# 🚀 Enterprise CI/CD Pipeline Demo

A production-style **CI/CD pipeline project** built using Node.js, Jest, ESLint, and GitHub Actions.
This project demonstrates how modern DevOps pipelines enforce **code quality, security, testing, build, and deployment workflows**.

---

## 📌 Project Overview

This repository showcases a complete CI/CD pipeline with:

* ✅ Linting (code quality checks)
* 🔒 Security auditing (`npm audit`)
* 🧪 Unit testing (Jest)
* 🏗️ Build process
* 📦 Artifact management
* 🚀 Staging & Production deployment simulation

---

## 🗂️ Project Structure

```
.
├── math.js                 # Core application logic
├── math.test.js            # Unit tests
├── package.json            # Project configuration
├── dist/                   # Build output (generated)
└── .github/workflows/
    └── pipeline.yml        # CI/CD pipeline
```

---

## ⚙️ Tech Stack

* **Node.js**
* **Jest** → Testing framework
* **ESLint** → Code quality
* **GitHub Actions** → CI/CD automation

---

## 🧪 Application Logic

### `math.js`

Simple utility function:

```js
function add(a, b) {
  return a + b;
}
```

### `math.test.js`

Unit test using Jest:

```js
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
```

---

## 🔁 CI/CD Pipeline Breakdown

### 🧩 1. Security & Lint Job

* Installs dependencies
* Runs:

  * `npm audit` → checks vulnerabilities
  * `npm run lint` → code quality check

---

### 🧪 2. Unit Tests (Matrix Strategy)

Runs tests on multiple Node versions:

* Node 18
* Node 20
* Node 22

```yaml
strategy:
  matrix:
    node: [18, 20, 22]
```

---

### 🏗️ 3. Build Stage

* Copies source into `dist/`
* Prepares production-ready artifact

```bash
mkdir -p dist && cp math.js dist/app.js
```

---

### 📦 4. Artifact Upload

Stores build output:

* Artifact name: `production-ready-app`
* Used in deployment stages

---

### 🚀 5. Staging Deployment

Simulated deployment step:

```
Deploying to STAGING Environment...
```

---

### 🌍 6. Production Deployment

Runs only on `main` branch:

* Downloads artifact
* Uses secrets (`PROD_API_KEY`)
* Simulates:

  * Server connection
  * Database migration
  * Live deployment

---

### 📣 7. Notification

Simulates team notification:

```
Deployment Successful! ✅
```

---

## ▶️ Available Scripts

```json
"scripts": {
  "test": "jest",
  "lint": "eslint .",
  "build": "mkdir -p dist && cp math.js dist/app.js"
}
```

---

## 🧪 Run Locally

### Install dependencies

```bash
npm install
```

### Run lint

```bash
npm run lint
```

### Run tests

```bash
npm test
```

### Build project

```bash
npm run build
```

---

## 🔐 Security

* Uses `npm audit` to detect vulnerabilities
* Pipeline fails if high-severity issues are found

---

## 🧠 Key DevOps Concepts Demonstrated

* CI/CD pipeline design
* Multi-stage workflows
* Parallel testing (matrix builds)
* Artifact storage & reuse
* Environment-based deployments
* Secure secret handling

---

## 🚀 Future Improvements

* Add test coverage reporting
* Integrate SonarQube for code analysis
* Add Docker build stage
* Deploy to real cloud (AWS/GCP/Azure)
* Add Slack/Email notifications

---

## 📌 Conclusion

This project demonstrates a **real-world CI/CD pipeline structure** used in modern DevOps environments.
It ensures that every code change is:

✔ Secure
✔ Tested
✔ Verified
✔ Ready for deployment

---

## 👤 Author

Built as part of a DevOps learning journey 🚀

---
