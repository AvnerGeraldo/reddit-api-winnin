const url_api = 'https://www.reddit.com'
const sub_reddit = '/r/reactjs'

export const getPosts = (after_post = '', order_post = '') => {
    const limit = 5
    let request_url = `${url_api}${sub_reddit}`
    
    if (order_post.length > 0)
        request_url +=`/${order_post}/`
    
    request_url += `.json?limit=${limit}`

    if (after_post.length > 0)
        request_url += `&after=${after_post}`

    return fetch(request_url, {
        method: 'GET'
    }).then(res => res.json())
}

export const getCommentPostById = (postId) => {
    let request_url = `/comments/${postId}/all_the_fundamental_reactjs_concepts/.json`

    return fetch(`${url_api}${sub_reddit}${request_url}`).then(res => res.json())
}