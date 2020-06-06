import React from 'react'

export default function NewsItem({ created_at_i, title, num_comments, points, url, author, objectID, upvote, hide, castVote }) {


    const time = () => {
        let message = '';
        let now = Date.now() / 1000;
        let parse = (val) => parseInt(val)

        let diff = now - created_at_i;
        if (diff < 60) {
            message += parse(diff) + ' Second(s) ago';
        } else if (diff / 60 < 60) {
            message += parse(diff / 60) + ' Minute(s) ago'
        } else if (diff / 3600 < 24) {
            message += parse(diff / 3600) + ' Hour(s) ago'
        } else if (diff / (24 * 3600) < 7) {
            message += parse(diff / (24 * 3600)) + ' Day(s) ago'
        } else if (diff / (24 * 3600) < 30) {
            message += parse(diff / (7 * 24 * 3600)) + ' Week(s) ago'
        } else if (diff / (24 * 3600) < 365) {
            message += parse(diff / (30 * 24 * 3600)) + ' Month(s) ago'
        } else {
            message += parse(diff / (365 * 24 * 3600)) + ' Year(s) ago'
        }
        return message;
    }
    return (
        <tr>
            <td>{num_comments}</td>
            <td>{upvote ? upvote : points}</td>
            <td><button className='upVoteButton' type='button' onClick={e => castVote(objectID, points)}><i class='fas fa-caret-up'></i></button></td>
            <td>
                <span className='news'><span className='title'>{title}</span> <a className='dim' href={url}>({url?url.split('/')[2]:url})</a>
                    
                    <span className='dim'>by</span> <span className='author'>{author}</span> 
                    <span className='dim'>{time()}</span>
                    <button className='hideButton' onClick={() => hide(objectID, title)}>[ hide ]</button>
                   </span>
            </td>
        </tr>
    )
}