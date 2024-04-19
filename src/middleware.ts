// import { getWebRequest } from "vinxi/http";
import { authOptions } from "./server/auth";
import { createMiddleware } from "@solidjs/start/middleware";
import { getSession } from "@solid-mediakit/auth";

export default createMiddleware({
  onRequest: [
    async function (ev) {
      // const req = getWebRequest();
      // const session = await getSession(req, authOptions);
      const session = await getSession(ev.request, authOptions);
      ev.locals.user = session;
    },
  ],
});
