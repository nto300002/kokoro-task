import { useQuery } from "blitz"
import getCurrentUser from "app/queries/users/getCurrentUser"

export const useCurrentUser = () => {
  const [user] = useQuery(getCurrentUser, null)
  return user
}
