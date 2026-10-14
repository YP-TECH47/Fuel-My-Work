import { notFound } from "next/navigation";
import PaymentPage from "@/components/PaymentPage";
import User from "@/models/User";
import connectDb from "@/dataBase/connectDB";

export default async function Username({ params }) {
  const { username } = await params; // or const { username } = params; on Next 15

  await connectDb();

  const user = await User.findOne({ username });

  if (!user) {
    notFound();
  }

  return <PaymentPage username={username} />;
}

export async function generateMetadata({ params }) {
  const { username } = await params; // or params.username on Next 15

  return {
    title: `Support ${username} - Get Me A Chai`,
  };
}