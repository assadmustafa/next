import Customers from "@/app/ui/customers/customers";
import { Metadata } from 'next';
import Search from "@/app/ui/search";
import {AddCustomer, CreateInvoice} from "@/app/ui/invoices/buttons";
import {Suspense} from "react";
import {InvoicesTableSkeleton} from "@/app/ui/skeletons";
import Table from "@/app/ui/invoices/table";
import Pagination from "@/app/ui/invoices/pagination";
import {fetchCustomers} from "@/app/lib/data";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import CustomersList from "@/app/ui/dashboard/customers";

// Edit title
export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page() {
    const customers = await fetchCustomers();
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`text-2xl`}>Customers</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search customers..." />
                <AddCustomer />
            </div>
            <div className="mt-5 flex w-full justify-center">
                <CustomersList customers ={customers} />
            </div>
        </div>
    );
}