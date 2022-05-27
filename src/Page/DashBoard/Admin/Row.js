import React from 'react';

const Row = ({user}) => {
    return (
        <div>
            <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">User</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Id</th>
           
          </tr>
        </div>
    );
};

export default Row;