const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: true }
});

const Admin = mongoose.model('Admin', AdminSchema);

const createAdminUser = async () => {
  const adminExists = await Admin.findOne({ username: 'admin' });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('hello', 10); // Hash the password
    await Admin.create({ username: 'admin', password: hashedPassword });
    console.log('Admin user created: username - admin, password - hello');
  } else {
    console.log('Admin user already exists');
  }
};

// Call the function to create the admin user
createAdminUser();

module.exports = Admin;
