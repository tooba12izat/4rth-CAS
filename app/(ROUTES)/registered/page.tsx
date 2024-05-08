import Link from "next/link";

const Page = async () => {


    return (
        <>
            <div className="registered text-2xl md:text-4xl text-center text-blue-400">REGISTERED SUCCESSFULLY !</div>
            <div className="buttonn flex justify-center mt-10">
                <button className="playerList-button px-4 py-2 bg-blue-400 text-white rounded-md">
                    <Link href="/players">
                        <p>Registered Players List</p>
                    </Link>
                </button>
            </div>

        </>
    )
}
export default Page;
