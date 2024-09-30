import React from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const BookmarkUploadForm = () => {
    return (
        <>
            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <input className="block w-full py-4 px-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none" id="file_input" type="file" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default BookmarkUploadForm;

