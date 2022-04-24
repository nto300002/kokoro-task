import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"

const config: BlitzConfig = {
  middleware: [
    sessionMiddleware({
      cookiePrefix: "streamconnect",
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  distDir: "build",
}
module.exports = config
