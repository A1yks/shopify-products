function checkEnv() {
    if (!process.env.DB_CONNECT) {
        throw new Error('env variable DB_CONNECT is not defined');
    }

    if (!process.env.SHOPIFY_ACCESS_TOKEN) {
        throw new Error('env variable SHOPIFY_ACCESS_TOKEN is not defined');
    }

    if (!process.env.SHOP) {
        throw new Error('env variable SHOP is not defined');
    }
}

export default checkEnv;
