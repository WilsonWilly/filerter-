// fichier utile au déployement automatique via gitHub action. fichier de configuration PM2
module.exports = {
  apps: [
    {
      name: "O-jeux-de-societe", // Nom de votre application
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
