import incrementHeart from "../../mutations/incrementHeart"
import { useQuery, useParam, useMutation } from "blitz"
import getProfile from "../../queries/getProfile"

export const HandleIncrementHeart = async (id: number) => {
  const profileId = useParam("profileId", "number")
  const [user, { refetch }] = useQuery(getProfile, { id: profileId })
  const [incrementHeartMutation] = useMutation(incrementHeart)

  try {
    await incrementHeartMutation({ id })
    refetch()
  } catch (error) {
    alert(`エラーが発生しました`)
  }
  return <button onClick={() => HandleIncrementHeart(user.id)}></button>
}
