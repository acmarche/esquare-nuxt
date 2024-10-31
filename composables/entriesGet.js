export default (id) => {
    const config = useRuntimeConfig()
    console.log(`fetch ${config.public.API_URL}/notion-php/grrEntries.php?id=${id}`)
    const {pending: pendingGrr, data: dataGrr, error: errorGrr} =
        useFetch(
            `${config.public.API_URL}/notion-php/grrEntries.php?id=${id}`, {}
        )
    return {
        pendingGrr,
        dataGrr,
        errorGrr
    }
}