import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2dwU2fbRxV6hfu55gfTv3iSHQL2",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};