import React from 'react'
import { Link } from 'react-router-dom'

import Service from '../app.service'
import NewsItem from './story.component'
import Graph from './graph.component'


export default function Layout(props) {

    const [hits, setHits] = React.useState([])
    const [headers] = React.useState(['Comments', 'Vote Count', 'UpVote', 'News Details'])
    const [page, setPage] = React.useState(0)
    const [nbPages, setnbPages] = React.useState(0)


    React.useEffect(() => {
        Service.fetch(props.location.pathname, props.location.search, res => {
            res.data.hits ? setHits(res.data.hits) : setHits(hits)
            res.data.page ? setPage(res.data.page) : setPage(page)
            res.data.nbPages ? setnbPages(res.data.nbPages) : setnbPages(nbPages)
        })
    }, [props.location.search])



    const hide = (objectID, title) => {
        Service.hide(objectID, title, () => {
            let newHits = hits.map(item => {
                if (objectID === item.objectID) {
                    return { ...item, hidden: true }
                } else {
                    return item
                }

            })
            setHits(newHits)
        })
    }
    const nexPageUrl = () => {
        let url;
        if (props.location.search.length > 0) {
            let params = props.location.search.split('?')[1].split('&')
            let pageParam = params.filter(item => item.includes('page'))
            if (pageParam.length > 0) {
                url = props.location.pathname + props.location.search.replace(pageParam[0], 'page=' + (page + 1));
            } else {
                url = props.location.pathname + props.location.search + '&page=' + (page + 1)
            }

        } else {
            url = props.location.pathname + '?page=' + (page + 1)
        }

        return url;

    }

    const prevPageUrl = () => {
        let url;
        let params = props.location.search.split('?')[1].split('&')
        let pageParam = params.filter(item => item.includes('page'))
        if (pageParam.length > 0) {
            url = props.location.pathname + props.location.search.replace(pageParam[0], 'page=' + (page - 1));
        } else {
            url = props.location.pathname + props.location.search + '&page=' + (page - 1)
        }
        return url;
    }
    const fetchUpvotes = (objectID) => {
        let local = JSON.parse(localStorage.getItem(objectID));
        let upvote = null;
        if (local && local.upvote) {
            upvote = local.upvote;
        }
        return upvote;
    }

    const castVote = (objectID, points) => {
        Service.upvote(objectID, points, votes => {
            let newHits = hits.map(item => {
                if (item.objectID === objectID) {
                    return { ...item, upvote: votes }
                } else {
                    return item
                }

            })
            setHits(newHits)
        })
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <table>
                <thead >
                    <tr className='head'>
                        {headers.map(item => <th key={item}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {hits.map(item => {
                        let component;
                        if (!(Service.isHidden(item.objectID) || item.hidden)){
                            component = <NewsItem key={item.objectID} {...item} hide={hide} upvote={fetchUpvotes(item.objectID)} castVote={castVote} />
                        }
                        return component;
                    })}
                </tbody>
            </table>
            <div className='nav' >
                {page > 0 && <Link className='link' to={prevPageUrl}>Previous</Link>} | {(page < nbPages - 1) && <Link className='link' to={nexPageUrl}>Next</Link>}
            </div>
            <hr />
            <Graph data={hits.map(item => {
                let data = null;
                if (!(Service.isHidden(item.objectID) || item.hidden)) {
                    data = {
                        objectID: item.objectID,
                        votes: item.upvote ? item.upvote : item.points
                    }
                }
                return data;
            }).filter(item => item)} />
        </div>
    )
}