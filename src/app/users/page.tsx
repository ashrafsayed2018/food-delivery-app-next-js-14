import UserTabs from '@/components/layout/UserTabs'
import React from 'react'

function Users() {
    return (
        <div className='max-w-lg mx-auto mt-8'>
            <UserTabs isAdmin={true}/>
        </div>
    )
}

export default Users