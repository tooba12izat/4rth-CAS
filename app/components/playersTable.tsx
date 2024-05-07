import { UserListType } from "@/app/helpers/types";
import { connectDb } from "@/app/helpers/db/dbConn";
import User from "@/app/helpers/db/models/user";


const getPlayers = async () => {
    try {
        await connectDb();
       const user = await User.find({});
        // if (user.length === 0) {
        //     // If data is not found, throw an error
        //     throw new Error('No users found for the given query and page.');
        // }
        return user;
    } catch (err) {
        throw new Error('Failed to fetch data.');
    }
}

const Table = async () => {
    const players = await getPlayers()
    return (
        <>
            <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                    <th scope="col" className="px-3 py-5 font-medium text-lg">
                        ID
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium text-lg ">
                        Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-lg">
                        Email
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {players.map((user: UserListType) => {
                    const idAsString = user._id.toString();
                    return (
                        <tr key={user._id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                            <td className="whitespace-nowrap py-3 px-3 ">
                                <p>{user._id}</p>
                            </td>
                            <td className="whitespace-nowrap py-3 px-3">
                                <p>{user.name}</p>
                            </td>
                            <td className="whitespace-nowrap py-3 px-3">
                                {user.sailno}
                            </td>
                            <td className="whitespace-nowrap py-3 px-3">
                                {user.category}
                            </td>
                            {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-3">
                                    <DeleteFriendButton friendId={idAsString} userId={id} />
                                </div>
                            </td> */}

                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}
export default Table;