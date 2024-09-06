
"use client"
import React from 'react'
import { Button} from '@/components/ui/button'
import Link from 'next/link'
import { useMenuStore } from '@/store/toggleMenuStore'
import{LogOut}from 'lucide-react'

const Logout = () => {

const{ isOpen} =useMenuStore()

  return (
    <div >
        <Button asChild>
            <Link href={"/"} className='flex gap-2'>
            <LogOut/>
            <span className={`${!isOpen && "max-md:hidden"} ${isOpen && "hidden"}` }>Log Out</span>
            </Link>
        </Button>

    </div>
  )
}

export default Logout