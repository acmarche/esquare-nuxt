export default (id = null) => {
    const config = useRuntimeConfig()
    const refreshing = isRefreshing()
    console.log(`${config.public.API_URL}/notion-php/getDatabase.php?id=${id}`)
    const {status, data, error, refresh} =
        useFetch(`${config.public.API_URL}/notion-php/getDatabase.php`, {
            query: {id: id, refresh: refreshing},
            key: 'database-' + id,
        })
    return {
        status,
        data,
        error
    }
}