/*export default (sequelize, DataTypes) => {
  return sequelize.define("RolePermissions", {}, { timestamps: false });
};*/


export default (sequelize, DataTypes) => {
  return sequelize.define(
    "RolePermission",
    {
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      permissionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "role_permissions",
      freezeTableName: true,
      timestamps: false
    }
  );
};
