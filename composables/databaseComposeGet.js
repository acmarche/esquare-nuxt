export default (id = null) => {
    const config = useRuntimeConfig()
    const refreshing = isRefreshing()
    console.log(`${config.public.API_URL}/notion-php/getDatabase.php?id=${id}`)
    const {status, data, error, refresh} =
        useFetch(`${config.public.API_URL}/notion-php/getDatabase.php`, {
            query: {id: id, refresh: refreshing},
            key: 'database-' + id,
            onResponseError(context) {
                const response = context.response
                const error = context.error
                console.log("error message " + error?.message)
                console.log("error: " + JSON.stringify(context))
                status.value = "error"
                error.value = error?.message
            },
            onResponse(context) {
                status.value = "success"
                error.value = null
            }
        })
    return {
        status,
        data,
        error
    }
}