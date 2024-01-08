import React from 'react'
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    limit,
    DocumentData,
    getDocs,
    QuerySnapshot,
    startAfter,
    Unsubscribe,
} from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import { Link } from 'react-router-dom'

const articleSize = 4

function getFirstArticlesBatch(
    snapshotCallback: (querySnapshot: QuerySnapshot<DocumentData>) => void,
): Unsubscribe {
    const q = query(
        collection(db, 'Blogs'),
        orderBy('createdAt', 'desc'),
        limit(articleSize),
    )

    return onSnapshot(q, snapshotCallback)
}

/**
 * this function will be fired each time the user click on 'More Posts' button,
 * it receive key of last post in previous batch, then fetch next posts
 * starting after last fetched post.
 */
async function articlesNextBatch(lastDocument: any) {
    const next = query(
        collection(db, 'Blogs'),
        orderBy('createdAt', 'desc'),
        startAfter(lastDocument),
        limit(articleSize),
    )

    const articles: any[] = []

    const documentSnapshots = await getDocs(next)

    const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1]

    documentSnapshots.forEach(doc => {
        articles.push({ id: doc.id, ...doc.data() })
    })

    return { articles, lastVisible }
}

const Articles = () => {
    const [data, setData] = React.useState<any[]>([])
    const dataRef = React.useRef(data)
    const [lastDocument, setLastDocument] = React.useState<any>(null)
    const [fetchingData, setFetchingData] = React.useState(true)

    function updateData(newData: any) {
        dataRef.current = newData
        setData(newData)
    }

    React.useEffect(() => {
        const unsub = getFirstArticlesBatch(querySnapshot => {
            const posts: any[] = []
            querySnapshot.docChanges().forEach(({ type, doc }) => {
                if (type === 'added') posts.push({ id: doc.id, ...doc.data() })
            })

            if (dataRef.current.length === 0)
                setLastDocument(
                    querySnapshot.docChanges()[
                        querySnapshot.docChanges().length - 1
                    ].doc,
                )
            setFetchingData(false)
            updateData([...posts, ...dataRef.current])
        })

        return () => {
            unsub()
        }
    }, [])

    async function nextDocuments() {
        if (!lastDocument) return
        setFetchingData(true)
        const { articles, lastVisible } = await articlesNextBatch(lastDocument)

        setLastDocument(lastVisible)
        setFetchingData(false)
        updateData([...data, ...articles])
    }
    //temporary changes
    return (
        <>

            {data.length < 1 ? (
                <div className='flex flex-col justify-center px-6 pt-4 pb-12'>
                    <div className='font-bold text-xl text-center mb-2'>
                        Coming Soon
                    </div>
                    <p className='text-gray-700 text-center text-base'>
                        Please keep on checking with us
                    </p>
                </div>
            ) : (
                <React.Fragment>
                    <div className='p-10 pb-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                        {data.map(article => (
                            <div className='rounded overflow-hidden shadow-lg'>
                                <img
                                    className='w-full max-h-[200px]'
                                    src={article.imageUrl}
                                    alt={article.title}
                                />
                                <div className='px-6 py-4'>
                                    <div className='font-bold text-xl mb-2'>
                                        {article.title}
                                    </div>
                                    <p className='text-gray-700 text-base'>
                                        {article.abstract}
                                    </p>
                                </div>
                                <div className='flex items-center space-x-3 justify-center py-4'>
                                    <Link to={`/blog/${article.id}`}>
                                        <button
                                            type='submit'
                                            className='inline-flex items-center justify-end rounded bg-[#10a65c] hover:opacity-[80%] active:bg-[#f2fcf4] py-1.5 px-1.5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark'
                                        >
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </React.Fragment >
            )}

            {
                data.length > 0 &&
                <div className='flex items-center space-x-3 justify-center py-4 pb-12'>
                    <button
                        onClick={nextDocuments}
                        disabled={!lastDocument}
                        className='inline-flex items-center justify-end rounded bg-[#10a65c] hover:opacity-[80%] active:bg-[#f2fcf4] py-1.5 px-1.5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark'
                    >
                        Load More
                    </button>
                </div>
            }
        </>
    )
}

export default Articles
