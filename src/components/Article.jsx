import { Title } from './index';

const Article = (props) => {
  return (
    <div>
      <Title title={props.title} />
      <h2>{props.content}</h2>
    </div>
  );
};

export default Article;
