### **📌 HNG Stage 0 Backend - Public API**
A simple public API built using **Node.js, TypeScript, Express, and Prisma (SQLite)** that returns basic user information.

---

## **🚀 Features**
- Returns registered email address
- Provides the current timestamp in ISO 8601 format
- Returns the GitHub repository URL
- Uses **SQLite** via **Prisma ORM**
- Deployed to a publicly accessible endpoint

---

## **💂️ Project Structure**
```
💾 project-root
👉📂 src
│   👉📂 controllers
│   │   👉 user.controller.ts
│   👉📂 routes
│   │   👉 user.route.ts
│   👉📂 services
│   │   👉 user.service.ts
│   👉📂 prisma
│   │   👉 schema.prisma
│   │   👉 seed.ts
│   👉📂 config
│   │   👉 database.ts
│   👉 server.ts
👉📂 prisma
│   👉 migrations/
│   👉 dev.db (SQLite Database)
👉 .env
👉 package.json
👉 tsconfig.json
👉 README.md
```

---

## **🛠 Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file in the project root:
```
DATABASE_URL="file:./dev.db"
```

### **4️⃣ Initialize Database**
```bash
npx prisma migrate dev --name init
```

### **5️⃣ Seed the Database**
```bash
npx ts-node prisma/seed.ts
```

### **6️⃣ Start the Server**
```bash
npm run dev
```
The server will start on **http://localhost:3000** 🚀

---

## **📁 API Documentation**
### **📍 Deployed URL:** ``
### **📍 Endpoint:** `GET /user`
#### **✅ Response (200 OK)**
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

---

## **🖥 Deployment**
- **Host:** Deployed to a publicly accessible endpoint
- **Database:** SQLite (file-based)

---

## **🔗 Resources**
- [Prisma Docs](https://www.prisma.io/docs/)
- [Express.js Docs](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [HNG Internship](https://hng.tech/hire/nodejs-developers)

🚀 Happy Coding! 🎯

