/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Don’t cache HTML (pages) so deploys show immediately
        source: "/((?!_next/static|_next/image|favicon\\.ico).*)",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
};
export default nextConfig;
