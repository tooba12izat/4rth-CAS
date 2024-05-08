import Link from "next/link";

const Page = async () => {


    return (
        <>
            <div className="registered">REGISTERED SUCCESSFULLY !</div>
            <div className="buttonn">
            <button className="playerList-button">
                <Link href="/players">
                    <p>Registered Players List</p>
                </Link>
            </button>
            </div>
            
        </>
    )
}
export default Page;
