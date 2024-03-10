"use client"
import React from "react";

export default function SideBar(){

    return (
<>
 {/* サイドバー */}
    <aside className="bg-gray-800 text-white w-64 flex-shrink-0">
        <div className="p-4">
            <h1 className="text-lg font-semibold">サイドバー</h1>
            <ul className="mt-4">
            <li><a href="/" className="block py-2">TOPPAGE</a></li>
            <li><a href="/schedule" className="block py-2">スケジュール確認</a></li>
            <li><a href="/result" className="block py-2">成績入力</a></li>
        </ul>
        </div>
    </aside>
</>
    )
}
