export default () => {
    const config = useRuntimeConfig()
    const refreshing = isRefreshing()
    console.log(`fetch ${config.public.API_URL}/notion-php/getMenu.php`)
    const {status, data, error} =
        useFetch(`${config.public.API_URL}/notion-php/getMenu.php`, {
            query: {refresh: refreshing},
            key: 'menu',
        })
    return {
        status,
        data,
        error
    }
}