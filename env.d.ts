export declare global{
    namespace NodeJS{
        interface ProcessEnv {
          NODE_ENV: string,
          GITHUB_API_BASE_URL
        }
    }
}