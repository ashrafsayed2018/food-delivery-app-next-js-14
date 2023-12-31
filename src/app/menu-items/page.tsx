import UserTabs from '@/components/layout/UserTabs'
import React from 'react'

function MenuItems() {
 return (
    <div className='max-w-lg mx-auto mt-8'>
        <UserTabs isAdmin={true}/>
    </div>
 )
}

export default MenuItems