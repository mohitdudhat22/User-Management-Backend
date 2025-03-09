const { User, Role } = require("../models");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const ExcelJS = require('exceljs');
const PDFDocument = require('pdfkit-table');
const path = require('path');
const fs = require('fs');
const e = require("express");

// Helper function to get user data with roles
const getUsersWithRoles = async () => {
  return await User.findAll({
    include: [{
      model: Role,
      as: 'roles',
      through: { attributes: [] }
    }],
    attributes: { exclude: ['password'] }
  });
};

exports.exportUsersCsv = async (req, res) => {
  try {
    const users = await getUsersWithRoles();
    const outputPath = path.join(__dirname, '../exports', 'users.csv');

    const csvWriter = createCsvWriter({
      path: outputPath,
      header: [
        { id: 'id', title: 'ID' },
        { id: 'firstname', title: 'First Name' },
        { id: 'lastname', title: 'Last Name' },
        { id: 'email', title: 'Email' },
        { id: 'contact', title: 'Contact' },
        { id: 'postcode', title: 'Postcode' },
        { id: 'gender', title: 'Gender' },
        { id: 'hobbies', title: 'Hobbies' },
        { id: 'roles', title: 'Roles' }
      ]
    });

    const records = users.map(user => ({
      ...user.toJSON(),
      hobbies: Array.isArray(user.hobbies) ? user.hobbies.join(', ') : user.hobbies,
      roles: user.roles.map(role => role.name).join(', ')
    }));

    await csvWriter.writeRecords(records);
    res.download(outputPath, 'users.csv', (err) => {
      if (err) throw err;
      fs.unlinkSync(outputPath); // Clean up after sending
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.exportUsersExcel = async (req, res) => {
  try {
    const users = await getUsersWithRoles();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Users');

    // Define columns
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'First Name', key: 'firstname', width: 15 },
      { header: 'Last Name', key: 'lastname', width: 15 },
      { header: 'Email', key: 'email', width: 25 },
      { header: 'Contact', key: 'contact', width: 15 },
      { header: 'Postcode', key: 'postcode', width: 12 },
      { header: 'Gender', key: 'gender', width: 10 },
      { header: 'Hobbies', key: 'hobbies', width: 30 },
      { header: 'Roles', key: 'roles', width: 20 }
    ];

    // Style the header row
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFE0E0E0' }
    };

    // Add data
    users.forEach(user => {
      worksheet.addRow({
        ...user.toJSON(),
        hobbies: Array.isArray(user.hobbies) ? user.hobbies.join(', ') : user.hobbies,
        roles: user.roles.map(role => role.name).join(', ')
      });
    });

    // Auto filter
    worksheet.autoFilter = {
      from: 'A1',
      to: 'I1'
    };

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=users.xlsx');

    // Stream the file instead of writing it to disk
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.exportUsersPdf = async (req, res) => {
  try {
    const users = await getUsersWithRoles();
    const doc = new PDFDocument({ margin: 30, size: 'A4', layout: 'landscape' });
    const outputPath = path.join(__dirname, '../exports', 'users.pdf');
    const writeStream = fs.createWriteStream(outputPath);

    doc.pipe(writeStream);

    // Add title
    doc.fontSize(20).text('Users Report', { align: 'center' }).moveDown();

    // Prepare table data
    const tableData = {
      headers: ['ID', 'Name', 'Email', 'Contact', 'Postcode', 'Gender', 'Roles'],
      rows: users.map(user => [
        user.id,
        `${user.firstname} ${user.lastname}`,
        user.email,
        user.contact,
        user.postcode,
        user.gender,
        user.roles.map(role => role.name).join(', ')
      ])
    };

    // Add table
    await doc.table(tableData, {
      prepareHeader: () => doc.fontSize(10).font('Helvetica-Bold'),
      prepareRow: () => doc.fontSize(10).font('Helvetica')
    });

    doc.end(); // Finalize PDF

    // Ensure the file is fully written before sending
    writeStream.on('finish', () => {
      res.download(outputPath, 'users.pdf', (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(500).json({ error: 'Failed to download PDF' });
        }
        fs.unlinkSync(outputPath); // Clean up after sending
      });
    });

    writeStream.on('error', (err) => {
      console.error('WriteStream Error:', err);
      res.status(500).json({ error: 'Failed to create PDF' });
    });

  } catch (error) {
    console.error('Export PDF Error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Role exports
exports.exportRolesCsv = async (req, res) => {
  try {
    const roles = await Role.findAll({
      include: [{
        model: User,
        as: 'users',
        attributes: ['firstname', 'lastname', 'email'],
        through: { attributes: [] }
      }]
    });

    const outputPath = path.join(__dirname, '../exports', 'roles.csv');
    
    const csvWriter = createCsvWriter({
      path: outputPath,
      header: [
        { id: 'id', title: 'ID' },
        { id: 'name', title: 'Role Name' },
        { id: 'description', title: 'Description' },
        { id: 'userCount', title: 'Number of Users' },
        { id: 'users', title: 'Users' }
      ]
    });

    const records = roles.map(role => ({
      ...role.toJSON(),
      userCount: role.users.length,
      users: role.users.map(user => `${user.firstname} ${user.lastname}`).join(', ')
    }));

    await csvWriter.writeRecords(records);
    res.download(outputPath, 'roles.csv', (err) => {
      if (err) throw err;
      fs.unlinkSync(outputPath);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.exportRolesExcel = async (req, res) => {
  try {
    const roles = await Role.findAll({
      include: [{
        model: User,
        as: 'users',
        attributes: ['firstname', 'lastname', 'email'],
        through: { attributes: [] }
      }]
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Roles');

    // Define columns
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Role Name', key: 'name', width: 15 },
      { header: 'Description', key: 'description', width: 30 },
      { header: 'Number of Users', key: 'userCount', width: 15 },
      { header: 'Users', key: 'users', width: 30 }
    ];

    // Style the header row
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFE0E0E0' }
    };

    // Add data
    roles.forEach(role => {
      worksheet.addRow({
        ...role.toJSON(),
        userCount: role.users.length,
        users: role.users.map(user => `${user.firstname} ${user.lastname}`).join(', ')
      });
    });

    // Auto filter
    worksheet.autoFilter = {
      from: 'A1',
      to: 'E1'
    };

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=roles.xlsx');

    // Stream the file instead of writing it to disk
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.exportRolesPdf = async (req, res) => {
  try {
    const roles = await Role.findAll({
      include: [{
        model: User,
        as: 'users',
        attributes: ['firstname', 'lastname', 'email'],
        through: { attributes: [] }
      }]
    });

    const doc = new PDFDocument({ margin: 30, size: 'A4', layout: 'landscape' });
    const outputPath = path.join(__dirname, '../exports', 'roles.pdf');
    const writeStream = fs.createWriteStream(outputPath);

    doc.pipe(writeStream);

    // Add title
    doc.fontSize(20).text('Roles Report', { align: 'center' }).moveDown();

    // Prepare table data
    const tableData = {
      headers: ['ID', 'Role Name', 'Description', 'Number of Users', 'Users'],
      rows: roles.map(role => [
        role.id,
        role.name,
        role.description,
        role.users.length,
        role.users.map(user => `${user.firstname} ${user.lastname}`).join(', ')
      ])
    };

    // Add table
    await doc.table(tableData, {
      prepareHeader: () => doc.fontSize(10).font('Helvetica-Bold'),
      prepareRow: () => doc.fontSize(10).font('Helvetica')
    });

    doc.end(); // Finalize PDF

    // Ensure the file is fully written before sending
    writeStream.on('finish', () => {
      res.download(outputPath, 'roles.pdf', (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(500).json({ error: 'Failed to download PDF' });
        }
        fs.unlinkSync(outputPath); // Clean up after sending
      });
    });

    writeStream.on('error', (err) => {
      console.error('WriteStream Error:', err);
      res.status(500).json({ error: 'Failed to create PDF' });
    });

  } catch (error) {
    console.error('Export PDF Error:', error);
    res.status(500).json({ error: error.message });
  }
};