export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      middlename: DataTypes.STRING,
      username: DataTypes.STRING,
      state: DataTypes.STRING,
      gender: DataTypes.STRING,
      dob: DataTypes.STRING,
      gender: DataTypes.STRING,
      phone: DataTypes.STRING,
      status: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {}
  );

  User.associate = function(models) {
    // associations go here
  };

  return User;
};
