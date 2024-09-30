import { Head } from '@inertiajs/react';
import { Layout } from '@/Layouts/layout';
import BookmarkUploadForm from '@/Components/BookmarkUploadForm';

export default function Clean() {
    return(
        <>
            <Layout> <Head title="Cleaner" />
            <div>
                <h1>Hello world</h1>
                <BookmarkUploadForm />
            </div>
            </Layout>

        </>
    )
}
