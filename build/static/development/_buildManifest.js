self.__BUILD_MANIFEST = {
  __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
  "/_error": ["static\u002Fchunks\u002Fpages\u002F_error.js"],
  "/task": ["static\u002Fchunks\u002Fpages\u002Ftask.js"],
  "/task/[taskId]": ["static\u002Fchunks\u002Fpages\u002Ftask\u002F[taskId].js"],
  sortedPages: ["\u002F_app", "\u002F_error", "\u002Ftask", "\u002Ftask\u002F[taskId]"],
}
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
