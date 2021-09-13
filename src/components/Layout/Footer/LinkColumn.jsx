import { Link } from 'react-router-dom';

function LinkColumn(props) {
  return (
    <div>
      {props.links?.map((l) => (
        <Link key={l.id}>{l.link_text}</Link>
      ))}
    </div>
  );
}

export default LinkColumn;
