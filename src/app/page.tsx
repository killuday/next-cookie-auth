import {redirect} from "next/navigation";

import {Login} from "@/components/component/Login";
import {getSession} from "../../lib";

export default function Home() {
  const session=getSession()
  return (
      <>
        {JSON.stringify(session, null, 2)}
<Login />
      </>

  );
}
