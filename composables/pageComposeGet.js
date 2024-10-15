import {isRefreshing} from "~/composables/cacheUtil.js";

export default (pageId = null) => {
    const refreshing = isRefreshing()
    const config = useRuntimeConfig()
    console.log(`fetch ${config.public.API_URL}/notion-php/getPage.php?page_id=' + ${pageId}`)
    const {status, data, error} =
        useFetch(`${config.public.API_URL}/notion-php/getPage.php`, {
            query: {page_id: pageId, refresh: refreshing},
            key: 'page-' + pageId,
        })

    console.log(status.value, data.value, error.value)

    return {
        status,
        data,
        error
    }
}