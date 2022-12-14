import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Search, Toolbar, ExcelExport, Column } from '@syncfusion/ej2-react-grids';

import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Employees" />
            <GridComponent
                allowPaging
                toolbar={['Search']}
                dataSource={employeesData}
                width="auto"
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Employees 