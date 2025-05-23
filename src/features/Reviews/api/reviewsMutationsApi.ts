import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import { useMutation } from "@tanstack/react-query";

const createCommentURL = `/wp/v2/comments`;

export const createComment = async (data: FormData): Promise<{ bo: true }> => {
  const response = await formattedApiInstance.post<unknown, { bo: true }>(
    createCommentURL,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response;
};

export const useCreateComment = () => {
  return useMutation({
    mutationFn: createComment,
  });
};
