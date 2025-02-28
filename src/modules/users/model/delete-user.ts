import { AppThunk } from "../../../shared/redux";
import { usersApi } from "../api";
import { UserId } from "../users.slice";

export const deleteUser =
  (userId: UserId): AppThunk<Promise<void>> =>
  async (dispatch, _, { router }) => {
    await dispatch(usersApi.endpoints.deleteUser.initiate(userId));
    await router.navigate("/users");
    await dispatch(usersApi.util.invalidateTags(["Users", {type: 'Users', id: 'LIST'}]));
  };
