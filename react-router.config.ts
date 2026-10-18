import type { Config } from "@react-router/dev/config";

export default {
  // The app uses client-side routes and is published as static files on Netlify.
  ssr: false,
} satisfies Config;
