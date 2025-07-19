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
cd REST-full-ExpressJS
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

Response:
```bash
{
  "data": [ ... ],
  "pagination": {
    "total": 12000,
    "page": 1,
    "limit": 20,
    "totalPages": 600
  }
}
```

### 📄 Get One by ID
```bash
GET /api/:table/:id
```
Automatically detects the correct primary key for the specified table.

### ➕ Create New Record
```bash
POST /api/:table
Content-Type: application/json
```
Example Body:
```bash
{
  "nama": "Es Teh Manis",
  "harga": 5000
}
```

### ✏️ Update Record
```bash
PUT /api/:table/:id
Content-Type: application/json
```
Example Body:
```bash
{
  "harga": 6000
}
```

### ❌ Delete Record
```bash
DELETE /api/:table/:id
```


## 🔐 Security Notes
- API is protected by an API Key middleware.
- CORS origins are restricted to only those listed in .env (ALLOWED_ORIGINS).
- Uses helmet and compression for HTTP safety & performance.
- Input data is not yet sanitized; use with trusted clients or enhance with validation libraries.

## 🔧 Project Structure
```bash
.
├── config/              # DB connection pool
├── controllers/         # Controller logic
├── middleware/          # API key, CORS, etc.
├── routes/              # Route definitions
├── services/            # Database service layer
├── app.js               # Main application entry
├── .env                 # Environment variables
└── package.json
```

## 🧪 Future Enhancements
- Swagger/OpenAPI documentation
- Role-based access control (RBAC)
- Data validation (Joi/Yup)
- Rate limiting & brute-force protection
- Caching layer (Redis)

🤝 Contributing
Feel free to fork this repo and submit pull requests. Suggestions and feedback are highly appreciated!

📄 License
MIT License
