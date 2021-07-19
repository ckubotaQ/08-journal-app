import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
            <input
            type="text"
            placeholder="Some awesome title"
            className="notes__title-input"
            autoComplete="off"
            
            />
            <textarea
                placeholder="What happened today"
                className="notes__textarea"
            >
            </textarea>
            <div className="notes__image">
                <img
                    src="https://p4.wallpaperbetter.com/wallpaper/263/673/74/the-sky-minimalism-night-stars-wallpaper-preview.jpg"
                    alt="imagen"
                />
            </div>
            </div>
        </div>
    )
}
