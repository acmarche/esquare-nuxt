export default (id = null) => {
    const config = useRuntimeConfig()
    const refreshing = isRefreshing()
    console.log(`${config.public.API_URL}/notion-php/activitiesDatabase.php?id=${id}`)
    const {status, data, error} =
        useFetch(`${config.public.API_URL}/notion-php/activitiesDatabase.php`, {
            query: {id: id, refresh: refreshing},
            key: 'database-activities-' + id,
        })
    return {
        status,
        data,
        error
    }
}