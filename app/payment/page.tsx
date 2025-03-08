"use client"
import React, { useState, useEffect } from 'react';
import { ClipboardList, RefreshCcw } from 'lucide-react';
import { useSession } from 'next-auth/react'

interface Transaction {
    transactionId: string;
    message: string;
    name: string;
    email: string;
    amount: number;
    approved: string;
}

interface TransactionsMap {
    [key: string]: Transaction;
}


const Payment = () => {
    const [transactions, setTransactions] = useState<TransactionsMap>({});
    const [searchTransactionIds, setSearchTransactionIds] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { data: session } = useSession();
    const [isUpdating, setIsUpdating] = useState(false);

    const updateStatus = async (ids: string[]) => {
        try {
            // Make API call to update transaction statuses
            const response = await fetch('/api/fetchpayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ids),
            });

            if (!response.ok) {
                throw new Error('Failed to update transaction statuses');
            }
            return true;
        } catch (error) {
            console.error('Error updating transaction statuses:', error);
            return false;
        }
    };

    const handleStatusUpdate = async (e: React.FormEvent) => {
        // Prevent default form submission behavior
        e.preventDefault();
        // Set updating state to true
        setIsUpdating(true);

        try {
            // Split user input by commas and trim whitespace
            const transactionIds = searchTransactionIds.split(',').map(id => id.trim()).filter(id => id);

            // Find matching transaction IDs
            const matchingIds = transactionIds.filter(id => transactions[id]);

            if (matchingIds.length > 0) {
                // Call updateStatus with the matching IDs
                const success = await updateStatus(matchingIds);

                if (success) {
                    alert(`Successfully updated ${matchingIds.length} transaction(s)!`);
                    await fetchpayment()
                    setSearchTransactionIds("");
                } else {
                    alert("Failed to update transactions. Please try again.");
                }
            } else {
                alert("No matching transaction IDs found!");
            }
        } catch (error) {
            console.error('Error in handleStatusUpdate:', error);
            alert("An error occurred. Please try again.");
        } finally {
            // Set updating state back to false when done
            setIsUpdating(false);
        }
    };

    const fetchpayment = async () => {
        setIsLoading(true);
        try {
            if (session?.user?.email) {
                const response = await fetch('/api/fetchpayment')
                const data = await response.json()
                const transaction = Object.keys(data)
                // Fix: Only try to log if there are transactions
                if (transaction.length > 0) {
                    
                }
                setTransactions(data)
            }
        } catch (error) {
            console.error('Error fetching payment data:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        // Fetch transactions from the server
        fetchpayment()

    }, [session?.user?.email]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-red-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600 mx-auto"></div>
                    <p className="mt-4 text-lg font-medium text-red-600">Loading payment data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-red-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-red-900">Payment Analysis</h1>
                    <p className="mt-2 text-red-600">Monitor and manage transaction status</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Status Update Form */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-red-100">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-red-900">Update Transaction Status</h2>
                            <RefreshCcw className="h-6 w-6 text-red-500" />
                        </div>

                        <form onSubmit={handleStatusUpdate} className="space-y-6">
                            <div>
                                <label htmlFor="transactionIds" className="block text-sm font-medium text-red-700">
                                    Transaction IDs (comma-separated)
                                </label>
                                <textarea
                                    id="transactionIds"
                                    value={searchTransactionIds}
                                    onChange={(e) => setSearchTransactionIds(e.target.value)}
                                    className="m-2 block w-full rounded-md border-red-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm h-24 p-3"
                                    placeholder="Enter transaction IDs (e.g., TXN123456789, TXN987654321)"
                                />
                                <p className="mt-2 text-sm text-red-500">
                                    Enter multiple transaction IDs separated by commas
                                </p>
                            </div>

                            <div className='space-y-4'>
                                <label htmlFor="status" className="text-center block text-sm font-medium text-red-700">
                                    Pending Status
                                </label>

                            </div>

                            <button
                                type="submit"
                                disabled={isUpdating}
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isUpdating
                                        ? 'bg-red-400 cursor-not-allowed'
                                        : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                                    }`}
                            >
                                {isUpdating ? (
                                    <>
                                        <span className="inline-block animate-spin mr-2">⟳</span>
                                        Updating...
                                    </>
                                ) : (
                                    'Update Status'
                                )}
                            </button>
                        </form>
                    </div>
                    {/* Current Transaction Details */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-red-100">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-red-900">Current Transactions</h2>
                            <ClipboardList className="h-6 w-6 text-red-500" />
                        </div>

                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                            {Object.keys(transactions).length>0 && Object.keys(transactions).map((transaction) => (
                                // Transaction Card
                                <div key={transaction} className="border border-red-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="grid grid-cols-2 gap-4 mb-3">
                                        <div>
                                            <p className="text-sm font-medium text-red-500">Transaction ID</p>
                                            <p className="mt-1 text-sm text-red-900 break-all">{transaction}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-red-500">Status</p>
                                            <span className={`inline-flex mt-1 px-2 py-1 text-xs font-semibold rounded-full ${transactions[transaction].approved === 'approved'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {transactions[transaction].approved === 'approved' ? 'approved' : 'pending'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <p className="text-sm font-medium text-red-500">Message</p>
                                        <div className="mt-1 bg-red-50 rounded-md p-2 max-h-24 overflow-y-auto">
                                            <p className="text-sm text-red-900 whitespace-pre-wrap">{transactions[transaction].message}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-3">
                                        <div>
                                            <p className="text-sm font-medium text-red-500">Name</p>
                                            <p className="mt-1 text-sm text-red-900">{transactions[transaction].name}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-red-500">Email</p>
                                            <p className="mt-1 text-sm text-red-900 break-all">{transactions[transaction].email}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-red-500">Amount</p>
                                        <p className="mt-1 text-sm text-red-900 font-semibold">₹{transactions[transaction].amount.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Payment;