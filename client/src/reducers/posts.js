/*
    Reducer is a function, it accepts the state and the actions
    The state here is renamed posts
    Replace "const reducer" by "export default"
 */
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }

}