import Link from 'next/link';
import React from 'react';
import DataTable from 'react-data-table-component';

function EventContainer() {
    const columns = [
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },

        {
            name: 'Location',
            selector: row => row.location,
            sortable: true,
        },
        {
            name: 'Hosted by ',
            selector: row => row.host,
            sortable: true,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Meeting regarding fund collection',
            date: '02/02/2022',
            location: 'Karkala',
            host: 'ಅಲೇರಿ ಶ್ರೀ ಸತ್ಯ ಸಾರಮಾನಿ ಕಾನದ ಕಟದ ಮೂಲ ಕ್ಷೇತ್ರ (ರಿ)',
        },
        {
            id: 2,
            title: 'Nivedana patra',
            date: '05/02/2022',
            location: 'Bantwal',
            host: 'ಅಲೇರಿ ಶ್ರೀ ಸತ್ಯ ಸಾರಮಾನಿ ಕಾನದ ಕಟದ ಮೂಲ ಕ್ಷೇತ್ರ (ರಿ)',
        },
        {
            id: 3,
            title: 'Meeting regarding cultural program',
            date: '02/02/2022',
            location: 'Karkala',
            host: 'ಅಲೇರಿ ಶ್ರೀ ಸತ್ಯ ಸಾರಮಾನಿ ಕಾನದ ಕಟದ ಮೂಲ ಕ್ಷೇತ್ರ (ರಿ)',
        },
        {
            id: 4,
            title: 'Meeting regarding Commitee member selection',
            date: '13/02/2022',
            location: 'Bantwal',
            host: 'ಅಲೇರಿ ಶ್ರೀ ಸತ್ಯ ಸಾರಮಾನಿ ಕಾನದ ಕಟದ ಮೂಲ ಕ್ಷೇತ್ರ (ರಿ)',
        },
        {
            id: 5,
            title: 'Meeting regarding fund collection',
            date: '23/02/2022',
            location: 'Sulia',
            host: 'ಅಲೇರಿ ಶ್ರೀ ಸತ್ಯ ಸಾರಮಾನಿ ಕಾನದ ಕಟದ ಮೂಲ ಕ್ಷೇತ್ರ (ರಿ)',
        },

    ];

    const customStyles = {
        rows: {
            style: {

                border: '1px solid #cbd5e1'

            },
        },
        headCells: {
            style: {
                fontSize: '1em',
                borderLeft: '1px solid #cbd5e1'

            },
        },

        cells: {
            style: {
                fontSize: '1em',
                borderLeft: '1px solid #cbd5e1'
            },
        },
        headRow: {
            style: {
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                border: '1px solid #cbd5e1'

            },
            denseStyle: {

            },
        },
    };

    return (
        <div className='container mx-auto py-0 h-screen bg-gray-50'>
            <div className='h-20 border w-full bg-white flex items-center justify-between px-4 mt-4 rounded-sm'>
                <div className='text-2xl font-semibold text-gray-600'>Events Near you</div>
                <div className=''>
                    <Link href='https://api.whatsapp.com/send/?phone=+919535485134&text=i would like to recieve notifications from aleri &app_absent=0'>
                        <button className='border-2 px-3 py-1 rounded text-gray-500'> Subscribe</button>
                    </Link>
                    <button className='border-2 px-3 py-1 rounded text-gray-500'> + Host Event</button>

                </div>
            </div>
            <div className='h-1/2'>
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}

                />
            </div>
        </div>
    );
}

export default EventContainer;
