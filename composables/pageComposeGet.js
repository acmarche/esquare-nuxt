import {isRefreshing} from "~/composables/cacheUtil.js";

export default (pageId = null) => {
    const refreshing = isRefreshing()
    const config = useRuntimeConfig()
    console.log(`fetch ${config.public.API_URL}/notion-php/getPage.php?page_id=${pageId}`)
    const {status, data, error} =
        useFetch(`${config.public.API_URL}/notion-php/getPage.php`, {
            query: {page_id: pageId, refresh: refreshing},
            key: 'page-' + pageId,
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

    console.log("status: " + status.value, "error " + error.value, "data " + data.value)

    return {
        status,
        data,
        error
    }
}