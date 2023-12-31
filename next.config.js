const withPWA = require("next-pwa")
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const nextSettings = {
  reactStrictMode: false,
  optimizeFonts: false,
  swcMinify: true,
  crossOrigin: "anonymous",
  env: {
    title: "Stemnovate",
    titleDescription: "Your Drug Discovery Partner",
    MYSQL_HOST: "stemnovatenextdb.chq9h3jmxtv4.us-east-2.rds.amazonaws.com",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "StemnovateNextAuth",
    MYSQL_USER: "stemnovatenext",
    MYSQL_PASSWORD: "stemnovatenextdbauth",
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    PRODUCT_BASE_URL: process.env.PRODUCT_BASE_URL,
    AWS_S3BUCKET_URL: process.env.AWS_S3BUCKET_URL
  },
  pwa: {
    dest: "public",
    register: true,
    disable: process.env.NODE_ENV === "development",
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // Add webpack-bundle-analyzer only in non-server (client) builds
  //     config.plugins.push(new BundleAnalyzerPlugin());
  //   }
  //   if (!isServer) {
  //     // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
  //     config.resolve.fallback = {
  //       // fs: false,
  //       net: false,
  //       tls: false,
  //       crypto: false,
  //       stream: false,
  //       timers: false
  //     }
  //   }

  //   return config
  // },
  images: {
    // minimumCacheTTL: 30,
    domains: [
      "stemnovate.co.uk",
      "localhost:3000",
      "3.141.24.147",
      "stemnovateimages.s3.us-east-2.amazonaws.com"
    ]
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  // optimization:{
  //   splitChunks:{
  //     chunks:"all",
  //   },
  //   minimize: true,
  //   runtimeChunk: "single",
  //   usedExports: true,
  // },
}

module.exports = withPWA(nextSettings)
