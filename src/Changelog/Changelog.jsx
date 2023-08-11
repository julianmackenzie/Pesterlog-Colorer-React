import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'

function Changelog() {
    const [posts, setPosts] = useState([])

    const importAllPosts = (r) => r.keys().map(r)
    const markdownFiles = importAllPosts(
        require.context('./ChangelogArchives', false, /\.md$/)
    )
        .sort()
        .reverse()

    useEffect(() => {
        const getPosts = async () => {
            await Promise.all(
                markdownFiles.map((file) => {
                    return fetch(file).then((res) => res.text())
                })
            )
                .then((res) =>setPosts(res))
                .catch((err) => console.error(err))
        }
        getPosts()
    }, [])

    const card = {
        width: '100%',
        margin: '30px auto 30px auto',
        padding: '10px 20px 0px 20px',
        overflow: 'hidden',
        minHeight: '200px',
        boxSizing: 'border-box',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }

    return (
        <>
            <div 
                display='flex'
                direction='row'
                justiyContent='space-between'
                alignItems='center'
            />
            <div>
                <div>
                    {posts.map((post, idx) => (
                        <div style={card} key={idx}>
                            <ReactMarkdown
                                components={{
                                    img: ({...props}) => (
                                        <img
                                            style={{
                                                width: '80%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block',
                                                marginLeft: 'auto',
                                                marginRight: 'auto'
                                            }}
                                            {...props}
                                        />
                                    ),
                                    h1: ({...props}) => (
                                        <h1 style={{color: 'white', fontSize: 'x-large'}} {...props} />
                                    ),
                                    h3: ({...props}) => (
                                        <h3 style={{color: 'white', fontSize: 'large', fontWeight: 'bold', marginTop: '10px'}} {...props} />
                                    ),
                                    ul: ({...props}) => (
                                        <ul style={{listStyleType: 'circle', listStylePosition: 'inside'}} {...props} />
                                    ),
                                    blockquote: ({...props}) => (
                                        <blockquote
                                            style={{
                                                color: 'white',
                                                fontSize: '14px',
                                                margin: '0',
                                                marginLeft: '2em',
                                                paddingLeft: '.5em',
                                                borderLeft: '0.2em #eee solid',
                                                fontStyle: 'italic'
                                            }}
                                            {...props}
                                        />
                                    )
                                }}
                            >
                                {post}
                            </ReactMarkdown>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Changelog