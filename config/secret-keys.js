module.exports = {
    google: {
        clientID: process.env.gapiID,
        clientSecret: process.env.gapiSecret,
    },
    jwt: process.env.jwt,
    mongodb: {
        user: process.env.dbUser,
        password: process.env.dbPassword,
        connect: process.env.dbConnect,
    }
}