import React from 'react'
import { NotesScreen } from '../notes/NotesScreen'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="journal__main-context">
            <Sidebar />
            
            <main>
                <NotesScreen/>
            </main>

        </div>
    )
}
