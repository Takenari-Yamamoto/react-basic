import { useState } from 'react';
import { Content, Title, PublishButton } from './index';

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  console.log(isPublished);
  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
    </div>
  );
};

export default Article;
