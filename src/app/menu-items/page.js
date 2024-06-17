"use client";
import { useProfile } from "@/components/UseProfile";
import Right from "@/components/icons/Right";
import UserTabs from "@/components/layout/UserTabs";
import Link from "next/link";


export default function MenuItemsPage() {
    const { loading, data } = useProfile();

    if (loading) {
        return 'Loading user info...';
    }

    if (!data.admin) {
        return 'NOT AN ADMIN';
    }

    return (
        <section className="mt-8 max-w-md mx-auto">
            <UserTabs isAdmin={true} />
            <div className="mt-8">
                <Link
                    className="button flex"
                    href={'/menu-items/new'}
                >
                    <span>Create new menu item</span>
                    <Right />
                </Link>
            </div>
        </section>
    );
}