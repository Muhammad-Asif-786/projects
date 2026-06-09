const ROLE_PERMISSIONS = {
  admin: ["*"],
  manager: ["view_users", "manage_categories"],
  buyer: ["view_products"],
  seller: ["create_products"],
  guest: ["view_public"],
};

export const checkPermission = (permission) => {
  return (req, res, next) => {
    const role = req.role; // 👈 auth se aayega

    if (!role) {
      return res.status(401).json({ message: "No role found" });
    }

    if (ROLE_PERMISSIONS[role]?.includes("*")) {
      return next();
    }

    if (!ROLE_PERMISSIONS[role]?.includes(permission)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};