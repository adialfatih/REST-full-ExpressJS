const db = require('../config/db');

const getPrimaryKey = async (table) => {
  const [rows] = await db.query(`SHOW KEYS FROM \`${table}\` WHERE Key_name = 'PRIMARY'`);
  return rows.length > 0 ? rows[0].Column_name : null;
};


exports.getAll = async (table, search, date, page, limit) => {
    const offset = (page - 1) * limit;
    let baseQuery = `FROM \`${table}\` WHERE 1`;
    const params = [];

    if (search) {
        baseQuery += ` AND (nama LIKE ? OR keterangan LIKE ?)`;
        params.push(`%${search}%`, `%${search}%`);
    }

    if (date) {
        baseQuery += ` AND DATE(created_at) = ?`;
        params.push(date);
    }

    const pk = await getPrimaryKey(table);
    const order = pk ? ` ORDER BY \`${pk}\` DESC` : '';

    const dataQuery = `SELECT * ${baseQuery}${order} LIMIT ? OFFSET ?`;
    const countQuery = `SELECT COUNT(*) as total ${baseQuery}`;

    const [dataRows] = await db.query(dataQuery, [...params, Number(limit), Number(offset)]);
    const [countRows] = await db.query(countQuery, params);

    return {
        data: dataRows,
        pagination: {
        total: countRows[0].total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(countRows[0].total / limit)
        }
    };
};

exports.getById = async (table, id) => {
    const pk = await getPrimaryKey(table);
    if (!pk) throw new Error('Primary key not found for table: ' + table);

    const [rows] = await db.query(`SELECT * FROM \`${table}\` WHERE \`${pk}\` = ?`, [id]);
    return rows[0];
    //const [rows] = await db.query(`SELECT * FROM \`${table}\` WHERE id = ?`, [id]);
    //return rows[0];
};

exports.create = async (table, data) => {
  const [result] = await db.query(`INSERT INTO \`${table}\` SET ?`, [data]);
  return { insertedId: result.insertId };
};

exports.update = async (table, id, data) => {
    const pk = await getPrimaryKey(table);
    if (!pk) throw new Error('Primary key not found');

    const [result] = await db.query(`UPDATE \`${table}\` SET ? WHERE \`${pk}\` = ?`, [data, id]);
    return { affectedRows: result.affectedRows };
    //const [result] = await db.query(`UPDATE \`${table}\` SET ? WHERE id = ?`, [data, id]);
    //return { affectedRows: result.affectedRows };
};

exports.remove = async (table, id) => {
    const pk = await getPrimaryKey(table);
    if (!pk) throw new Error('Primary key not found');

    const [result] = await db.query(`DELETE FROM \`${table}\` WHERE \`${pk}\` = ?`, [id]);
    return { affectedRows: result.affectedRows };
    //const [result] = await db.query(`DELETE FROM \`${table}\` WHERE id = ?`, [id]);
    //return { affectedRows: result.affectedRows };
};
