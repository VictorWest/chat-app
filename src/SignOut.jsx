
export default function SignOut({auth}){
  return auth.currentUser && <button onClick={() => auth.signOut()} className="ms-auto hover:bg-red-950 px-3 rounded-md">Sign Out</button>
}