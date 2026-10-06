import { Metadata } from "next";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPostData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data;
};

export const generateMetadata = async ({ params }: IProps): Promise<Metadata> => {
  const { id } = await params;

  const postInfo: IPosts = await getPostData(id);

  return {
    title: `Post - ${postInfo.title}| Next App`,
  };
};

const Post = async ({ params }: IProps) => {
  const { id } = await params;

  const postInfo: IPosts = await getPostData(id);

  console.log(postInfo);

  return (
    <>
      <div>
        <h3>{postInfo.title}</h3>

        <p>{postInfo.body}</p>
      </div>
    </>
  );
};

export default Post;
