let posts = []

export const createPost = (data, user) => {
    console.log({
        data,
        user
    })
    posts.push({ 
        createdBy: user.email,
        ...data
    })
}