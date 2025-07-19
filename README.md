# ⚡ RESTful API Skeleton with ExpressJS + MySQL (High Performance)

This project is a generic, scalable, and high-performance REST API boilerplate built with **ExpressJS** and **MySQL**.  
It is optimized to handle **millions of records** with efficient querying, dynamic table routing, API Key protection, and CORS origin control.

---

## 📦 Features

- ✅ Dynamic CRUD for any table
- ✅ Search, filter by date, and pagination
- ✅ Auto-detect primary key for each table
- ✅ API Key-based authentication
- ✅ CORS support with origin whitelist
- ✅ Query optimization using `LIMIT`, `OFFSET`, and connection pooling
- ✅ Modular code structure (controller-service-model)
- ✅ Ready for frontend & mobile consumption

---

## 🛠 Tech Stack

- Node.js + Express
- MySQL2 (async/await ready)
- dotenv for environment configs
- Helmet, Compression, Morgan
- CORS custom middleware
- REST API best practices

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/adialfatih/REST-full-ExpressJS.git
cd yourrepo
```

### 2.  Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
```bash
PORT=3000
API_KEY=your_secret_api_key
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=your_database
ALLOWED_ORIGINS=http://localhost:3000,http://yourfrontend.com
```

### 4 RUN the Server
```bash
npm start
```

## 📘 API Usage
### 🔐 Authentication
All requests must include the API key in the header:

```bash
x-api-key: your_secret_api_key
```

### 🔄 Endpoints
All endpoints are dynamic, based on the table name provided in the URL.
🧾 Get All Records
```bash
GET /api/:table
```
query parameters

| PARAM          | DESKRIPTION                |
|----------------|----------------------------|
| search   | (optional) keyword to search            |
| searchFields        | (optional) comma-separated fields                    |
| date       | 	(optional) filter by created_at                      |
| page        | (optional) page number (default 1)     |
| limit         | (optional) records per page (default 20)                 |
