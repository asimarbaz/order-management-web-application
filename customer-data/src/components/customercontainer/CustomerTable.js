import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Modal } from 'antd';
import CustomerDetails from "./CustomerDetails";
import { useSelector } from "react-redux";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";


const CustomerTable = (props) => {
    const { customers2 } = props
    const customers = useSelector((state) => {
        return state.Customer
    })

    const [filteredCustomers, setFilteredCustomers ] = useState(customers2)
    const [ search, setSearch] = useState('')
    const [selectedId, setSelectedId] = useState()


    useEffect(() => {
        // dispatch(startListCustomer())
        const res = customers2.filter((customer) => {
            return customer.Name.toLowerCase().match(search.toLowerCase()) ||
                   customer.Phone.toString().match(search.toLowerCase()) 
        })
        setFilteredCustomers(res)

    }, [search, filteredCustomers])

    // const handleShow = (Id) => {
    //     return 
    // }
    const [isModalOpen, setIsModalOpen] = useState(false);
    //const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = (Id) => {
        setIsModalOpen(true);
        setSelectedId(Id)
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false)
        setSelectedId(null)
    };



    const columns = [
        {
            name: 'Id',
            selector: row => row.Id,
            sortable:true
        },
        {
            name: 'Name',
            selector: row => row.Name,
            sortable:true
        },
        {
            name: 'Mobile',
            selector: row => row.Phone
        },
        {
            name:'Details',
            cell: (row) => (
                <div>
                    <Button 
                        type="primary"
                        onClick={() => showModal(row.Id)}
                    >
                        Show
                    </Button>
                    <Modal
                        title=""
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={null}
                    >
                        <div>
                            <CustomerDetails
                                selectedId={selectedId}
                                filteredCustomers={filteredCustomers}
                            />
                        </div>
                    </Modal>
                </div>
            )
        }
    ]


    return (
        <div>
            <h2>Listing Customers</h2>
            {customers && 
                <DataTable
                    // title="Listing Customers"
                    columns={columns}
                    data={filteredCustomers}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
                    fixedHeader
                    fixedHeaderScrollHeight="600px"
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <input
                            type="text"
                            placeholder="search"
                            className="w-25 form-control"
                            value={search}
                            onChange = {(e) => setSearch(e.target.value)}
                        >
                        </input>
                        }
                />
            }
        </div>
    );
}

export default CustomerTable;
