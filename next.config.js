/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
}


module.exports = {
    /**
     * Enable static exports for the App Router.
     *
     * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
     */
    output: 'export',
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    // assetPrefix: assetPrefix,

    /**
     * Set base path. This is the slug of your GitHub repository.
     *
     * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
     */
    // basePath: basePath,

    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
     */
};
