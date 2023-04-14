import { signInWithGoogle, signOut } from "../../../firebase-connection/auth";
import { useAppDispatch, useAppSelector } from "../../../redux-context/hooks";
import { selectUser } from "../../../redux-context/userSlice";

function ManageAccount({ hideManageAccount }: { hideManageAccount: Function }) {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.userList);

  return (
    <>
      <div className="absolute top-0 z-20 h-screen w-screen bg-black/50 text-white">
        <div className="absolute left-1/2 top-1/2 w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-md border-[0.5px] border-gray-600 bg-gray-900">
          <h2 className="py-4 text-center text-[18px]">Manage accounts</h2>

          {/* list of users --------------------> 
          -------------------------------------->  */}
          {users.map((user) => (
            <div
              className="flex cursor-pointer items-center gap-3 px-6 py-4 hover:bg-gray-800"
              onClick={() => dispatch(selectUser({ user }))}
              key={user.id}
            >
              <img
                src={user.imgAddress}
                alt="Logo"
                className=" mr-2 h-10 w-10 rounded-full "
              />
              <div className="">
                <h3>{user.name}</h3>
                <p className="text-gray-400">{user.email}</p>
              </div>
              <button
                onClick={() => signOut()}
                className="ml-auto rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
              >
                Sign out
              </button>
            </div>
          ))}

          {/* Add account ------------------->
          ---------------------------------->  */}
          <p
            className=" cursor-pointer px-6 pb-3  pt-1 hover:bg-gray-800"
            onClick={() => signInWithGoogle()}
          >
            <span className="mx-2 text-lg">+</span> Add account
          </p>
          <p className="my-4 mr-6  text-right ">
            <button
              className="rounded border border-gray-600 bg-black/50 px-4 py-1.5 hover:bg-black/30"
              onClick={() => hideManageAccount()}
            >
              Close
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default ManageAccount;
