'use client';

import { useEffect } from 'react';
import {XCircleIcon} from "@heroicons/react/24/solid";
import {FaceFrownIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="flex h-full flex-col items-center justify-center gap-2">
            <XCircleIcon className="w-10 text-red-600"/>
            <h2 className="text-xl font-semibold">Something went wrong</h2>
            <Link
                href="/dashboard/invoices"
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            >
                Go Back
            </Link>
        </main>
    );
}