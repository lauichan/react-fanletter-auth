const SELECT_MEMBER = "member/SELECT_MEMBER";

const initialState = "카리나";

export const selectMember = (payload) => {
  return { type: SELECT_MEMBER, payload };
};

const member = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MEMBER:
      return action.payload;
    default:
      return state;
  }
};

export default member;
