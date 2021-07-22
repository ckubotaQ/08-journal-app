import React from 'react';
import moment from 'moment';

export const JournalEntry = ({id,title, date, body, url}) => {
        const noteDate= moment(date);
        const handleEntryClick=() => {
            
        }
    return (
        <div className="journal__entry pointer">
            {
                url
                &&
                <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2afa87d0-3567-4fc6-b0fd-a462b957a387/dacu4gt-2bc6f245-ea43-438a-90e7-3caaa5343b46.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhZmE4N2QwLTM1NjctNGZjNi1iMGZkLWE0NjJiOTU3YTM4N1wvZGFjdTRndC0yYmM2ZjI0NS1lYTQzLTQzOGEtOTBlNy0zY2FhYTUzNDNiNDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZxeGeMg1hCl2rse68BtJzEMTFCJ0xuoYnquJVXdWqok)'
            }}
            ></div>}
             <div className="journal__entry-body">
                    <p className="journal__entry-title">
                        {title}
                    </p>
                    <p className="journal__entry-content">
                        {body}
                    </p>
            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>
                    {noteDate.format('Do')}
                </h4>
            </div>
        </div>
    )
}
