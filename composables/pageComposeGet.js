export default (pageId = null) => {
    const refreshing = isRefreshing()
    const config = useRuntimeConfig()
    console.log(`fetch ${config.public.API_URL}/notion-php/getPage.php?page_id=${pageId}`)
    const {status, data, error} =
        useFetch(`${config.public.API_URL}/notion-php/getPage.php`, {
            query: {page_id: pageId, refresh: refreshing},
            key: 'page-' + pageId,
        })
    return {
        status,
        data,
        error
    }
}