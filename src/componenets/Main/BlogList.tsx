type Prop = {
  message: string;
  number: number;
};

const BlogList = ({ message, number }: Prop) => {
  return (
    <h1>
      {message} and {number}
    </h1>
  );
};

export default BlogList;
