import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "Ex-Terminator";
const isGitHubPagesBuild =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPagesBuild && repositoryName ? `/${repositoryName}/` : "/",
});
