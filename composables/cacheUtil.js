export function getCachedData(nuxtApp, key) {
    if (!nuxtApp.isHydrating) {
        console.log('no hydrating', key)
        return
    }
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    if (!data) {
        console.log('no caches data', key)
        return
    }
    const lasEditTime = new Date(data.last_edited_time)
    console.log("last edit " + lasEditTime)
    console.log('page payload ' + key)
    const today = new Date()
    const isExpired = lasEditTime.getTime() > today.getTime()
    if (isExpired) {
        console.log('expired date ', lasEditTime, 'today', today)
        return
    }

    return data
}

export function isRefreshing() {
    const query = useRoute().query
    let refreshing = 0
    if(query.hasOwnProperty('refresh')) {
        refreshing = 1
    }
    return refreshing
}

export function getRandomItems(arr, numItems) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, numItems);
}