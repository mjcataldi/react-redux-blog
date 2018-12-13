import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  //bad approach!!
  const promise = jsonPlaceholder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: promise
  };
};
