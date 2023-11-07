/*

// fetching data from the api using the client (which is more versatile than the dataProvider)

const client = useClient();
const [freightByCustomer, setFreightByCustomer] = useState<any>([]);
const freightByCustomerContext = useList({
    data: freightByCustomer,
    perPage: 5,
    sort: { field: 'total_freight', order: 'DESC' },
});
useEffect(() => {
    client
        .from('Orders')
        .select(`
            customer_id,
            total_freight:$sum(freight),
            customer:customers(company_name)
        `)
        .order('total_freight', { ascending: false })
        .limit(5)
        // @ts-ignore
        .groupby('customer_id, orders_customer')
        .then(({data, error}:PostgrestResponse<any>) => {
            setFreightByCustomer(
                // post processing to format data
                data?.map((i: any) => {
                    return {
                        customer_id: i.customer_id,
                        total_freight: i.total_freight,
                        company_name: i.customer.company_name
                    };
                })
            );
        }
    );
}, []);

// display the data fetched from the api using the client
<ListContextProvider value={freightByCustomerContext}>
    <DatagridConfigurable bulkActionButtons={false}>
        <FunctionField 
            render={(r:any) => (
                <Link href={createPath({ resource: 'customers', type: 'show', id: r.customer_id })} underline="none">#{r.customer_id}</Link>
            )} 
        />
        <TextField source="company_name" />
        <NumberField source="total_freight" />
    </DatagridConfigurable>
    <Pagination />
</ListContextProvider>


// fetching and displaying data using react-admin built-in functionality

<ResourceContextProvider value="orders">
    <List
        title={' '}
        disableSyncWithLocation
        component="div"
        filter={{ 'ShippedDate@is': 'null' }}
        filters={[
            <TextInput source="order_id@eq" label="Search by Order ID" alwaysOn />,
        ]}
        perPage={5}
        hasCreate={false}
    >
        <DatagridConfigurable bulkActionButtons={false}>
            <ReferenceField source="order_id" reference="orders"  />
            <DateField source="order_date" />
            <ReferenceField source="customer_id" reference="customers">
                <TextField source="company_name" />
            </ReferenceField>
        </DatagridConfigurable>
    </List>
</ResourceContextProvider>
*/


import { useEffect, useState, } from 'react';
import { Typography, Card, CardContent, } from '@mui/material';
import { Title, } from 'react-admin';
import { Card as TremorCard, DonutChart, Text, Metric } from "@tremor/react";

import {
    TopToolbar,FilterButton, ResourceContextProvider, 

} from 'react-admin';
import { useClient, Schema, ListGuesser } from '@subzerocloud/ra-subzero';

const MyTopToolbar = ({ hasCreate = false, children, ...rest }) => (
    <TopToolbar {...rest} >{children}</TopToolbar>
);
const CopyIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
    )
}

// const valueFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()} kg`;
const Dashboard = (props: { schema?: Schema, resources?: string[] }) => {
    const { schema, resources } = props;
    const client = useClient();
    const [rowsStatistics, setRowsStatistics] = useState<any>([]);
    const [totalRows, setTotalRows] = useState<any>(0);
    const [columnByType, setColumnByType] = useState<any>([]);
    // pick a random table from the schema to display as a list
    const randomTable = resources && resources.length > 0 ? resources[Math.floor(Math.random() * resources.length)] : undefined
    useEffect(() => {
        client.functions.invoke('total-rows', { method: 'GET' }).then(({ data }) => {
            setRowsStatistics(data);
            const total = data.reduce((acc: number, c:{row_count:number}) => {
                return acc + c.row_count;
            }
                , 0);
            setTotalRows(total);
            const columnByType = Object.entries(Object.keys(schema).reduce((acc, key) => {
                Object.keys(schema[key].columns).forEach((col) => {
                    const type = schema[key].columns[col].data_type;
                    if (acc[type]) {
                        acc[type] += 1;
                    } else {
                        acc[type] = 1;
                    }
                })
                return acc;
            }, {}))
                .map(([key, value]) => ({ key, value }))
            setColumnByType(columnByType);
        });
    }, [schema]);

    return (
        <Card sx={{marginTop: 3}}>
            <Title title="Dashboard" />
            <CardContent>
                <div className='grid grid-cols-3 gap-4 place-items-start'>
                    <TremorCard className='max-w-lg' decoration="top" decorationColor="blue">
                        <Text>Tables</Text>
                        <Metric>{Object.keys(schema).length}</Metric>
                    </TremorCard>
                    <TremorCard className='max-w-lg' decoration="top" decorationColor="blue">
                        <Text>Columns</Text>
                        <Metric>{
                            Object.keys(schema).reduce((acc, key) => {
                                return acc + Object.keys(schema[key].columns).length;
                            }
                            , 0)
                        }</Metric>
                    </TremorCard>
                    <TremorCard className='max-w-lg' decoration="top" decorationColor="blue">
                        <Text>Rows</Text>
                        <Metric>{totalRows}</Metric>
                    </TremorCard>
                    <TremorCard className='max-w-lg'>
                        <Text>Rows per table</Text>
                        <DonutChart category="row_count" index="table_name" data={rowsStatistics}/>
                    </TremorCard>
                    <TremorCard className='max-w-lg'>
                        <Text>Column distribution by data type</Text>
                        <DonutChart category="value" index="key"
                            data={columnByType}
                        />
                        
                    </TremorCard>
                    
                </div>
                
                {randomTable &&
                    <div className='mt-5'>
                        <Typography variant="h6" gutterBottom>Data from a randomly selected table ({randomTable})</Typography>
                        <ResourceContextProvider value={randomTable}>
                            <ListGuesser
                                disableSyncWithLocation
                                title={' '}
                                storeKey={false}
                                perPage={5}
                                actions={<MyTopToolbar><FilterButton /></MyTopToolbar>}
                            />
                        </ResourceContextProvider>
                    </div>
                }
                
            </CardContent>
        </Card>
    );
};

export default Dashboard;
