require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Kaushal$#@#123',
    database: 'shantag_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Initialize Database
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Database connected successfully');

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            category VARCHAR(100),
            model_no VARCHAR(50),
            image_url VARCHAR(255),
            description TEXT,
            specs JSON
        )
    `;

    connection.query(createTableQuery, (err) => {
        if (err) console.error('Error creating table:', err);
        else {
            console.log('Products table verified');
            seedDatabase(connection);
        }
    });

    connection.release();
});

function seedDatabase(connection) {
    const checkEmptyQuery = 'SELECT COUNT(*) as count FROM products';
    connection.query(checkEmptyQuery, (err, results) => {
        if (err) return;

        if (results[0].count === 0) {
            console.log('Seeding database...');
            const products = [
                [
                    "Fully Automatic Khakra Maker",
                    "Food Processing",
                    "SM-KM-100",
                    "images/khakra-real.png",
                    "High-speed automatic khakra making machine with uniform pressing and roasting technology. Designed for continuous industrial production.",
                    JSON.stringify({
                        "Capacity": "1000 pcs/hr",
                        "Power": "5 HP (3 Phase)",
                        "Material": "SS 304 Food Grade",
                        "Weight": "850 kg"
                    })
                ],
                [
                    "Heavy Duty Dough Kneader",
                    "Preparation",
                    "SM-DK-50",
                    "images/kneader-real.png",
                    "Industrial spiral dough kneader ensuring perfect gluten development. Ideal for stiff doughs used in Khakra and Chapati production.",
                    JSON.stringify({
                        "Bowl Capacity": "50 kg",
                        "Motor": "3 HP Crompton",
                        "Mixing Speed": "40/80 RPM",
                        "Dimensions": "4x3x4 ft"
                    })
                ],
                [
                    "Rotary Roasting Machine",
                    "Roasting",
                    "SM-R-200",
                    "images/roaster-real.png",
                    "Continuous rotary roaster for peanuts, gram, and other grains. Features uniform heat distribution and variable speed control.",
                    JSON.stringify({
                        "Throughput": "200 kg/hr",
                        "Heating": "LPG / Electric",
                        "Drum Material": "SS 316",
                        "Warranty": "2 Years"
                    })
                ]
            ];

            const insertQuery = 'INSERT INTO products (name, category, model_no, image_url, description, specs) VALUES ?';
            connection.query(insertQuery, [products], (err) => {
                if (err) console.error('Seeding failed:', err);
                else console.log('Database seeded with 3 industrial products');
            });
        }
    });
}

// Endpoint: Get All Products
app.get('/api/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        res.json(results);
    });
});

// Endpoint: Get Single Product by ID
app.get('/api/products/:id', (req, res) => {
    const sql = 'SELECT * FROM products WHERE id = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(results[0]);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});