import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

interface pageProps {}

const page = async ({}) => {
  const session = await getServerSession(authOptions);

  return <>dashboard</>;
};

export default page;
