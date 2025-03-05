const Navigation = () => {
    return(
        <>
        <nav className=" flex sticky top-0 justify-end">
            <ul className="flex flex-row justify-between p-3 text-2xl font-lucky text-white drop-shadow-[0_1.2px_1.2px_rgba(18,41,108,1)]">
                <li className="p-1 hover:text-neutral-200">Home</li>
                <li className="p-1 hover:text-neutral-200">Contact</li>
                <li className="p-1 hover:text-neutral-200">About us</li>
            </ul>
        </nav>
        </>
    )

}

export default Navigation