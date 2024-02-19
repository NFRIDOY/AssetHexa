import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://asset-hexa-server.vercel.app",
  }),
  tagTypes: "blogAPI",
  endpoints: (builder) => ({
    // Get all blogs data
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["blogAPI"],
    }),
    // Get single blog data
    getBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["blogAPI"],
    }),
    // update blog like data
    likeBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data?.id}?likeORdislike=like`,
        method: "PATCH",
        body: data?.likeData,
      }),
      invalidatesTags: ["blogAPI"],
    }),
    // update blog dislike data
    dislikeBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data?.id}?likeORdislike=dislike`,
        method: "PATCH",
        body: data?.dislikeData,
      }),
      invalidatesTags: ["blogAPI"],
    }),
    // update blog comment data
    commentBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data?.id}?likeORdislike=comment`,
        method: "PATCH",
        body: data?.commentData,
      }),
      invalidatesTags: ["blogAPI"],
    }),

    // get Bookmarked Data
    getBookmarked: builder.query({
      query: (email) => `/bookmark/${email}`,
      providesTags: ["bookmarkedApi"],
    }),
    // Post Bookmarked Data
    addToBookmark: builder.mutation({
      query: (bookmarkData) => ({
        url: "/bookmark",
        method: "POST",
        body: bookmarkData,
      }),
      invalidatesTags: ["bookmarkedApi"],
    }),
    // Update Blog Verification Data
    updateVerification: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["blogAPI"],
    }),
  }),
});
// invalidatesTags: ["BlogAPI"], for mutations {update,delete,create}
export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useLikeBlogMutation,
  useDislikeBlogMutation,
  useCommentBlogMutation,
  useGetBookmarkedQuery,
  useAddToBookmarkMutation,
  useUpdateVerificationMutation,
} = blogApi;
